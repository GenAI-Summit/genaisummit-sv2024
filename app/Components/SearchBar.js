import Search from "./SVG/Search";

// to-[#bd0099]

const SearchBar = ({ onChange }) => {
  return (
    <div className="w-full flex rounded-full shadow-lg bg-gradient-to-r from-color1 to-color2 p-2 text-color5">
      <div className="flex p-1 justify-center items-center rounded-full bg-color7">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none outline-none bg-transparent pl-2 placeholder-color5"
        onChange={onChange}
        maxLength="30"
      />
    </div>
  );
};

export default SearchBar;
