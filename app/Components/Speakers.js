import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";

const Speakers = ({ speakers }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="w-full flex flex-wrap mt-2 gap-x-10 gap-y-10 justify-center md:justify-start">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="w-32 md:w-36">
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-2 flex flex-col justify-center items-center">
                <p className="text-center text-color2 text-[14px] font-bold">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-center text-color5 text-[12px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-center text-color5 text-[12px]">
                    @{speaker.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Speakers;
