import styles from "../styles/border.module.css";
import SectionLayout from "../Layouts/SectionLayout";
import SpeakerCard from "./SpeakerCard";

const Speakers = ({ speakers }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="w-full flex flex-wrap mt-2 gap-x-[2%] md:gap-x-10 gap-y-10 justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[23%] md:w-32 lg:w-36 ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-2 flex flex-col justify-center items-start text-color5">
                <p className="text-[8px] md:text-[12px] lg:text-[14px] font-bold">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[7px] md:text-[10px] lg:text-[12px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[7px] md:text-[10px] lg:text-[12px]">
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
