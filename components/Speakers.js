import styles from "@/styles/border.module.css";
import SectionLayout from "@/layouts/SectionLayout";
import SpeakerCard from "@/components/SpeakerCard";

const Speakers = ({ speakers }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
      >
        <div className="w-full flex flex-wrap mt-12 gap-x-[5%] md:gap-x-[2%] gap-y-14 justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[30%] md:w-[18%] ${styles.border}`}
            >
              <SpeakerCard key={speaker.id} speaker={speaker} />
              <div className="mt-4 flex flex-col justify-center items-start text-theme1Light1 gap-y-2 md:gap-y-4">
                <p className="text-[10px] md:text-[12px] lg:text-[15px] font-bold">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[8px] md:text-[10px] lg:text-[13px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[8px] md:text-[10px] lg:text-[13px]">
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
