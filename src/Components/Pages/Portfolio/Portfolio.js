import React from "react";
import QuestionAnswer from "../../QuestionAnswer";
import ShowcaseProject from "../../ShowcaseProject";
import { portfolioParagraph, showcaseObjOne } from "./Data";

function Portfolio() {
  return (
    <>
      <QuestionAnswer {...portfolioParagraph} />
      {/* <ShowcaseProject {...showcaseObjOne} /> */}
    </>
  );
}

export default Portfolio;
