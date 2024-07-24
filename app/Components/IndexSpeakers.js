import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";
import ShowMore from "./ShowMore";
import { getSpeakers } from "/lib/api";

const IndexSpeakers = async () => {
  const speakers = await getSpeakersData();

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-1/4 text-[7px] md:w-[21%] md:text-[12px]"
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
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
