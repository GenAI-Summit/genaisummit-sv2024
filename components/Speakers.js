// import Link from "next/link";
import { Suspense } from "react";
import Loader from "@/components/Loader";
// import styles from "@/styles/border.module.css";
import SectionLayout from "@/layouts/SectionLayout";
import SpeakerCard from "@/components/SpeakerCard";
// import { LinkedinIcon, TwitterIcon } from "react-share";

const Speakers = ({ speakers, widget }) => {
  return (
    <>
      <SectionLayout
        title="Speakers"
        description="LISTEN TO THE EVENT SPEAKERS"
        widget={widget}
      >
        <div className="w-full flex flex-wrap mt-12 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.7%] gap-y-7 justify-start">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-[23%] md:w-[15%] lg:w-[11%] flex flex-col"
            >
              <Suspense fallback={<Loader />}>
                <SpeakerCard key={speaker.id} speaker={speaker} />
              </Suspense>
              <div className="mt-2 flex flex-col items-start justify-between text-theme1Light1 flex-grow">
                <p className="text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] font-bold">
                  {speaker.name}
                </p>
                {speaker.title && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
                    {speaker.title}
                  </p>
                )}
                {speaker.organization && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
                    @{speaker.organization}
                  </p>
                )}
                {speaker.note && (
                  <p className="text-[7px] md:text-[9px] lg:text-[11px] xl:text-[12px]">
                    {speaker.note}
                  </p>
                )}
                
                {
                  /*
                speaker.socials.linkedin || speaker.socials.twitter ? (
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
                ) : null
                */
                }
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Speakers;
