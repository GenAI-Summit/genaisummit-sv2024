"use client";

// import { Suspense } from "react";
import { useState } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SectionLayout from "@/layouts/SectionLayout";
import SpeakerCard from "@/components/SpeakerCard";
// import ShowMore from "@/components/Button/ShowMore";
import ShowAll from "@/components/Button/ShowAll";
import RegisterBtn from "@/components/Button/RegisterBtn";
// import { getHomeSpeakers } from "@/lib/api";
import useSpeakers from "@/hooks/useSpeakers";

import styles from "@/styles/border.module.css";

const IndexSpeakers = () => {
  const { speakers, isLoading, isError } = useSpeakers();
  const [showAll, setShowAll] = useState(false);
  // let homeSpeakers = await getHomeSpeakers();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const onShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={<RegisterBtn text="Become Our Speaker" mode="day" />}
      >
        <div className="mt-8 md:mt-10 flex flex-wrap justify-start gap-x-[2%] md:gap-x-[8%] gap-y-14 lg:gap-y-20">
          {speakers.slice(0, showAll ? speakers.length : 24).map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[32%] md:w-[19%] ${styles.border} flex flex-col`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-4 flex flex-col items-start justify-between gap-y-2 md:gap-y-3 text-theme1Light1 flex-grow">
                <p className="font-bold text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                    @{speaker.organization}
                  </p>
                )}
                {speaker.note && (
                  <p className="text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                    {speaker.note}
                  </p>
                )}
                {/*
                {speaker.socials.linkedin || speaker.socials.twitter ? (
                  <div className="flex gap-2 md:gap-3 lg:gap-4">
                    {speaker.socials.linkedin && (
                      <Link href={speaker.socials.linkedin} target="_blank">
                        <LinkedinIcon size={24} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" round={true} />
                      </Link>
                    )}
                    {speaker.socials.twitter && (
                      <Link href={speaker.socials.twitter} target="_blank">
                        <TwitterIcon size={24} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" round={true} />
                      </Link>
                    )}
                  </div>
                ) : null}
                 */}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8">
          <ShowAll text={showAll ? "Show Less" : "Show All Speakers"} onClick={onShowAll} />
        </div>
      </SectionLayout>
    </>
  );
};

export default IndexSpeakers;
