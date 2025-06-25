import { useState } from "react";
import SearchBar from "../../13-Routing/components/SearchBar";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";
import "../css/style.css";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="searchFilterContainer">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountryList query={query} />}
    </main>
  );
};

export default Home;
