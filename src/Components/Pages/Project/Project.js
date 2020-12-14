import React from "react";
// import { Data as BrandData } from "../Portfolio/Branding/Data";
import { Data } from "./Data";

import "./Project.css";

function Project() {
  // console.log(BrandData);

  // console.log(imagesToLoad);
  const arr = window.document.URL.split("/");
  const loc = arr.length;
  const type = arr[loc - 2];
  const dataPicked = Data.filter((dat) => dat.name === type);
  const imgDocArray = dataPicked[0].document;
  console.log(imgDocArray);
  const fir = window.document.URL.split("/").pop();
  const tree = fir.split("-").join(" ");
  const result = imgDocArray.filter((dat) => dat.title.toLowerCase() === tree);
  const imagesToLoad = result[0].images;
  return (
    <div>
      <div className="project__heading">
        <h1 className="project__headingTitle">{result[0].title}</h1>
        <p className="project__headingDesc">{result[0].description}</p>
      </div>
      <div className="project__imageWrapper">
        {imagesToLoad.map((img) => (
          <div
            key={img.img.split("/").pop().split(".")[0]}
            className="project__img"
          >
            <img src={process.env.PUBLIC_URL + img.img} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
