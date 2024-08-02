import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";
import ShowMore from "./ShowMore";
import { getSpeakers } from "/lib/api";

import styles from "../styles/border.module.css";

const IndexSpeakers = async () => {
  const speakers = await getSpeakersData();

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-10">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-1/4 md:w-[21%] h-full"> pt-[8px] pr-[8px] ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-2 flex flex-col items-start justify-center gap-y-1">
                <p className="text-color2 font-bold md:text-lg text-[12px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-color5 md:text-base text-sm">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-color5 md:text-base text-sm">
                    @{speaker.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <ShowMore target="/speakers" text="View All Speakers" />
      </SectionLayout>
    </>
  );
};

const getSpeakersData = async () => {
  const speakers = await getSpeakers();
  return speakers.slice(0, 12);
};

export default IndexSpeakers;
