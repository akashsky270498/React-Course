import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
// import { ThemeContext } from "../contexts/ThemeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useContext(ThemeContext);
  const [isDark] = useTheme();
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   window.addEventListener("resize", function () {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: this.window.innerHeight,
  //     });
  //   });
  // }, []);

  const windowSize = useWindowSize();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <h1 style={{ textAlign: "center" }}>
        {windowSize.width} X {windowSize.height}
      </h1>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
}
