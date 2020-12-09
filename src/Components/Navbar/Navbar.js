import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Dropdown from "../Dropdown";
import NavBarOBj from "./NavBarObj";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 500) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 500) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="nav-wrapper">
        <div className="brand-top">
          <img
            className="logo-img"
            src={process.env.PUBLIC_URL + "/images/pp.jpg"}
            alt="elndraws"
          />
          <div className="name-title">{NavBarOBj.nameLogo}</div>
        </div>
        <div className="navbar">
          <div className="navbar-container container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes size={32} /> : <FaBars size={32} />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {NavBarOBj.Menu1}
                </Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {NavBarOBj.Menu2}
                </Link>
                {dropdown && <Dropdown onMouseEnter={onMouseEnter} />}
              </li>
              <li className="nav-item">
                <Link
                  to="/shop"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {NavBarOBj.Menu3}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {NavBarOBj.Menu4}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
