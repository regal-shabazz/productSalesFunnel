import { Homepage } from "./pages/homepage.js";
import { ThankYouPage } from "./pages/thank-you-page.js";

const routes = {
  "#/": Homepage,
  "#/thank-you": ThankYouPage,
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let indexCount = 0;
  const imageList = ["2.png", "3.png", "4.png"];

const renderRoute = () => {
  const path = window.location.hash || "#/";
  const page = routes[path];

  if (path === "#/thank-you") {
    const firstName = sessionStorage.getItem("orderFirstName") || "";
    const lastName = sessionStorage.getItem("orderLastName") || "";
    root.innerHTML = ThankYouPage({ firstName, lastName });

      // ✅ Fire Purchase event
  fbq('track', 'Purchase', {
    value: 35000, // replace with actual price
    currency: 'NGN'
  });

    const backToHomepage = document.getElementById("back-to-homepage");
    if (backToHomepage) {
      backToHomepage.addEventListener("click", () => {
        window.location.hash = "#/";
      });
    }
  } else {
    root.innerHTML = page ? page() : `<h1>404 - Page Not Found</h1>`;

    // ✅ REBIND FORM SUBMIT HERE AFTER RENDER
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector("input[type='submit']");
        submitButton.value = "Processing Order…";
        submitButton.disabled = true;

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
          "https://script.google.com/macros/s/AKfycbwEXgXnfiscJndRW4SSfYQL04cW9KDdAk_9sYtxmQ6kgEZzGF_Z9GBj1DeMg2sOWodI/exec",
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
            const firstName = form.querySelector("#first-name").value;
            const lastName = form.querySelector("#last-name").value;

            form.reset();
            sessionStorage.setItem("orderFirstName", formData.firstName);
            sessionStorage.setItem("orderLastName", formData.lastName);
            window.location.hash = "#/thank-you";
          })
          .catch((err) => {
            submitButton.value = "Confirm Order";
            submitButton.disabled = false;
            alert("Error submitting order.");
            console.error(err);
          });
      });
    }
  }
};



  renderRoute();

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

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;

  // 🟨 If the hash is like "#form", it's a DOM ID scroll — skip re-rendering
  if (hash.startsWith("#/")) {
    renderRoute(); // ✅ valid route, render
  }
});



 
});
