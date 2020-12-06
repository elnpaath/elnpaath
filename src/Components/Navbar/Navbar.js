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

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

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
            src={process.env.PUBLIC_URL + "/images/pho1.jpg"}
            alt="elndraws"
          />
          <div className="name-title">{NavBarOBj.nameLogo}</div>
        </div>
        <div className="navbar">
          <div className="navbar-container container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {NavBarOBj.Menu1}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {NavBarOBj.Menu2}
                </Link>
                {dropdown && <Dropdown />}
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
