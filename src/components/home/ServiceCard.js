import React from "react";
import "./serviceCard.css";
import { ProjectLink } from "../";
import { selectImg } from "../../utility/selectImg";

function ServiceCard({ title, img, imgM, imgL }) {
  const titleClass = title.split(" ").shift();
  return (
    <div
      className={`service-card  border-curve text-white ${titleClass}`}
      style={{ backgroundImage: `url(${selectImg(img, imgM, imgL)})` }}
    >
      <div className={`service-card-bg flex ${titleClass}-bg`}>
        <div className="service-card-title text-h2 uppercase">{title}</div>
        <ProjectLink path={title} />
      </div>
    </div>
  );
}

export default ServiceCard;
