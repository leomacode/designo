import React from "react";
import { useDynamicImg } from "../hooks";
import "./dynamicImg.css";

function DynamicImg({ small, medium, big, name }) {
  const { img } = useDynamicImg(small, medium, big);

  return <img className="dynamic-img" src={img} alt={name} />;
}

export default DynamicImg;
