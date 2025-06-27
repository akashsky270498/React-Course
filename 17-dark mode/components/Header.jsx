import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header({ theme }) {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );

  // const [isDark, setIsDark] = theme;

  // console.log(JSON.parse(localStorage.getItem('isDarkMode')))

  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  const [isDark, setIsDark] = useContext(ThemeContext);

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{`${isDark ? "Light" : "Dark"}`} Mode
        </p>
      </div>
    </header>
  );
}
