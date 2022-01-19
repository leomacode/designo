import React from "react";
import "./projectLink.css";
import { Link } from "react-router-dom";
import { arrow } from "../assets/shared/desktop";

function ProjectLink({ path }) {
  return (
    <Link
      to="/about"
      className="project-link text-h3 uppercase text-white flex"
    >
      <span className="text-body">view projects</span>
      <div className="link-icon">
        <img src={arrow} alt="icon" />
      </div>
    </Link>
  );
}

export default ProjectLink;
