// Get DOM elements
const modal = document.getElementById('contact-modal');
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const contactLinks = document.querySelectorAll('a[href="#contact"]');
const closeButton = document.querySelector('.close-button');
const contactForm = document.getElementById('contact-form');

// Open modal when clicking contact links
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

// Close modal when clicking close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Reset form and close modal
    contactForm.reset();
    modal.style.display = 'none';
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
});

// Toggle mobile navigation
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile navigation when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close mobile navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.burger-menu')) {
        navLinks.classList.remove('active');
    }
});