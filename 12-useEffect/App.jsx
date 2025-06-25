import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import "./css/style.css";
import { useState } from "react";
const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="searchFilterContainer">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
         {query === 'unmount' ? '' : <CountriesList query={query} />}
      </main>
    </>
  );
};

export default App;
