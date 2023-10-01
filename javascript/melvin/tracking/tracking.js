/*
	Semester 1 Assignment
	Delightful Departure Funeral Website

	Delightful Departure Goods Page
	Author: Melvin Wong Ka Kian, Liow Zhen Bang
	Date: 22 September 2023
	Filename: tracking.js
*/

// Add this line at the beginning of your JavaScript code to clear the order status initially
document.querySelector('.orderStatus').textContent = '';

// Create an object to store order statuses by tracking number
const orderStatuses = {};

// Function to generate a random order status
function getRandomOrderStatus() {
    const statuses = [
        {
            status: 'Out for delivery',
            info: 'Your parcel is out for delivery. Delivery will be attempted in the next hour.',
            image: '/medias/images/melvin/tracking/outfordelivery.png'
        },
        {
            status: 'Parcel lost',
            info: 'Your parcel is lost. Please contact our agents.',
            image: '/medias/images/melvin/tracking/parcellost.png'
        },
        {
            status: 'In transit',
            info: 'Your parcel is in transit and on its way to the delivery hub.',
            image: '/medias/images/melvin/tracking/intransit.png'
        },
		{
            status: 'Delivered',
            info: 'Your parcel is delivered.',
            image: '/medias/images/melvin/tracking/delivered.png'
        }
    ];
    
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}

// Function to handle the track button click
function trackOrder() {
    const trackingNumber = document.getElementById('trackNumber').value;

    // Check if the tracking number matches the format (DDEX123456789)
    const regex = /^DDEX\d{9}$/;
    if (regex.test(trackingNumber)) {
        // Check if this tracking number already has an order status stored
        if (orderStatuses[trackingNumber]) {
            const { status, info, image } = orderStatuses[trackingNumber];

            // Display the stored order status, information, and image in the "orderStatus" div
            const orderStatusDiv = document.querySelector('.orderStatus');
            orderStatusDiv.innerHTML = `
                <h2>Order status for tracking number ${trackingNumber}:</h2>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Information:</strong> ${info}</p>
                <img src="${image}" alt="${status} Image" width="640px" height="360px">
            `;
        } else {
            // Generate a random order status for this tracking number
            const orderInfo = getRandomOrderStatus();

            // Store the order status for this tracking number
            orderStatuses[trackingNumber] = orderInfo;

            // Display the order status, information, and image in the "orderStatus" div
            const orderStatusDiv = document.querySelector('.orderStatus');
            orderStatusDiv.innerHTML = `
                <h2>Order status for tracking number ${trackingNumber}:</h2>
                <p><strong>Status:</strong> ${orderInfo.status}</p>
                <p><strong>Information:</strong> ${orderInfo.info}</p>
                <img src="${orderInfo.image}" alt="${orderInfo.status} Image">
            `;
        }
    } else {
        // Display an error message if the tracking number format is invalid
        alert('Invalid tracking number format. Please enter a valid tracking number (e.g., DDEX123456789).');
    }
}

// Attach the trackOrder function to the track button click event
const trackButton = document.getElementById('trackButton');
trackButton.addEventListener('click', trackOrder);
