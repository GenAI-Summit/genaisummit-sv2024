import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import HtmlToMarkdown from "@/components/HtmlToMarkdown";
import { LinkedinIcon, TwitterIcon } from "react-share";

const SpeakerDetail = ({ speaker }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col items-center md:p-4 p-2">
        <div className="flex flex-row items-center gap-6 w-full">
          <div className="rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={speaker.avatar}
              alt={speaker.name}
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center text-wrap items-start gap-y-4">
            <div className="text-base md:text-lg font-bold">{speaker.name}</div>
            {speaker.title && (
              <div className="text-sm md:text-base font-medium">{speaker.title}</div>
            )}
            {speaker.organization && (
              <div className="text-sm md:text-base font-medium">
                @{speaker.organization}
              </div>
            )}
            {speaker.socials.linkedin || speaker.socials.twitter ? (
              <div className="flex gap-4 mt-1">
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
      </div>

      <div className="h-4/5 flex-grow overflow-y-auto mt-8 text-left text-base md:text-lg">
        <Suspense fallback={<Loader />}>
          <HtmlToMarkdown html={speaker.bio} />
        </Suspense>
      </div>
    </div>
  );
};

export default SpeakerDetail;
