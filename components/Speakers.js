import Link from "next/link";
import styles from "@/styles/border.module.css";
import SectionLayout from "@/layouts/SectionLayout";
import SpeakerCard from "@/components/SpeakerCard";
import { LinkedinIcon, TwitterIcon } from "react-share";

const Speakers = ({ speakers, widget }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={widget}
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
                {speaker.socials.linkedin || speaker.socials.twitter ? (
                  <div className="flex gap-4">
                    {speaker.socials.linkedin && (
                      <Link href={speaker.socials.linkedin} target="_blank">
                        <LinkedinIcon size={32} round={true} />
                      </Link>
                    )}
                    {speaker.socials.twitter && (
                      <Link href={speaker.socials.twitter} target="_blank">
                        <TwitterIcon size={32} round={true} />
                      </Link>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Speakers;
