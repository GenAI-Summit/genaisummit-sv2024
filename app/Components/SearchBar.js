const SearchBar = ({ onChange }) => {
  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full md:w-[80%] p-2 border-none rounded-full shadow focus:outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
