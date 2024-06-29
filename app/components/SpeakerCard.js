import Image from "next/image";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <Image src={speaker.image} alt={speaker.name} width={200} height={200} />
      <h3>{speaker.name}</h3>
      <p>{speaker.title}</p>
    </div>
  );
};

export default SpeakerCard;
