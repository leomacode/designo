import React from "react";
import "./featureCard.css";

function FeatureCard({ title, imgUrl, text }) {
  return (
    <div className="feature-card flex">
      <img className="feature-card-img" src={imgUrl} alt="feature" />
      <div className="feature-card-text">
        <h3 className="feature-card-title text-h3 uppercase ">{title}</h3>
        <p className="text-body">{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
