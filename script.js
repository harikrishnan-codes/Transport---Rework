document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');

            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                mobileMenuBtn.style.color = "var(--text-dark)";
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuBtn.style.color = "";
            }
        });

        // Close mobile menu when a linked is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuBtn.style.color = "";
            });
        });
    }

    // Reveal elements on scroll
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Trigger once on load
    revealOnScroll();

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Open this if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Tracking form submission logic (mock)
    const trackSubmitBtn = document.querySelector('.track-submit');
    const trackInput = document.querySelector('.tracking-input-group input');

    if (trackSubmitBtn && trackInput) {
        trackSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (trackInput.value.trim() !== "") {
                const btnOriginalText = trackSubmitBtn.innerHTML;
                trackSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking...';

                setTimeout(() => {
                    trackSubmitBtn.innerHTML = btnOriginalText;
                    alert(`Tracking details for ${trackInput.value} have been found. The package is currently in transit to destination.`);
                }, 1500);
            } else {
                alert("Please enter a valid tracking ID.");
            }
        });
    }
});
