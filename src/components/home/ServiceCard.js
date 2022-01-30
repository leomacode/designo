import React from "react";
import "./serviceCard.css";
import { ProjectLink } from "../";
import { useDynamicImg } from "../../hooks";

function ServiceCard({ title, img, imgM, imgL }) {
  const titleClass = title.split(" ").shift();
  const bgImg = useDynamicImg(img, imgM, imgL);
  return (
    <div
      className={`service-card  border-curve text-white ${titleClass}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={`service-card-bg flex ${titleClass}-bg`}>
        <div className="service-card-title text-h2 uppercase">{title}</div>
        <ProjectLink path={title} />
      </div>
    </div>
  );
}

export default ServiceCard;
