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

// Labib: Appointment form submission and validation
const bookingForm = document.querySelector("#booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Labib: Form field validation
        const fullName = document.querySelector("#full-name").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const address = document.querySelector("#address").value.trim();
        const service = document.querySelector("#service").value;
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;

        // Basic validation
        if (!fullName || !phone || !address || !service || !date || !time) {
            alert("Please fill out all required fields!");
            return;
        }

        if (!/^\d{10,}$/.test(phone)) {
            alert("Please enter a valid phone number (at least 10 digits)!");
            return;
        }

        // Labib: Success alert for form submission
        alert(`Appointment requested successfully!\n\nDetails:\nName: ${fullName}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}`);
        bookingForm.reset(); // Reset form after submission
    });
}
