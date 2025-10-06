// js/animations.js - Scroll animations and counters
document.addEventListener('DOMContentLoaded', function() {
    // Scroll Animation Functionality
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // Throttle scroll for better performance
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (!scrollTimer) {
            scrollTimer = setTimeout(() => {
                scrollTimer = null;
                handleScrollAnimation();
            }, 16);
        }
    });

    // Initial check on page load
    handleScrollAnimation();

    // Animated counter for statistics
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    };

    const startCounterAnimation = () => {
        statNumbers.forEach(stat => {
            if (elementInView(stat, 1.2) && stat.textContent === '0') {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            }
        });
    };

    window.addEventListener('scroll', startCounterAnimation);
    startCounterAnimation(); // Initial check

    console.log('Animations JS loaded successfully');
});