import React from "react";
import "./aboutCard.css";

function AboutCard({ title, p1, p2, img }) {
  return (
    <div className="about-card flex">
      <div className="about-card-img" data-testid="about-img">
        <img src={img} alt={`about-card-${title}`} />
      </div>

      <div className="about-card-text text-center flex">
        <h1 className="about-card-text-title text-h1 text-peach ">{title}</h1>
        <p className="text-body about-card-text-body" data-testid="p">
          {p1}
        </p>
        <p className="text-body about-card-text-body" data-testid="p">
          {p2}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
