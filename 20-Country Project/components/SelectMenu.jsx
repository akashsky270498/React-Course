const SelectMenu = ({ setQuery }) => {
  return (
    <select
      onClick={(e) => setQuery(e.target.value.toLowerCase())}
      className="filter-by-region"
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">African</option>
      <option value="Americas">American</option>
      <option value="Asia">Asian</option>
      <option value="Europe">European</option>
      <option value="Oceania">Oceanias</option>
    </select>
  );
};

export default SelectMenu;
