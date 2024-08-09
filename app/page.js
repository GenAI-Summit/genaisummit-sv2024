import Banner from "./Components/Banner";
import FunFacts from "./Components/Counter/FunFacts";
import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";
import IndexTickets from "./Components/IndexTickets";
import IndexIntro from "./Components/Intro/IndexIntro";
import Subscribe from "./Components/Subscribe";
import SectionEnter from "./Motions/SectionEnter";

export const runtime = "edge";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <Banner />
      <div className="w-full md:w-3/4 px-5">
        <SectionEnter>
          <IndexIntro />
        </SectionEnter>
      </div>
      <SectionEnter>
        <FunFacts />
      </SectionEnter>
      <div className="w-full md:w-3/4 flex flex-col gap-5 px-5">
        <SectionEnter>
          <IndexSponsors />
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
        <SectionEnter>
          <Subscribe />
        </SectionEnter>
      </div>
    </div>
  );
};

export default Index;
