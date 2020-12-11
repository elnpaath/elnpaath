import React from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(dat) {
  return (
    <>
      <div className="artcard__wrapper">
        <Link to="/project">
          <img
            className="artcard-img"
            src={process.env.PUBLIC_URL + dat.img + "cover.jpg"}
            alt={dat.alt}
          />
        </Link>
        <div className="caption__wrapper">
          <h3 className="caption-title">{dat.title}</h3>
          <p className="caption">{dat.caption}</p>
        </div>
      </div>
    </>
  );
}

export default ArtCard;
