import SearchBar from "../Components/SearchBar";
import Speakers from "../Components/Speakers";

const SpeakersPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar />
      </div>
      <div className="w-full">
        <Speakers />
      </div>
    </div>
  );
};

export default SpeakersPage;
