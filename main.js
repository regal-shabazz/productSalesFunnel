import { Homepage } from "./pages/homepage.js";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");


  let indexCount = 0;

  const imageList = ["2.png", "3.png", "4.png"];

  root.innerHTML = Homepage()

  const sliderLeft = document.getElementById("slider-left");
  const sliderRight = document.getElementById("slider-right");
  const sliderImage = document.getElementById("slider-img");

  sliderLeft.addEventListener("click", () => {
    indexCount--;

    if (indexCount < 0) {
      indexCount = imageList.length - 1
    }

    sliderImage.src = `./assets/images/D21 Smart Watch ${imageList[indexCount]}`
  });

  sliderRight.addEventListener("click", () => {
    indexCount++;

    if (indexCount >= imageList.length ) {
      indexCount = 0
    }

    sliderImage.src = `./assets/images/D21 Smart Watch ${imageList[indexCount]}`
  });
});
