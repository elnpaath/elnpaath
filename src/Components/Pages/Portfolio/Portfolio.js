import React from "react";
import { Link } from "react-router-dom";
import QuestionAnswer from "../../QuestionAnswer";
import { portfolioParagraph } from "./Data";

function Portfolio() {
  return (
    <>
      <QuestionAnswer {...portfolioParagraph} />
      <ul>
        <li className="nav-item">
          <Link to="/illustrations" className="nav-item">
            Illustrations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/branding" className="nav-item">
            Branding
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/layout" className="nav-item">
            Layout
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
