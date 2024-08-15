import Banner from "./Components/Banner";
import FunFacts from "./Components/FunFacts";
import IndexSpeakers from "./Components/IndexSections/IndexSpeakers";
import IndexSponsors from "./Components/IndexSections/IndexSponsors";
import IndexMedia from "./Components/IndexSections/IndexMedia";
import IndexExhibitors from "./Components/IndexSections/IndexExhibitors";
import IndexTickets from "./Components/IndexSections/IndexTickets";
import IndexIntro from "./Components/Intro/IndexIntro";
import SectionEnter from "./Motions/SectionEnter";

export const runtime = "edge";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-16">
      <Banner />
      <div className="max-w-maxWidth w-full lg:w-3/4 px-5">
        <SectionEnter>
          <IndexIntro />
        </SectionEnter>
      </div>
      <SectionEnter>
        <FunFacts />
      </SectionEnter>
      <div className="max-w-maxWidth w-full lg:w-3/4 flex flex-col gap-y-16 md:gap-y-40 px-5">
        <SectionEnter>
          <IndexSponsors />
        </SectionEnter>
        <SectionEnter>
          <IndexMedia />
        </SectionEnter>
        <SectionEnter>
          <IndexSpeakers />
        </SectionEnter>
        <SectionEnter>
          <IndexExhibitors />
        </SectionEnter>
        <SectionEnter>
          <IndexTickets />
        </SectionEnter>
      </div>
    </div>
  );
};

export default Index;
