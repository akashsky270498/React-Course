import "../css/style.css";

const Header = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <h2 className="title">
          <a href="/"> Where in the world?</a>
        </h2>
        <p className="themeChanger" onClick={toggleTheme}>
          <i className="fas fa-moon"></i>
          &nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
