import React from "react";
import reactLogo from "../../assets/react-logo.svg";
import jsLogo from "../../assets/javascript-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import htmlLogo from "../../assets/html-logo.svg";
import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skills">
          <img src={reactLogo} alt="React.js"></img>
          <p>React</p>
        </div>
        <div className="skills">
          <img src={jsLogo} alt="Javascript"></img>
          <p>Javascript</p>
        </div>
        <div className="skills">
          <img src={htmlLogo} alt="HTML5"></img>
          <p>HTML5</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="CSS3"></img>
          <p>CSS3</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="CSS3"></img>
          <p>Node.js</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="CSS3"></img>
          <p>Git</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="CSS3"></img>
          <p>Redux</p>
        </div>
        <div className="skills">
          <img src={cssLogo} alt="CSS3"></img>
          <p>Postgres</p>
        </div>
      </div>
    </div>
  );
}
