import Image from "next/image";
import NumberRoller from "./Counter/NumberRoller";

const FunFacts = () => {
  const data = [
    {
      title: "Attendees",
      start: 0,
      end: 5000,
      symbol: "+",
    },
    {
      title: "Exhibitors",
      start: 0,
      end: 300,
      symbol: "+",
    },
    {
      title: "Speakers",
      start: 0,
      end: 150,
      symbol: "+",
    },
    {
      title: "Sessions",
      start: 0,
      end: 100,
      symbol: "+",
    },
    {
      title: "Management",
      start: 0,
      end: 18,
      symbol: "%",
    },
    {
      title: "C-Level",
      start: 0,
      end: 14,
      symbol: "%",
    },
    {
      title: "Founders",
      start: 0,
      end: 10,
      symbol: "%",
    },
    {
      title: "Developers",
      start: 0,
      end: 8,
      symbol: "%",
    },
  ];
  return (
    <div className="relative w-full h-auto py-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-12 overflow-hidden my-8">
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
            <NumberRoller
              start={item.start}
              end={item.end}
              symbol={item.symbol}
            />
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
