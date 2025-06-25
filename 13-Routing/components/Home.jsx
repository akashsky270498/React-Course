import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import { useState } from "react";
const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="searchFilterContainer">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};

export default Home;
