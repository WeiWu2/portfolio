import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-header-container">
        <h1>
          {"{"} Wei Wu {"}"}
        </h1>
      </div>
      <div className="nav-link-container">
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact Me</button>
      </div>
    </nav>
  );
}
