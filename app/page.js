import Banner from "./Components/Banner";
import FunFacts from "./Components/Counter/FunFacts";
import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";
import IndexTickets from "./Components/IndexTickets";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <div className="w-full px-5 md:w-3/4">
        <div className="mb-10 mt-10">
          <FunFacts />
        </div>
        <IndexSponsors />
        <IndexSpeakers />
        <IndexExhibitors />
        <IndexTickets />
      </div>
    </div>
  );
};

export default Index;
