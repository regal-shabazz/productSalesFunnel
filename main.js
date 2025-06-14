import { Homepage } from "./pages/homepage.js";
import { ThankYouPage } from "./pages/thank-you-page.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let indexCount = 0;
  const imageList = ["2.png", "3.png", "4.png"];

  root.innerHTML = Homepage();

  const sliderLeft = document.getElementById("slider-left");
  const sliderRight = document.getElementById("slider-right");
  const sliderImage = document.getElementById("slider-img");

  sliderLeft.addEventListener("click", () => {
    indexCount = (indexCount - 1 + imageList.length) % imageList.length;
    sliderImage.src = `./assets/images/D21 Smart Watch ${imageList[indexCount]}`;
  });

  sliderRight.addEventListener("click", () => {
    indexCount = (indexCount + 1) % imageList.length;
    sliderImage.src = `./assets/images/D21 Smart Watch ${imageList[indexCount]}`;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      firstName: form.querySelector("#first-name").value,
      lastName: form.querySelector("#last-name").value,
      phoneNumber: form.querySelector("#phone-number").value,
      whatsappNumber: form.querySelector("#whatsapp-number").value,
      streetAddress: form.querySelector("#street-address").value,
      city: form.querySelector("#city").value,
      state: form.querySelector("#state").value,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbwtNxYO9JXDQIV9_FFqWlxtIStkuyiUmX-cyDPr6Km9dUpNQVaRovhQPP0iOMZ26ZS8/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        form.reset();
        root.innerHTML = ThankYouPage()
        

        const backToHomepage = document.getElementById('back-to-homepage')

        backToHomepage.addEventListener('click', () => {
          root.innerHTML = Homepage()
        })
      })
      .catch((err) => {
        alert("Error submitting order.");
        console.error(err);
      });
  });
});
