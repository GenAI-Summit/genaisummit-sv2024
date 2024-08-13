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
      title: "Founders/CEOs",
      start: 0,
      end: 53,
      symbol: "%",
    },
    {
      title: "AI Developers",
      start: 0,
      end: 35,
      symbol: "%",
    },
    {
      title: "VCs",
      start: 0,
      end: 15,
      symbol: "%",
    },
    {
      title: "Media/KOLs",
      start: 0,
      end: 10,
      symbol: "%",
    },
  ];
  return (
    <div className="relative w-full h-auto py-10 overflow-hidden my-8 flex justify-center items-center">
      <Image
        src="/images/propaganda/funfacts_bg.png"
        alt="Fun Facts Background"
        quality={100}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="z-10 w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-12 max-w-maxWidth">
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
    </div>
  );
};

export default FunFacts;
