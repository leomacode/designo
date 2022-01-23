//get background according to the window size
function selectImg(small, medium, big) {
  let img = medium;
  if (window.innerWidth < 640) {
    img = small;
  }

  if (window.innerWidth > 960) {
    img = big;
  }
  return img;
}

export { selectImg };
