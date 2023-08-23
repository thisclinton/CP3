import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__items">
            <a href="#home" className="nav__links">
              Home
            </a>
          </li>
          <li className="nav__items">
            <a href="#wcam3" className="nav__links">
              What is CAM-3?
            </a>
          </li>
          <li className="nav__items">
            <a href="#possibility" className="nav__links">
              Open AI
            </a>
          </li>
          <li className="nav__items">
            <a href="#features" className="nav__links">
              Case Studies
            </a>
          </li>
          <li className="nav__items">
            <a href="#blog" className="nav__links">
              Library
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header>
        <nav className="nav">
          <a href="" className="nav__logo">
            <span className="nav__title">CAM-3</span>
          </a>

          <Menu />

          <div className="nav__button">
            <span>Sign in</span>
            <button type="button">Sign up</button>
          </div>

          <div className="nav__toggle">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}

            {toggleMenu && (
              <div className="nav__container scale-up-center">
                <Menu />
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
