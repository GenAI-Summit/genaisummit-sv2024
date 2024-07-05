import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const SpeakerDetail = ({ speaker }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start w-full">
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={200}
          height={200}
          loading="lazy"
        />
        <div className="h-full flex flex-col ml-4 font-bold justify-center text-wrap">
          <div className="text-xl">{speaker.name}</div>
          <div className="text-lg">{speaker.title}</div>
          <div className="text-lg">{speaker.company}</div>
          <div className="flex gap-1 mt-1">
            {speaker.website && (
              <Link href={speaker.website} target="_blank">
                <Icon
                  width={30}
                  height={30}
                  src="/icons/website.png"
                  alt={speaker.name + "'s website"}
                />
              </Link>
            )}
            {speaker.linkedin && (
              <Link href={speaker.linkedin} target="_blank">
                <Icon
                  width={30}
                  height={30}
                  src="/icons/linkedin.png"
                  alt={speaker.name + "'s linkedin account"}
                />
              </Link>
            )}
            {speaker.twitter && (
              <Link href={speaker.twitter} target="_blank">
                <Icon
                  width={30}
                  height={30}
                  src="/icons/x.png"
                  alt={speaker.name + "'s twitter"}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">{speaker.bio}</div>
    </div>
  );
};

export default SpeakerDetail;
