"use client";

import SectionLayout from "../../Layouts/SectionLayout";
import SpeakerCard from "../SpeakerCard";
import ShowMore from "../Button/ShowMore";
import RegisterBtn from "../Button/RegisterBtn";
import useSpeakers from "../../Hooks/useSpeakers";
import Loader from "../Loader";
import Error from "../Error";
//import { getIndexSpeakers } from "/lib/api";

import styles from "../../styles/border.module.css";

const IndexSpeakers = () => {
  const { indexSpeakers, isLoading, isError } = useSpeakers();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={<RegisterBtn text="Become Our Speaker" mode="day" />}
      >
        <div className="mt-8 md:mt-10 flex flex-wrap justify-start gap-x-[4%] md:gap-x-[7%] lg:gap-x-[8%] gap-y-12 md:gap-y-14 lg:gap-y-20">
          {indexSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[48%] md:w-[28%] lg:w-[19%] ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-4 flex flex-col items-start justify-center gap-y-2 md:gap-y-3 text-theme1Light1">
                <p className="font-bold text-[14px] md:text-[14px] lg:text-[20px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[11px] md:text-[12px] lg:text-[16px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[11px] md:text-[12px] lg:text-[16px]">
                    @{speaker.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8">
          <ShowMore target="/speakers" text="View All Speakers" mode="day" />
        </div>
      </SectionLayout>
    </>
  );
};

/*
const getSpeakersData = async () => {
  const speakers = await getIndexSpeakers();
  return speakers;
};
*/

export default IndexSpeakers;
