document.addEventListener('DOMContentLoaded', function() {
    // Navigation links animation
    // Navigation links handling - works for both internal and external links
    const navLinks = document.querySelectorAll('nav ul li a.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        // Only handle smooth scroll for internal links (#)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));
            
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        // External links will follow normally
        });
    });

    // Scroll animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.portfolio-item, .service-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animated elements
    const animatedElements = document.querySelectorAll('.portfolio-item, .service-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you could add code to submit the form
            // For example with fetch() or XMLHttpRequest
            
            alert('Thank you for your message! I will get back to you as soon as possible.');
            this.reset();
        });
    }

    // Header color change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
