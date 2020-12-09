import React from "react";
import ArtCard from "../../../ArtCard";
import { Data } from "./Data";

function Branding() {
  return (
    <>
      {Data.map((dat) => (
        <>
          <ArtCard key={dat.id} {...dat} />
        </>
      ))}
    </>
  );
}

export default Branding;
