import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";

const Index = () => {
  return (
    <div className="w-4/5">
      <IndexSponsors />
      <IndexSpeakers />
      <IndexExhibitors />
    </div>
  );
};

export default Index;
