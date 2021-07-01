import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-header-container">
        <h1 className="shrink-border">Wei Wu</h1>
      </div>
      <div className="nav-link-container ">
          <button className="grow-ellipse">About </button>
          <button className="grow-ellipse">Skills</button>
          <button className="grow-ellipse">Projects</button>
          <button className="grow-ellipse"> Contact Me</button>
      </div>
    </nav>
  );
}
