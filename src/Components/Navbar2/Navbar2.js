import "./Navbar2.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  const pages = [
    { id: 1, name: "about" },
    { id: 2, name: "portfolio" },
    { id: 3, name: "shop" },
    { id: 4, name: "contact" },
  ];

  const [show, setShow] = useState(false);

  const handleNavbar = () => setShow(!show);

  return (
    <>
      <div className={show ? "navbar2" : "navbar2 navbar2--hide"}>
        <ul className="navbar2__list">
          {pages.map((page) => (
            <li key={page.id} className="navbar2__listItem">
              <Link to={`/${page.name}`}>{page.name}</Link>
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
