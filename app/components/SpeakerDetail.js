import Image from "next/image";

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
        </div>
      </div>
      <div className="mt-4">{speaker.bio}</div>
    </div>
  );
};

export default SpeakerDetail;
