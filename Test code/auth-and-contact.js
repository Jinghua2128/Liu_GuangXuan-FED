// Blog login functionality
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    const blogContent = document.getElementById('blog-content');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Simple client-side authentication (not secure for production)
            if (username === 'demo' && password === 'password') {
                loginForm.style.display = 'none';
                blogContent.style.display = 'block';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            // Simulate sending email (replace with actual email sending in a real application)
            console.log('Sending email:', { name, email, message });
            alert('Message sent successfully! (This is a simulation)');
            contactForm.reset();
        });
    }
}

// Initialize functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupLoginForm();
    setupContactForm();
});

