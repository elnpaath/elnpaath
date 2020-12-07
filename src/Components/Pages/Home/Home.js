import React from "react";
import QuestionAnswer from "../../QuestionAnswer";
import { homeObjOne } from "./Data";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-img">
        <img src={process.env.PUBLIC_URL + "/images/home.jpg"} alt="" />
      </div>
      <QuestionAnswer {...homeObjOne} />
    </>
  );
}

export default Home;
