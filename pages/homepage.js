import { OrderNowButton } from "../components/Buttons.js";

export const Homepage = () => {
  const productTitle = "D21 WATCH 4 SET SMART WATCH";
  const productSubtitle =
    "D21 WATCH 4 SET Smart Watch With Earbuds Dual Watchbands Sleep Heart Rate Monitoring Smart Bracelet 2024 Wearable Devices";
  const productHighlight =
    "D21 WATCH 4 SET features a 320*385 main screen, IP67 waterproofing rating, and versatile functions including heart rate monitoring, sleep tracking, call message reminders, and fitness tracking. With a 280mAh battery supporting 5-10 days of use, it offers compatibility with both iOS and Android systems, touch screen, and Bluetooth connectivity for enhanced user experience.";
  const productPrice = 35000;

  return `
     <main>
            <div class="container">
                <section id="hero">
                    <p id="intro-text">INTRODUCING</p>

                    <div id="product-title">
                        <h1>${productTitle}</h1>
                        <div id="hero-product-img">
                        <img src="./assets/images/D21_Smart_Watch_5.png" id="hero-img"/>
                        <img src="./assets/images/D21-earbud.png" id="ear-bud"/>
                        </div>
                        
                        <p>${productSubtitle}</p>
                    </div>
                
                    <div class="cta-btn">
                        ${OrderNowButton("#form")}
                    </div>

                    <div class="product-media">
                        <video width="80%" height="300" controls controls poster="./assets/images/videoThumbail.webp">
                            <source src="./assets/videos/D21 Watch 4 Set Smart Watches With Earbuds.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div class="image-slider">
                            <button class="slider-btn" id="slider-left"><<</button>
                            <img src="./assets/images/D21 Smart Watch 2.png" id="slider-img"/>
                            <button class="slider-btn" id="slider-right">>></button>
                        </div>
                        
                    </div>
                </section>

                <section id="about">
                    <h2>About The Product</h2>
                    <div id="product-highlight">
                        <p>Featured Highlights: ${productHighlight}</p>
                    </div>

                    <div id="product-details">
                        <h3>KEY ATTRIBUTES</h3>
                        <img src="./assets/images/D21 Smart Watch Attributes.PNG" />
                    </div>

                    <div class="cta-btn">
                         ${OrderNowButton("#form")}
                    </div>
                </section>
               
                <section id="additional-info">
                   <p id="we-offer">WE OFFER</p>
                   <div class="product-media">
                        <img src="./assets/images/free delivery.jpg" id="free-delivery"/>
                        <img src="./assets/images/D21 Smart Watch 1.png"/>
                    </div>
                    <div id="order-disclaimer">
                    <h4>NOTE</h4>
                        <p>Please don't break our hearts. <br/> Only order If you're willing to pay on delivery. Failed delivery leads to great loss for us. <br/> Click "Order Now" button below if you are available to receive your order as soon as possible. Thank you!.
                        </p>
                    </div>

                    <div class="cta-btn">
                         ${OrderNowButton("#form")}
                    </div>

                    <div class="product-price">
                        <p>PROMO PRICE, HEAVILY DISCOUNTED!</p>

                        <p>PAY ₦35,000 TODAY!</p>
                        <p>(INSTEAD OF ₦40,000)</p>
                    </div>
                </section>
                

                <section id="order-area">
                    <div class="form-header">
                        <p>Fill The Form Below To Complete Your Order</p>
                    </div>
                    <form id="form">
                        <label for="first-name">First Name *</label> 
                        <input type="text" id="first-name" placeholder="First Name" required/>
                        <label for="last-name">Last Name *</label> 
                        <input type="text" id="last-name" placeholder="Last Name" required/>
                        <label for="phone">Phone Number *</label> 
                        <input type="text" id="phone-number" placeholder="Phone Number" required/>
                        <label for="whatsapp-number">Whatsapp Number *</label> 
                        <input type="text" id="whatsapp-number" placeholder="WhatsApp Number" required/>
                        <label for="street-address">Street Address *</label> 
                        <input type="text" id="street-address" placeholder="Street Adress" required/>
                        <label for="city">City *</label> 
                        <input type="text" id="city" placeholder="City" required/>
                        <label for="state">State *</label> 
                        <input type="text" id="state" placeholder="State" required/>

                        <div class="product-price-disclaimer">
                            <p>Note: <br/>The price is N${productPrice}<br/>(Free Delivery | Payment on Delivery)</p>
                        </div>
                        <div id="form-submit-btn">
                            <input type="submit" value="Confirm Order">
                        </div>
                    </form>
                </section>
            </div>
        </main>
    
    `;
};
