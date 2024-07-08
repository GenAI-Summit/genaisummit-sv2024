import Sponsors from "../components/Sponsors";
import Media from "../components/Media";
import SearchBar from "../components/SearchBar";

const PartnersPage = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <SearchBar />
        </div>
        <div className="w-full">
          <Sponsors />
          <Media />
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
