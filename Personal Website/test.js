// test.js

// Function to handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send email using EmailJS
        emailjs.send("service_nh05op7", "template_2d80pkg", {
            from_name: name,
            reply_to: email,
            message: message
        }).then((response) => {
            alert("Message sent successfully! We'll get back to you soon.");
            contactForm.reset(); // Reset the form fields
        }, (error) => {
            alert("Failed to send the message. Please try again later.");
        });
    });
});
