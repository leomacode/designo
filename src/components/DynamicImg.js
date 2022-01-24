import React, { useState, useEffect } from "react";
import "./dynamicImg.css";

function DynamicImg({ small, medium, big, name }) {
  const [img, setImg] = useState(selectImg(small, medium, big));

  function selectImg(small, medium, big) {
    let img = medium;
    if (window.innerWidth < 640) {
      img = small;
    } else if (window.innerWidth >= 960) {
      img = big;
    }
    return img;
  }

  useEffect(() => {
    function handleResize() {
      setImg(selectImg(small, medium, big));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return <img className="dynamic-img" src={img} alt={name} />;
}

export default DynamicImg;
