import Banner from "./Components/Banner";
import FunFacts from "./Components/Counter/FunFacts";
import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";
import IndexTickets from "./Components/IndexTickets";
import IndexIntro from "./Components/Intro/IndexIntro";
import Subscribe from "./Components/Subscribe";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <Banner />
      <div className="w-full md:w-3/4 px-5">
        <IndexIntro />
      </div>
      <FunFacts />
      <div className="w-full md:w-3/4 flex flex-col gap-5 px-5">
        <IndexSponsors />
        <IndexSpeakers />
        <IndexExhibitors />
        <IndexTickets />
        <Subscribe />
      </div>
    </div>
  );
};

export default Index;
