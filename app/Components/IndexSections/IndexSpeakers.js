import SectionLayout from "../../Layouts/SectionLayout";
import SpeakerCard from "../SpeakerCard";
import ShowMore from "../Button/ShowMore";
import RegisterBtn from "../Button/RegisterBtn";
import { getSpeakers } from "/lib/api";

import styles from "../../styles/border.module.css";

const IndexSpeakers = async () => {
  const speakers = await getSpeakersData();

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={<RegisterBtn text="Become Our Speaker" mode="day" />}
      >
        <div className="mt-8 md:mt-10 flex flex-wrap justify-start gap-x-[9%] md:gap-x-[7%] lg:gap-x-[8%] gap-y-12 md:gap-y-14 lg:gap-y-20">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[27%] md:w-[28%] lg:w-[19%] ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-4 flex flex-col items-start justify-center gap-y-4 text-color6">
                <p className="font-bold text-[12px] md:text-[14px] lg:text-[16px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[10px] md:text-[12px] lg:text-[14px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[10px] md:text-[12px] lg:text-[14px]">
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

const getSpeakersData = async () => {
  const speakers = await getSpeakers();
  return speakers;
};

export default IndexSpeakers;
