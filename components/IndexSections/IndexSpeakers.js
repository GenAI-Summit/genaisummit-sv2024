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

// import styles from "@/styles/border.module.css";

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
        <div
          /*className="w-full flex flex-wrap mt-12 gap-x-[2%] md:gap-x-[2%] gap-y-14 justify-start"*/
          className="w-full flex flex-wrap mt-12 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.7%] gap-y-7 justify-start"
        >
          {speakers.slice(0, showAll ? speakers.length : 48).map((speaker) => (
            <div
              key={speaker.id}
              /*className={`w-[32%] md:w-[19%] ${styles.border} flex flex-col`}*/
              className="w-[23%] md:w-[15%] lg:w-[11%] flex flex-col"
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-2 flex flex-col items-start justify-between text-theme1Light1 flex-grow">
                <p className="font-bold text-[9px] md:text-[11px] lg:text-[12px] xl:text-[13px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
                    @{speaker.organization}
                  </p>
                )}
                {speaker.note && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
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
          <ShowAll text={showAll ? "Show Less" : "Show More"} onClick={onShowAll} />
        </div>
      </SectionLayout>
    </>
  );
};

export default IndexSpeakers;
