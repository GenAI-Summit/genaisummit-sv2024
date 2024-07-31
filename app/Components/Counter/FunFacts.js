import CounterCard from "./CounterCard";
import Image from "next/image";

const FunFacts = () => {
  const data = [
    {
      title: "Attendees",
      start: 0,
      end: 3000,
    },
    {
      title: "Speakers",
      start: 0,
      end: 150,
    },
    {
      title: "Exhibitors",
      start: 0,
      end: 300,
    },
    {
      title: "Sessions",
      start: 0,
      end: 100,
    },
  ];
  return (
    <div className="relative w-full h-96 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 overflow-hidden my-8">
      <Image
        src="/images/propaganda/funfacts_bg.png"
        alt="Fun Facts Background"
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {data.map((item, index) => (
        <div key={index} className="w-[35%] md:w-[18%] z-10">
          <CounterCard title={item.title} start={item.start} end={item.end} />
        </div>
      ))}
    </div>
  );
};

export default FunFacts;
