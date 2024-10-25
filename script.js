// script.js
document.querySelector('footer form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Your message has been sent!'); // Show a simple alert
    this.reset(); // Reset the form fields
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
