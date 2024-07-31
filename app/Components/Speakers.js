import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";

const Speakers = ({ speakers }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="w-full flex flex-wrap mt-2 gap-x-2 gap-y-4 justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-32 md:w-36 text-[7px] md:text-[10px]"
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Speakers;
