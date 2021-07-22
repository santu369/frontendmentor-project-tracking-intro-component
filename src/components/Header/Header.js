import React, { useState } from "react";
import "./header.scss";
import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleNav = () => {
    console.log(menuState, menuToggled);
    if (menuState) {
      setMenuToggled((prevValue) => !prevValue);
    }
    setMenuState((prevValue) => !prevValue);
    if (!menuState && menuToggled) {
      setMenuToggled((prevValue) => !prevValue);
    }
    console.log(menuState, menuToggled);
  };

  return (
    <header className="header w-100 p-4 d-flex align-items-center justify-content-between">
      {/* eslint-disable-next-line */}
      <a href="#" className="header__branding" target="_self">
        <img src={logo} alt="" className="header__logo" />
        <span className="sr-only">Project Tracking Logo</span>
      </a>
      <button onClick={toggleNav} className="header__menu">
        <img
          className="header__menu-icon"
          src={menuState ? closeIcon : hamburgerIcon}
          alt={menuState ? "Menu Close Icon" : "Menu Hamburger Icon"}
        />
      </button>
      <nav
        className={`header__nav ${menuState ? "header__nav--open" : ""} ${
          !menuState && menuToggled ? "header__nav--close" : ""
        }`}
        id="nav"
      >
        <ul className="header__nav-list">
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              product
            </a>
          </li>
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              features
            </a>
          </li>
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              pricing
            </a>
          </li>
          <li className="header__nav-item header__nav-item--highlight">
            {/* eslint-disable-next-line */}
            <a
              href="#"
              target="_self"
              className="header__nav-link header__nav-link--highlight"
            >
              login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
