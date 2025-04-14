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

