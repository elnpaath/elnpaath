import "./Navbar2.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  const pages = [
    { id: 1, name: "about" },
    { id: 2, name: "illustration" },
    { id: 3, name: "Branding" },
    { id: 4, name: "Layout Design" },
    { id: 5, name: "shop" },
    { id: 6, name: "contact" },
  ];

  const [show, setShow] = useState(false);

  const handleNavbar = () => setShow(!show);

  const showButton = () => {
    if (window.innerWidth >= 510) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <div className={show ? "navbar2" : "navbar2 navbar2--hide"}>
        <ul className="navbar2__list">
          {pages.map((page) => (
            <li key={page.id} className="navbar2__listItem">
              <Link to={`/${page.name}`} onClick={handleNavbar}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__mobileMenuLink" onClick={handleNavbar}>
        Menu
      </div>
    </>
  );
}

export default Navbar2;
