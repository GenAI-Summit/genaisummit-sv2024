import Link from "next/link";
import { Suspense } from "react";
import Loader from "@/components/Loader";
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
        <div className="w-full flex flex-wrap mt-12 gap-x-[2%] md:gap-x-[2%] gap-y-14 justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-[32%] md:w-[18%] ${styles.border} flex flex-col`}
            >
              <Suspense fallback={<Loader />}>
                <SpeakerCard key={speaker.id} speaker={speaker} />
              </Suspense>
              <div className="mt-4 flex flex-col justify-between items-start text-theme1Light1 gap-y-2 md:gap-y-4 flex-grow">
                <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-bold">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
                    @{speaker.organization}
                  </p>
                )}
                {speaker.socials.linkedin || speaker.socials.twitter ? (
                  <div className="flex gap-2 md:gap-3 lg:gap-4">
                    {speaker.socials.linkedin && (
                      <Link href={speaker.socials.linkedin} target="_blank">
                        <LinkedinIcon size={24} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" round={true} />
                      </Link>
                    )}
                    {speaker.socials.twitter && (
                      <Link href={speaker.socials.twitter} target="_blank">
                        <TwitterIcon size={24} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" round={true} />
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
