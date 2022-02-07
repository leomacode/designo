import React from "react";
import "./projectCard.css";
function Service({ title, projectImg, description }) {
  return (
    <div className="project-card flex border-curve">
      <div className="project-card-img">
        <img src={projectImg} alt="projct-overview" />
      </div>

      <div className="project-card-intro text-center bg-lt-pink flex">
        <h3 className="project-card-title text-h3 uppercase text-peach">
          {title}
        </h3>
        <p className="project-card-description text-body">{description}</p>
      </div>
    </div>
  );
}

export default Service;
