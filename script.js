document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        contactForm.reset();

        // Show a confirmation message
        alert('Thank you for your message! I will get back to you soon.');
    });
});