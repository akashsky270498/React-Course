import "../css/style.css";

const SearchMenu = () => {
  console.log("e")
  return (
    <select className="filterByRegion">
      <option hidden="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="America">America</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SearchMenu;
