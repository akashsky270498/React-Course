import "../css/style.css"

const SelectMenu = () => {
  return (
    <select name="" id="" className="filterByRegion">
      <option hidden="">Filter by region.</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Aisa">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Ocenia">Ocenia</option>
    </select>
  );
};


export default SelectMenu;