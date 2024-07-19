import Banner from "./Components/Banner";
import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";
import IndexTickets from "./Components/IndexTickets";

const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <div className="w-full md:w-3/4">
        <IndexSponsors />
        <IndexSpeakers />
        <IndexExhibitors />
        <IndexTickets />
      </div>
    </div>
  );
};

export default Index;
