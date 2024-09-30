// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex = (slideIndex + 1) % slides.length; // Cycle through slides
    slides[slideIndex].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Function to change slides based on button clicks
function plusSlides(n) {
    slideIndex += n; // Update slide index
    const slides = document.getElementsByClassName("slide");
    // Wrap around the slide index if it goes out of bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Set to the last slide
    }
    showSlides(); // Show the updated slide
}

// Add click event listeners to buttons
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1); // Previous button clicked
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1); // Next button clicked
});
