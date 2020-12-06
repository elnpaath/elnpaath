import React from "react";
import QuestionAnswer from "../../QuestionAnswer";
import ShowcaseProject from "../../ShowcaseProject";
import { homeObjOne, showcaseObjOne } from "./Data";

function Home() {
  return (
    <>
      <ShowcaseProject {...showcaseObjOne} />
      <QuestionAnswer {...homeObjOne} />
    </>
  );
}

export default Home;
