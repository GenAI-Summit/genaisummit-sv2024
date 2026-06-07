import { Suspense } from "react";
import Loader from "@/components/Loader";
import Banner from "@/components/IndexSections/Banner";
// import FunFacts from "@/components/IndexSections/FunFacts";
import IndexSpeakers from "@/components/IndexSections/IndexSpeakers";
// import IndexSponsors from "@/Components/IndexSections/IndexSponsors";
import IndexMedia from "@/components/IndexSections/IndexMedia";
// import Attendees from "@/components/IndexSections/Attendees";
import IndexExhibitors from "@/components/IndexSections/IndexExhibitors";
import NewFeatures from "@/components/IndexSections/NewFeatures";
import Tickets from "@/components/Tickets";
import SectionEnter from "@/motions/SectionEnter";
// import NewlyUpdateModal from "@/components/IndexSections/NewlyUpdateModal";
// import PopupModal from "@/components/IndexSections/PopupModal";
import IndexAgenda from "@/components/IndexSections/IndexAgenda";
import IndexSponsors from "@/components/IndexSections/IndexSponsors";
// import TeslaIntro from "@/components/Intro/TeslaIntro";
import MarqueeClient from "@/components/IndexSections/MarqueeClient";
import MCs from "@/components/MCs";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-16">
      {/*
      <Suspense fallback={null}>
        <PopupModal />
      </Suspense>
      */}
      <Banner />
      <div className="max-w-maxWidth w-full lg:w-5/6 px-5 flex flex-col gap-y-12 md:gap-y-16">
        <IndexSponsors />
        {/* <TeslaIntro /> */}
        <SectionEnter>
          <IndexMedia />
        </SectionEnter>
        <SectionEnter>
          <Suspense fallback={<Loader />}>
            <IndexSpeakers />
          </Suspense>
        </SectionEnter>
        <SectionEnter>
          <Suspense fallback={<Loader />}>
            <MCs />
          </Suspense>
        </SectionEnter>
        <SectionEnter>
          <Suspense fallback={<Loader />}>
            <IndexExhibitors />
          </Suspense>
        </SectionEnter>
        <SectionEnter>
          <IndexAgenda />
        </SectionEnter>
        <SectionEnter>
          <NewFeatures />
        </SectionEnter>
        <SectionEnter>
          <Suspense fallback={<Loader />}>
            <Tickets />
          </Suspense>
        </SectionEnter>
      </div>
      <Suspense fallback={null}>
        <div className="fixed bottom-0 left-0 w-full bg-theme1Light1 z-30">
          <MarqueeClient />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
