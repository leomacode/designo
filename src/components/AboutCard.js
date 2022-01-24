import React from "react";
import "./aboutCard.css";
import { DynamicImg } from "./";

function AboutCard({ title, p1, p2, img }) {
  const { big, medium, small } = img;
  return (
    <div className="about-card flex">
      <div className="about-card-img">
        <DynamicImg big={big} medium={medium} small={small} name="about card" />
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
