const SearchBar = ({ setQuery }) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onClick={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Type the country name you are searching for..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
