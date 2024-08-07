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
              className={`w-1/4 md:w-[16%] ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-2 flex flex-col items-start justify-center gap-y-1 text-color5">
                <p className="font-bold md:text-[14px] text-[8px]">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="md:text-[12px] text-[7px]">{speaker.title}</p>
                )}
                {speaker.organization && (
                  <p className="md:text-[12px] text-[7px]">
                    @{speaker.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <ShowMore target="/speakers" text="View All Speakers" />
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
