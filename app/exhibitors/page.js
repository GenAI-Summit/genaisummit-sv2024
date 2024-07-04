import SearchBar from "../components/SearchBar";
import Exhibitors from "../components/Exhibitors";

const ExhibitorsPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar />
      </div>
      <div className="w-full">
        <Exhibitors />
      </div>
    </div>
  );
};

export default ExhibitorsPage;
