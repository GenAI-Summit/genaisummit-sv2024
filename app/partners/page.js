import Sponsors from "../Components/Sponsors";
import Media from "../Components/Media";
import SearchBar from "../Components/SearchBar";

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
