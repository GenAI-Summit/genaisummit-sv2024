import Search from "./SVG/Search";

// to-[#bd0099]

const SearchBar = ({ text, setText }) => {
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-full flex rounded-full shadow-lg bg-color6 p-1 text-color8 border border-color8">
      <div className="flex p-1 justify-center items-center rounded-full">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none outline-none bg-transparent pl-2 placeholder-color8"
        onChange={onChange}
        maxLength="30"
        value={text}
      />
    </div>
  );
};

export default SearchBar;
