import "../css/style.css";

const SearchBar = () => {
  return (
    <div className="searchContainer">
      <i className="fas fa-search"></i>
      <input
        onChange={(e) => {}}
        type="text"
        placeholder="Search for countries..."
      />
    </div>
  );
};

export default SearchBar;
