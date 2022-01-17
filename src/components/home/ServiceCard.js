import React from "react";
import "./serviceCard.css";
import { ProjectLink } from "../";

function ServiceCard({ title, img, imgM, imgL, imgS }) {
  function selectImg() {
    let image = imgM;
    if (window.innerWidth < 640) {
      image = img;
    }

    if (window.innerWidth > 800) {
      image = imgL;
    }

    return image;
  }
  const imageUrl = selectImg();

  return (
    <div
      className="service-card border-curve text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="service-card-title text-h2 uppercase">{title}</div>
      <ProjectLink path={title} />
    </div>
  );
}

export default ServiceCard;
