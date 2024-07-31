const SearchBar = ({ onChange }) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" onChange={onChange} maxLength="30" />
    </>
  );
};

export default SearchBar;
