// JavaScript for Doctor at Your Door

// Shahan: Added functionality for dynamic behavior in the Home section
document.addEventListener("DOMContentLoaded", function () {
    
    const steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            alert(`Step ${index + 1} clicked!`);
        });
    });

    // Shahan: Bootstrap mobile toggle is handled via Bootstrap JS (already included in HTML)
    // No additional JS needed for mobile toggle as it’s managed by Bootstrap
});

// hi i am Ayan: Search functionality designed
const searchForm = document.querySelector(".navbar form");
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = this.querySelector("input[type='search']").value.toLowerCase();

    
    // Ayan: Basic logic for searching services 
    if (searchInput.includes("general")) {
        alert("Searching for General Consultation...");
    } else if (searchInput.includes("chronic")) {
        alert("Searching for Chronic Disease Management...");
    } else if (searchInput.includes("elderly")) {
        alert("Searching for Elderly Care...");
    } else {
        alert("No matching services found. Try 'General', 'Chronic', or 'Elderly'.");
    }
});
