import Search from "@/components/SVG/Search";

// to-[#bd0099]

const SearchBar = ({ text, setText }) => {
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="h-[43px] w-full flex rounded-full shadow-lg bg-theme1Dark2 p-1 text-themeLight1 border border-theme1Light1">
      <div className="flex p-1 justify-center items-center rounded-full">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none outline-none bg-transparent pl-2 placeholder-theme1Light1"
        onChange={onChange}
        maxLength="30"
        value={text}
      />
    </div>
  );
};

export default SearchBar;
