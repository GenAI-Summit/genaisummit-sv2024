import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

import parse from "html-react-parser";

const SpeakerDetail = ({ speaker }) => {
  return (
    <>
      <div className="flex flex-col items-center md:px-3 md:py-2 p-1">
        <div className="flex items-center justify-start w-full">
          <Image
            src={speaker.avatar}
            alt={speaker.name}
            width={150}
            height={150}
            loading="lazy"
          />
          <div className="h-full flex flex-col ml-4 justify-center text-wrap items-start">
            <div className="text-lg font-bold">{speaker.name}</div>
            {speaker.title && (
              <div className="text-base font-medium">{speaker.title}</div>
            )}
            {speaker.company && (
              <div className="text-base font-medium">
                @{speaker.orgnization}
              </div>
            )}
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
          </div>
        </div>
        <div className="mt-4 text-left text-lg md:text-xl">
          {parse(speaker.bio)}
        </div>
      </div>
    </>
  );
};

export default SpeakerDetail;
