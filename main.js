import { OrderNowButton } from "./components/Buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const productTitle = "D21 WATCH 4 SET";
  const productSubtitle =
    "D21 WATCH 4 SET Smart Watches With Earbuds Dual Watchbands Sleep Heart Rate Monitoring Smart Bracelet 2024 Wearable Devices";
  const productHighlight =
    "D21 WATCH 4 SET features a 320*385 main screen, IP67 waterproofing rating, and versatile functions including heart rate monitoring, sleep tracking, call message reminders, and fitness tracking. With a 280mAh battery supporting 5-10 days of use, it offers compatibility with both iOS and Android systems, touch screen, and Bluetooth connectivity for enhanced user experience.";

  root.innerHTML = `
        <main>
            <div class="container">
                <p>INTRODUCING</p>

                <div id="product-title">
                    <h1>${productTitle}</h1>
                    <p>${productSubtitle}</p>
                </div>
               
                <div class="cta-btn">
                    ${OrderNowButton()}
                </div>

                <div class="product-media">
                    <video width="100%" height="240" controls>
                        <source src="./assets/videos/D21 Watch 4 Set Smart Watches With Earbuds.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <img src="./assets/images/D21 Smart Watch 2.avif"/>
                </div>

                <div id="product-highlight">
                    <p>Featured Highlights: ${productHighlight}</p>
                </div>

                <div class="cta-btn">
                    ${OrderNowButton()}
                </div>

                <div id="product-details">
                    <h3>KEY ATTRIBUTES</h3>
                    <img src="./assets/images/D21 Smart Watch Attributes.PNG" />
                </div>

                <div class="cta-btn">
                    ${OrderNowButton()}
                </div>

                <div class="product-media">
                    <img src="./assets/images/free delivery.jpg" />
                    <img src="./assets/images/D21 Smart Watch 2.avif"/>
                </div>

                <div id="order-disclaimer">
                    <p>Don't break our hearts, only order If you're available to accept your order. Failed delivery leads to great loss for us. <br/>Click I will accept it below if you are available to receive your order as soon as possible. Thanks.
                    </p>
                </div>

                <div class="cta-btn">
                    ${OrderNowButton()}
                </div>

                <div class="product-price">
                    <p>PROMO PRICE, HEAVILY DISCOUNTED!</p>

                    <p>PAY ₦45,000 TODAY!</p>
                    <p>(INSTEAD OF ₦70,000)</p>
                </div>

                <div id="order-area">
                    <form></form>
                </div>
            </div>
        </main>
    `;
});
