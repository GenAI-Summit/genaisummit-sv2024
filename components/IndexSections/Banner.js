import { Suspense } from "react";
import Loader from "@/components/Loader";
import TicketBtn from "@/components/Button/TicketBtn";
import AddToCalendarBtn from "@/components/Button/AddToCalendarBtn";
import SubscribeBtn from "@/components/Button/SubscribeBtn";
import CountdownTimer from "@/components/Counter/CountdownTimer";

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
      <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-20"></div>
      <div className="max-w-maxWidth relative z-20 flex flex-col items-center justify-center h-full text-theme1Light1 text-center p-6 gap-y-12 md:gap-y-14 lg:gap-y-16">
        <div className="font-monaspace_krypton flex flex-col items-center gap-y-4 lg:gap-y-10">
          <p>
            <span className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
              #AIAREALL
            </span>
          </p>
          <p className="text-2xl md:text-4xl lg:text-7xl">GENAI SUMMIT</p>
          <p className="text-2xl md:text-4xl lg:text-7xl">
            <span>Silicon Valley</span>{" "}
            <span className="bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
              2024
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-8 md:gap-y-8 lg:gap-y-10">
          <div className="text-xl md:text-3xl lg:text-6xl">
            <Suspense fallback={<Loader />}>
              <CountdownTimer time="2024-11-01T00:00:00" />
            </Suspense>
          </div>
          <div className="flex flex-col text-base md:text-lg lg:text-xl gap-y-2 lg:gap-y-4">
            <p>Santa Clara Convention Center</p>
            <p>Santa Clara, CA</p>
            <p>Nov 1 - Nov 3</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <SubscribeBtn mode="plain" width="w-48" />
            <Suspense fallback={<Loader />}>
              <TicketBtn
                width="w-48"
                fill={true}
                mode="black"
                border={true}
                url="/tickets"
                evt="Banner Ticket Button"
              />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <AddToCalendarBtn
                width="w-48"
                mode="plain"
                title="GENAI SUMMIT SV 2024"
                details=""
                location="Santa Clara Convention Center, Santa Clara, CA"
                startDate="2024-11-01T08:00:00"
                endDate="2024-11-03T18:00:00"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
