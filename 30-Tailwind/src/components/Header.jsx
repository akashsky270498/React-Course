import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
        <img src={reactLogo} alt="vite logo" />
        <ul className="flex gap-5">
          <li>
            <a href="/" className="text-blue-700 underline">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

// npx prettier --write src/