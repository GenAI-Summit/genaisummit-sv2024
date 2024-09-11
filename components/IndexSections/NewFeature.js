import Image from "next/image";

const NewFeature = ({ feature, index }) => {
  return (
    <div
      className={`w-full flex items-center justify-between gap-8 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image src={feature.image} alt={feature.title} width={100} height={100} />
      <div className="p-4">
        <h2 className="text-lg md:text-2xl font-bold">{feature.title}</h2>
        <p className="mt-4 md:text-xl">{feature.description}</p>
      </div>
    </div>
  );
};

export default NewFeature;
