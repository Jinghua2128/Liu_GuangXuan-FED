document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const nav = document.getElementById('nav');
    const themeToggle = document.getElementById('theme-toggle');

    // Navigation
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Load page content
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                if (page === 'blog') {
                    setupLoginForm();
                } else if (page === 'contact') {
                    setupContactForm();
                }
            })
            .catch(error => {
                console.error('Error loading page:', error);
                content.innerHTML = '<p>Error loading page. Please try again.</p>';
            });
    }

    // Setup login form
    function setupLoginForm() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                // Simulate login (replace with actual authentication in a real application)
                if (username === 'demo' && password === 'password') {
                    document.getElementById('login-section').style.display = 'none';
                    document.getElementById('blog-content').style.display = 'block';
                } else {
                    alert('Invalid credentials. Please try again.');
                }
            });
        }
    }

    // Setup contact form
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
                const messageElement = document.createElement('div');
                messageElement.className = 'message success';
                messageElement.textContent = 'Message sent successfully!';
                contactForm.appendChild(messageElement);
                contactForm.reset();
            });
        }
    }

    // Load home page by default
    loadPage('home');
});

