import React from "react";
import profileImage from "../../assets/profileIMG.png";
import "./About.css";
export default function About() {
  return (
    <div className="about-me">
      <div>
        <img src={profileImage} alt="Wei Wu" />
      </div>
      <div>
        <h2>About me</h2>
        <p>Hello, I'm Wei</p>
      </div>
    </div>
  );
}
