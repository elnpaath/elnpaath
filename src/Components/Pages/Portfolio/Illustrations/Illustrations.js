import React from "react";
import ArtCard from "../../../ArtCard";
import { Data } from "../../Project/Data";

function Illustrations(props) {
  const title = props.location.pathname.substring(1);
  const BrandData = Data.filter((dat) => dat.name === title);
  return (
    <>
      {/* <h1 className="header__title">{title}</h1> */}
      <div className="pages__description">
        I'm baby banjo marfa beard hell of DIY roof party cloud bread pickled
        brooklyn selfies chartreuse tilde hella. Hammock poke cloud bread
        literally food truck vegan, drinking vinegar skateboard activated
        charcoal chillwave leggings kickstarter small batch.
      </div>
      {BrandData[0].document.map((dat) => (
        <ArtCard key={dat.id} {...dat} />
      ))}
    </>
  );
}

export default Illustrations;
