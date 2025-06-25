import "../css/style.css";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="searchContainer">
      <i className="fas fa-search"></i>
      <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" name="" id="" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchBar;
