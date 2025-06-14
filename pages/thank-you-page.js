

export const ThankYouPage = ({ firstName = "", lastName = "" } = {}) => {
    
    return `
        <main>
            <div class="container">
                <section>
                    <div id="thank-you-message">
                       <h2>Thank you, ${firstName} ${lastName} for ordering the <span class="p-name">D21 WATCH 4 SET SMART WATCH</span>. <br/> Our agent will contact you soon via call and WhatsApp to confirm your order.</h2> 
                    </div>

                    <button id="back-to-homepage">Go Back To Homepage</button>
                </section>
            </div>
        </main>
    `
};
