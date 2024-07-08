import Workshops from "../components/Workshops";
import Seminars from "../components/Seminars";
import SearchBar from "../components/SearchBar";

const ExperiencePage = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <SearchBar />
        </div>
        <div className="w-full">
          <Workshops />
          <Seminars />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
