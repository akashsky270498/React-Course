import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
        <img src={reactLogo} alt="vite logo" />
        <ul className="flex gap-5">
          <li>
            {/* <a href="/" className="text-blue-700 underline">Home</a> */}
            <NavLink
              className={({ isActive }) =>
                isActive && "text-blue-700 underline"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <NavLink
              className={({ isActive }) =>
                isActive && "text-blue-700 underline"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            {/* <a href="/contact">Contact</a> */}
            <NavLink
              className={({ isActive }) =>
                isActive && "text-blue-700 underline"
              }
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

// npx prettier --write src/
