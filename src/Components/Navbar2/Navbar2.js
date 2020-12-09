import "./Navbar2.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  const pages = [
    { id: 1, name: "about", label: "", bold: false },
    { id: 2, name: "illustration", label: "", bold: false },
    { id: 3, name: "Branding", label: "", bold: false },
    { id: 4, name: "Layout", label: "Layout Design", bold: false },
    { id: 5, name: "shop", label: "", bold: false },
    { id: 6, name: "contact", label: "", bold: false },
  ];

  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    if (window.innerWidth >= 510) {
    } else {
      setShow(!show);
    }
  };

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
              <Link
                to={`/${page.name === "about" ? "" : page.name}`}
                onClick={handleNavbar}
              >
                {page.label !== "" ? page.label : page.name}
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
