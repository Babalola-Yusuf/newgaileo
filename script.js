// Select the necessary elements
const navToggle = document.querySelector(".container i");
const navMenu = document.querySelector(".nav");

// Add event listener to the navigation toggle
navToggle.addEventListener("click", toggleNavMenu);

// Function to toggle the navigation menu
function toggleNavMenu() {
  navMenu.classList.toggle("active");
}

