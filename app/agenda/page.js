import SearchBar from "../Components/SearchBar";
import Agenda from "../Components/Agenda";

const AgendaPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar />
      </div>
      <div className="w-full">
        <Agenda />
      </div>
    </div>
  );
};

export default AgendaPage;
