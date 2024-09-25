import { Suspense } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import NumberRoller from "@/components/Counter/NumberRoller";

const FunFacts = () => {
  const data = [
    {
      title: "Attendees",
      start: 0,
      end: 10000,
      symbol: "+",
    },
    {
      title: "Speakers",
      start: 0,
      end: 200,
      symbol: "+",
    },
    {
      title: "Exhibitors",
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
    <div className="relative w-full h-auto py-10 md:py-16 lg:py-20 overflow-hidden flex justify-center items-center">
      <Image
        src="/images/propaganda/funfacts_bg.png"
        alt="Fun Facts Background"
        quality={100}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
      <div className="z-10 w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-y-24 lg:gap-y-32 max-w-maxWidth">
        {data.map((item, index) => (
          <div key={index} className="w-[35%] md:w-[18%] z-10">
            <div>
              <div className="font-monaspace_neon text-2xl md:text-4xl lg:text-6xl bg-gradient-to-br from-theme1FunFactsColor1 via-theme1FunFactsColor2 to-theme1FunFactsColor3 text-transparent bg-clip-text">
                <Suspense fallback={<Loader />}>
                  <NumberRoller
                    start={item.start}
                    end={item.end}
                    symbol={item.symbol}
                  />
                </Suspense>
              </div>
              <div className="mt-2 md:mt-5 md:text-xl lg:text-2xl text-color8">
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
