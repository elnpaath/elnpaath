import React from "react";
import ArtCard from "../../../ArtCard";
import { Data } from "./Data";

function Illustrations() {
  return (
    <>
      <div className="pages__description">
        I'm baby banjo marfa beard hell of DIY roof party cloud bread pickled
        brooklyn selfies chartreuse tilde hella. Hammock poke cloud bread
        literally food truck vegan, drinking vinegar skateboard activated
        charcoal chillwave leggings kickstarter small batch.
      </div>
      {Data.map((dat) => (
        <ArtCard key={dat.id} {...dat} />
      ))}
    </>
  );
}

export default Illustrations;
