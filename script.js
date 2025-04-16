document.addEventListener('DOMContentLoaded', function () {
    // Navigation links handling - works for both internal and external links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    // Scroll animation for portfolio, service, and competency items
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.competency-card');

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
    const animatedElements = document.querySelectorAll('.competency-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Modal Handling
    const expandBtns = document.querySelectorAll('.expand-btn');
    const modals = document.querySelectorAll('.modal');

    expandBtns.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-target');
            const modal = document.querySelector(modalId);
            modal.style.display = 'block';
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });

    // Header color change on scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
