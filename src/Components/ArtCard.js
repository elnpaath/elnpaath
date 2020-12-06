import React from "react";

function ArtCard({ img, alt, title, caption }) {
  return (
    <>
      <div className="artcard__wrapper">
        <img src={img} alt={alt} />
        <div className="caption__wrapper">
          <h3 className="caption-title">{title}</h3>
          <p className="caption">{caption}</p>
        </div>
      </div>
    </>
  );
}

export default ArtCard;
