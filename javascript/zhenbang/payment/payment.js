// Retrieve selected items from sessionStorage
const selectedItems = JSON.parse(sessionStorage.getItem("selectedItems"));

// Function to display selected items, prices, and apply promo code
function displayPaymentSummary() {
    const paymentSummary = document.querySelector(".payment-summary");
    const promoCodeInput = document.getElementById("promo");
    const totalAmountElement = document.getElementById("total-amount");
    const totalPromoSavedElement = document.getElementById("total-promosaved");
    const finalAmountElement = document.getElementById("final-amount");

    const applyShippingPromoButton = document.getElementById("apply-shipping-promo");
    const shippingPromoCodeInput = document.getElementById("shipping-promo");
    const shippingAmountElement = document.getElementById("shipping-amount");
    const totalShippingSavedElement = document.getElementById("total-shippingsaved");
    const applyPromoButton = document.getElementById("apply-promo");

    let totalAmount = 0;
    let totalAmountBeforeShipping = 0;
    let promoDiscount = 0;
    let shippingDiscount = 0;
    let isShippingPromoApplied = false; // Track if shipping promo is applied
    
    function updateSummary() {
        totalAmount = 0;
        promoDiscount = 0;
    
        if (!selectedItems || selectedItems.length === 0) {
            paymentSummary.innerHTML = "<p>No items selected for payment, how did you even get here? Redirecting you back to homepage in 5 seconds.</p>";
    
            // Redirect to homepage after 5 seconds
            setTimeout(() => {
                window.location.href = "/html/simon/homepage.html"; // Replace with your actual homepage URL
            }, 5000);
        } else {
            let itemsHTML = "<h3>Cart:</h3><ul>";
    
            selectedItems.forEach((item) => {
                const { title, price, imgSrc } = item;
                itemsHTML += `
                    <div class="item">
                        <img src="${imgSrc}" alt="${title}" width="100">
                        <div>
                            <p>${title}</p>
                            <p>${price}</p>
                        </div>
                    </div>
                `;
                // Calculate total amount
                totalAmount += parseFloat(price.replace("RM", ""));
            });
    
            itemsHTML += "</ul>";
    
            // Calculate the total amount before shipping
            totalAmountBeforeShipping = totalAmount;
    
            // Display the selected items, total amount with shipping, and initial total saved
            paymentSummary.innerHTML = itemsHTML;
            totalAmountElement.textContent = `Total price: RM${totalAmountBeforeShipping.toFixed(2)}`;
            shippingAmountElement.textContent = `Shipping Amount: RM7.90`;
    
            // Calculate and update the total shipping saved
            const shippingPromoCode = shippingPromoCodeInput.value.trim();
            const shippingDiscounts = {
                "DDPAYDAY25FS": 2.50,
                "DDBDAY": 7.90,
                "DDFS": 1.90,
                "DDALLDAYFS": 5.90,
                // Add more shipping promo codes and discounts as needed
            };
    
            if (shippingDiscounts.hasOwnProperty(shippingPromoCode)) {
                // Calculate the discount and update the shipping amount
                if (!isShippingPromoApplied) {
                    shippingDiscount = shippingDiscounts[shippingPromoCode];
                    const finalShippingAmount = 7.90 - shippingDiscount;
    
                    // Update the shipping amount display
                    shippingAmountElement.textContent = `Shipping Amount: RM${finalShippingAmount.toFixed(2)}`;
    
                    // Update the total amount before shipping with the new shipping cost
                    totalAmountBeforeShipping -= shippingDiscount;
    
                    // Update the total shipping saved to show the discount amount
                    totalShippingSavedElement.textContent = `Shipping Saved: RM${shippingDiscount.toFixed(2)}`;
    
                    // Mark shipping promo as applied
                    isShippingPromoApplied = true;
                }
            } else {
                // Reset the shipping promo if an invalid code is entered
                isShippingPromoApplied = false;
                shippingDiscount = 0;
                totalShippingSavedElement.textContent = "Total Shipping Saved: RM0.00";
            }
    
            // Calculate total saved (only promo code)
            const promoCode = promoCodeInput.value.trim();
            const promoCodes = {
                "DDPAYDAY25": 0.25,
                "DDALLDAY": 0.10,
                "DDBDAY": 0.30,
                "DD50OFF": 0.50,
                "ZBQR": 1.0,
                "DDVIP888": 0.888,
                "DDVIP666": 0.666,
                // Add more promo codes and discounts as needed
            };
    
            // Check if a promo code has been applied
            if (promoCodes.hasOwnProperty(promoCode)) {
                promoDiscount = totalAmountBeforeShipping * promoCodes[promoCode];
            }
    
            // Calculate the discount percentage
            const discountPercentage = ((promoDiscount / totalAmountBeforeShipping) * 100).toFixed(2);
            const discountPercentageText = `Discounted amount: ${discountPercentage}%`;
    
            // Update total promo saved and final amount displays
            totalPromoSavedElement.textContent = `Total Promo Saved: RM${promoDiscount.toFixed(2)} (${discountPercentageText})`;
    
            // Calculate final amount
            const finalAmount = totalAmountBeforeShipping + 7.90 - promoDiscount;
            finalAmountElement.textContent = `Final Amount: RM${finalAmount.toFixed(2)}`;
        }
    }
    
    // Apply shipping promo code when the button is clicked
    applyShippingPromoButton.addEventListener("click", () => {
        const shippingPromoCode = shippingPromoCodeInput.value.trim();
        const promoCode = promoCodeInput.value.trim();
    
        // Define your shipping promo codes and corresponding discounts here
        const shippingDiscounts = {
            "DDPAYDAY25FS": 2.50,
            "DDBDAY": 7.90,
            "DDFS": 1.90,
            "DDALLDAYFS": 5.90,
        };
    
        if (promoCode) {
            // Promo code is already applied, show error message
            alert("You cannot apply both shipping and promo codes simultaneously. Please remove the promo code if you want to apply the shipping promo.");
        } else if (shippingDiscounts.hasOwnProperty(shippingPromoCode)) {
            // Calculate the discount and update the shipping amount
            if (!isShippingPromoApplied) {
                shippingDiscount = shippingDiscounts[shippingPromoCode];
                const finalShippingAmount = 7.90 - shippingDiscount;
    
                // Update the shipping amount display
                shippingAmountElement.textContent = `Shipping Amount: RM${finalShippingAmount.toFixed(2)}`;
    
                // Update the total amount before shipping with the new shipping cost
                totalAmountBeforeShipping -= shippingDiscount;
    
                // Update the summary
                updateSummary();
    
                // Mark shipping promo as applied
                isShippingPromoApplied = true;
            } else {
                // Shipping promo has already been applied
                alert("Shipping promo code has already been applied.");
            }
        } else {
            // Invalid shipping promo code
            alert("Invalid shipping promo code. Please try again.");
        }
    });
    
    // Apply promo code when the button is clicked
    applyPromoButton.addEventListener("click", () => {
        const promoCode = promoCodeInput.value.trim();
        const shippingPromoCode = shippingPromoCodeInput.value.trim();
    
        // Define your promo code and corresponding discount here
        const promoCodes = {
            "DDPAYDAY25": 0.25,
            "DDALLDAY": 0.10,
            "DDBDAY": 0.30,
            "DD50OFF": 0.50,
            "ZBQR": 1.0,
            "DDVIP888": 0.888,
            "DDVIP666": 0.666,
            // Add more promo codes and discounts as needed
        };
    
        if (shippingPromoCode) {
            // Shipping promo code is already applied, show error message
            alert("You cannot apply both shipping and promo codes simultaneously. Please remove the shipping promo code if you want to apply the promo code.");
        } else if (promoCodes.hasOwnProperty(promoCode)) {
            // Calculate the discount and update the summary
            promoDiscount = totalAmountBeforeShipping * promoCodes[promoCode];
            updateSummary();
        } else {
            // Invalid promo code
            alert("Invalid promo code. Please try again.");
        }
    });

    // Initial update of the summary
    updateSummary();
}

function redirectToThankYouPage() {
    window.location.href = "/html/zhenbang/thankyou.html"; // Replace with the URL of your thank you page
}

const submitPaymentButton = document.getElementById("submit");
if (submitPaymentButton) {
    submitPaymentButton.addEventListener("click", function (event) {
        event.preventDefault();
        redirectToThankYouPage();
    });
}

// Call the function to display the payment summary and apply promo codes
displayPaymentSummary();