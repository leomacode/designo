import { useState, useEffect } from "react";

export default function useDynamicImg(small, medium, big) {
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

  return img;
}
