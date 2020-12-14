import React from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(dat) {
  return (
    <>
      <div className="artcard__wrapper">
        <Link to={dat.link}>
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
// when you click on the link, page will go to routh project/:projectName
// can you have one project page and depending on which card was clicked, it will load that page. ( so can we use state for this?)
// HOW??
// on click on the card, somehow change the state=  "project/name of project" and push this into the Link to=
