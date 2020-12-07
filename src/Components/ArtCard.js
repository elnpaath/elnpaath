import React from "react";
import "./ArtCard.css";

function ArtCard(dat) {
  return (
    <>
      <div className="artcard__wrapper">
        <img
          className="artcard-img"
          src={process.env.PUBLIC_URL + dat.img + "cover.jpg"}
          alt={dat.alt}
        />
        <div className="caption__wrapper">
          <h3 className="caption-title">{dat.title}</h3>
          <p className="caption">{dat.caption}</p>
        </div>
      </div>
    </>
  );
}

export default ArtCard;
