import React from "react";
import "./ShowcaseProject.css";

function ShowcaseProject({ img1, img2, img3, img4, alt1, alt2, alt3, alt4 }) {
  return (
    <>
      <div className="project__show">
        <div>
          <img src={process.env.PUBLIC_URL + img1} alt={alt1} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + img2} alt={alt2} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + img3} alt={alt3} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + img4} alt={alt4} />
        </div>
      </div>
    </>
  );
}

export default ShowcaseProject;
