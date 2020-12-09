import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={process.env.PUBLIC_URL + "/images/pp.jpg"}
        alt="elndraws"
      />
      <div className="header__title">ELN PAATH</div>
    </div>
  );
}

export default Header;
