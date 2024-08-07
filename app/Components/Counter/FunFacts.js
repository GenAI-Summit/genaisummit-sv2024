import Image from "next/image";
import NumberRoller from "./NumberRoller";

const FunFacts = () => {
  const data = [
    {
      title: "Attendees",
      start: 0,
      end: 5000,
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
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {data.map((item, index) => (
        <div key={index} className="w-[35%] md:w-[18%] z-10">
          <div className="text-4xl md:text-6xl text-color1 font-bold">
            <NumberRoller start={item.start} end={item.end} />
            <div className="text-2xl md:text-3xl text-color7 font-semibold">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunFacts;
