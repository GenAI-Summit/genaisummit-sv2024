import IndexSpeakers from "./Components/IndexSpeakers";
import IndexSponsors from "./Components/IndexSponsors";
import IndexExhibitors from "./Components/IndexExhibitors";
import Ticketbtn from "./Components/TicketBtn";

const Index = () => {
  return (
    <div className="w-full md:w-3/4">
      <Ticketbtn />
      <IndexSponsors />
      <IndexSpeakers />
      <IndexExhibitors />
    </div>
  );
};

export default Index;
