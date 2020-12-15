import React from "react";
import QuestionAnswer from "../../QuestionAnswer";
import { homeObjOne } from "./Data";
import "./Home.css";

function Home(props) {
  return (
    <>
      <h1 className="header__title">Home</h1>
      {/* <div className="home-img">
        <img src={process.env.PUBLIC_URL + "/images/home.jpg"} alt="" />
      </div> */}
      <p>{props.path}</p>
      <QuestionAnswer {...homeObjOne} />
    </>
  );
}

export default Home;
