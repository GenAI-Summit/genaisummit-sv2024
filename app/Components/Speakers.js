import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";
import { getSpeakers } from "/lib/api";

const Speakers = async () => {
  const speakers = await getSpeakersData();

  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="flex flex-wrap justify-around mt-2 gap-x-2 gap-y-4 md:justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-1/4 md:w-36 text-[7px] md:text-[10px]"
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

const getSpeakersData = async () => {
  const speakers = await getSpeakers();
  return speakers;
};

export default Speakers;
