import React from "react";
import "./aboutCard.css";

function AboutCard({ title, p1, p2, img }) {
  console.log(title);
  return (
    <div className="about-card flex">
      <div className="about-card-img">
        <img src={img} alt="about card" />
      </div>

      <div className="about-card-text text-center flex">
        <h1 className="about-card-text-title text-h1 text-peach ">{title}</h1>
        <p className="text-body about-card-text-body">{p1}</p>
        <p className="text-body about-card-text-body">{p2}</p>
      </div>
    </div>
  );
}

export default AboutCard;