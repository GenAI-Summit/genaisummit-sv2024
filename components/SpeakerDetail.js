import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import HtmlToMarkdown from "@/components/HtmlToMarkdown";

const SpeakerDetail = ({ speaker }) => {
  return (
    <>
      <div className="flex flex-col items-center md:p-4 p-2">
        <div className="flex items-center gap-6 w-full">
          <div className="rounded-full overflow-hidden">
            <Image
              src={speaker.avatar}
              alt={speaker.name}
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center text-wrap items-start gap-y-4">
            <div className="text-lg font-bold">{speaker.name}</div>
            {speaker.title && (
              <div className="text-base font-medium">{speaker.title}</div>
            )}
            {speaker.organization && (
              <div className="text-base font-medium">
                @{speaker.organization}
              </div>
            )}
            {speaker.website || speaker.linkedin || speaker.twitter ? (
              <div className="flex gap-1 mt-1">
                {speaker.website && (
                  <Link href={speaker.website} target="_blank">
                    <Icon
                      width={30}
                      height={30}
                      src="/images/icons/website.png"
                      alt={speaker.name + "'s website"}
                    />
                  </Link>
                )}
                {speaker.linkedin && (
                  <Link href={speaker.linkedin} target="_blank">
                    <Icon
                      width={30}
                      height={30}
                      src="/images/icons/linkedin.png"
                      alt={speaker.name + "'s linkedin account"}
                    />
                  </Link>
                )}
                {speaker.twitter && (
                  <Link href={speaker.twitter} target="_blank">
                    <Icon
                      width={30}
                      height={30}
                      src="/images/icons/x.png"
                      alt={speaker.name + "'s x account"}
                    />
                  </Link>
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-8 text-left text-lg md:text-xl">
          <Suspense fallback={<Loader />}>
            <HtmlToMarkdown html={speaker.bio} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetail;
