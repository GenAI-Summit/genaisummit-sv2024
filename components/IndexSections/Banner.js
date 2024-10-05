"use client";

import { Suspense } from "react";
import Loader from "@/components/Loader";
import TicketBtn from "@/components/Button/TicketBtn";
import RegisterBtn from "@/components/Button/RegisterBtn";
// import AddToCalendarBtn from "@/components/Button/AddToCalendarBtn";
import SubscribeBtn from "@/components/Button/SubscribeBtn";
import TextHover from "@/motions/TextHover";
// import CountdownTimer from "@/components/Counter/CountdownTimer";
import ExhibitorsMarquee from "@/components/IndexSections/ExhibitorsMarquee";

const Banner = () => {

  const onLocationClick = () => {
    window.open("https://www.google.com/maps/place/Santa+Clara+Convention+Center/@37.4046706,-121.9778273,16z/data=!3m2!4b1!5s0x808fc9c94af3a1c5:0xa120561a8e3952eb!4m6!3m5!1s0x808fc9c94dfa50b9:0xc1ebf7e60770d2e4!8m2!3d37.4046706!4d-121.975247!16s%2Fm%2F043r4ys?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  const onDateClick = () => {
    window.open("https://www.timeanddate.com/worldclock/fixedtime.html?day=1&month=11&year=2024&hour=9&min=0&sec=0&p1=886", "_blank");
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[93vh] xl:h-screen overflow-hidden flex items-center justify-center">
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
          <div className="font-monaspace_neon flex flex-col gap-y-4">
            <p className="text-sm md:text-lg lg:text-2xl">
              3 Days | 200+ Speakers | 25+ Tracks
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              Meet the Brightest Minds at the Largest AI Event
            </p>
          </div>
          { /*
          <Suspense fallback={<Loader />}>
            <CountdownTimer time="2024-11-01T00:00:00" />
          </Suspense>
          */ }
          <div className="flex items-center gap-x-2">
            <div className="cursor-pointer" onClick={onLocationClick}>
              <TextHover text="Santa Clara Convention Center" color="theme1Light1" />
            </div>
            <span> | </span>
            <div className="cursor-pointer" onClick={onDateClick}>
              <TextHover text="Nov 1 - 3" color="theme1Light1" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block">
              <SubscribeBtn mode="plain" width="w-48" />
            </div>
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
            <div className="hidden lg:block">
              <Suspense fallback={<Loader />}>
                <RegisterBtn
                  width="w-48"
                  mode="plain"
                  text="Become A Sponsor"
                />
                { /*
                <AddToCalendarBtn
                  width="w-48"
                  mode="plain"
                  title="GENAI SUMMIT SV 2024"
                  details=""
                  location="Santa Clara Convention Center, Santa Clara, CA"
                  startDate="2024-11-01T08:00:00"
                  endDate="2024-11-03T18:00:00"
                />
                */ }
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <div className="absolute bottom-0 left-0 w-full bg-theme1Light1 z-30">
          <ExhibitorsMarquee />
        </div>
      </Suspense>
    </div>
  );
};

export default Banner;
