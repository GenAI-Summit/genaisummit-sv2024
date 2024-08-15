import TicketBtn from "./Button/TicketBtn";
import AddToCalendarBtn from "./Button/AddToCalendarBtn";
import SubscribeBtn from "./Button/SubscribeBtn";
import CountdownTimer from "./Counter/CountdownTimer";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        src="/videos/promotion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-600 via-gray-900 to-transparent opacity-70 z-20"></div>
      <div className="max-w-maxWidth relative z-20 flex flex-col items-center justify-center h-full text-color8 text-center p-6 gap-y-12 md:gap-y-14 lg:gap-y-16">
        <div className="font-monaspace_krypton flex flex-col items-center gap-y-4 lg:gap-y-10">
          <p>
            <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
              #AIAREALL
            </span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-7xl">GENAI SUMMIT</p>
          <p className="text-3xl md:text-4xl lg:text-7xl">
            <span>Silicon Valley</span>{" "}
            <span className="bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
              2024
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-8 md:gap-y-8 lg:gap-y-10">
          <div className="text-2xl lg:text-6xl">
            <CountdownTimer time="2024-11-01T00:00:00" />
          </div>
          <p className="text-base md:text-lg lg:text-xl">
            <span>Santa Clara Convention Center</span>
            <span>{" | "}</span>
            <span>Santa Clara, CA</span>
            <span>{" | "}</span>
            <span>Nov 1 - Nov 3</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <SubscribeBtn width="w-48" />
            <TicketBtn
              fill={true}
              width="w-48"
              mode="day"
              url="https://whova.com/portal/registration/genai_202405/"
            />
            <AddToCalendarBtn width="w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
/*
            <AddToCalendarBtn
              width="w-48"
              title="GENAI SUMMIT SV 2024"
              details=""
              location="Santa Clara Convention Center, Santa Clara, CA"
              startDate="2024-11-01T08:00:00"
              endDate="2024-11-03T18:00:00"
            />
*/
