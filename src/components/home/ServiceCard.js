import React from "react";
import "./serviceCard.css";
import { ProjectLink } from "../";

function ServiceCard({ title }) {
  return (
    <div className="service--card border-curve">
      <div className="service--card-title text-h2">{title}</div>
      <ProjectLink path={title} />
    </div>
  );
}

export default ServiceCard;
