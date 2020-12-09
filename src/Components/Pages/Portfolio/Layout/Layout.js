import React from "react";
import ArtCard from "../../../ArtCard";
import { Data } from "./Data";

function Layout() {
  return (
    <>
      {Data.map((dat) => (
        <ArtCard key={dat.id} {...dat} />
      ))}
    </>
  );
}

export default Layout;
