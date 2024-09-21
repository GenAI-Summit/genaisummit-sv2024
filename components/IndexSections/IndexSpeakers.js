import { Suspense } from "react";
import Loader from "@/components/Loader";
import SectionLayout from "@/layouts/SectionLayout";
import SpeakerCard from "@/components/SpeakerCard";
import ShowMore from "@/components/Button/ShowMore";
import RegisterBtn from "@/components/Button/RegisterBtn";
import { getHomeSpeakers } from "@/lib/api";

import styles from "@/styles/border.module.css";

const IndexSpeakers = async () => {
  let homeSpeakers = await getHomeSpeakers();

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={<RegisterBtn text="Become Our Speaker" mode="day" />}
      >
        <div className="mt-8 md:mt-10 flex flex-wrap justify-start gap-x-[7%] lg:gap-x-[8%] gap-y-14 lg:gap-y-20">
          {homeSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[28%] lg:w-[19%] ${styles.border}`}
            >
              <Suspense fallback={<Loader />}>
                <SpeakerCard key={speaker.id} speaker={speaker} />
              </Suspense>
              <div className="mt-4 flex flex-col items-start justify-center gap-y-2 md:gap-y-3 text-theme1Light1">
                <p className="font-bold text-[10px] md:text-[14px] lg:text-[20px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[8px] md:text-[12px] lg:text-[16px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[8px] md:text-[12px] lg:text-[16px]">
                    @{speaker.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8">
          <Suspense fallback={<Loader />}>
            <ShowMore target="/speakers" text="View All Speakers" mode="day" />
          </Suspense>
        </div>
      </SectionLayout>
    </>
  );
};

export default IndexSpeakers;
