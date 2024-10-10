import { Suspense } from "react";
import Loader from "@/components/Loader";
import Banner from "@/components/IndexSections/Banner";
import FunFacts from "@/components/IndexSections/FunFacts";
import IndexSpeakers from "@/components/IndexSections/IndexSpeakers";
// import IndexSponsors from "@/Components/IndexSections/IndexSponsors";
import IndexMedia from "@/components/IndexSections/IndexMedia";
// import Attendees from "@/components/IndexSections/Attendees";
import IndexExhibitors from "@/components/IndexSections/IndexExhibitors";
import NewFeatures from "@/components/IndexSections/NewFeatures";
import Tickets from "@/components/Tickets";
import SectionEnter from "@/motions/SectionEnter";
import NewlyUpdateModal from "@/components/NewlyUpdateModal";
import IndexAgenda from "@/components/IndexSections/IndexAgenda";
import IndexSponsors from "@/components/IndexSections/IndexSponsors";

export const revalidate = 60;

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-16">
      <NewlyUpdateModal />
      <Banner />
      <div className="max-w-maxWidth w-full lg:w-3/4 px-5">
        <IndexSponsors />
      </div>
      <SectionEnter>
        <FunFacts />
      </SectionEnter>
      <div className="max-w-maxWidth w-full lg:w-3/4 flex flex-col gap-y-16 md:gap-y-40 px-5">
        <SectionEnter>
          <Suspense fallback={<Loader />}>
            <IndexSpeakers />
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
          <IndexMedia />
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
    </div>
  );
};

export default Index;
