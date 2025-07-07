import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
        <img src={reactLogo} alt="react logo" />
        <ul className="flex gap-5">
          <li>
            {/* <a href="/" className="text-blue-700 underline">Home</a> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700 underline" : ""
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
                isActive ? "text-blue-700 underline" : ""
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
                isActive ? "text-blue-700 underline" : ""
              }
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <button onClick={() => setIsOpen(true)}>Sign In</button>
            <Modal
              header={<div className="text-xl font-bold">Sign In</div>}
              footer={
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                  >
                    Sign In
                  </button>
                </div>
              }
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              <input
                placeholder="username"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
              <input
                placeholder="password"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
            </Modal>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

// npx prettier --write src/
