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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-600 via-gray-900 to-transparent opacity-80 z-20"></div>
      <div className="max-w-maxWidth relative z-20 flex flex-col items-center justify-center h-full text-color8 text-center p-6 gap-y-10">
        <div className="font-monaspace_krypton">
          <p className="text-2xl md:text-5xl mb-4 bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
            #AIAREALL
          </p>
          <p className="text-4xl md:text-7xl mb-4">GENAI SUMMIT</p>
          <p className="text-4xl md:text-7xl mb-4">
            <span>Silicon Valley</span>{" "}
            <span className="bg-gradient-to-tl from-color1 to-color2 bg-clip-text text-transparent">
              2024
            </span>
          </p>
        </div>
        <div>
          <div className="text-2xl md:text-6xl font-bold mb-4">
            <CountdownTimer time="2024-11-01T00:00:00" />
          </div>
          <p className="text-xl md:text-2xl mb-6">
            <span className="font-bold">Santa Clara Convention Center</span>
            <span className="bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
              {" | "}
            </span>
            <span className="font-bold">Santa Clara, CA</span>
            <span className="bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
              {" | "}
            </span>
            <span className="font-bold">Nov 1 - Nov 3</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <SubscribeBtn width="w-48" />
          <TicketBtn width="w-48" />
          <AddToCalendarBtn
            width="w-48"
            title="GENAI SUMMIT SV 2024"
            details=""
            location="Santa Clara Convention Center, Santa Clara, CA"
            startDate="2024-11-01T08:00:00"
            endDate="2024-11-03T18:00:00"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
