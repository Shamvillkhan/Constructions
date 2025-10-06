// js/mobile-menu.js - Standalone mobile menu fix
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        const isOpen = navLinks.classList.contains('open');
        
        if (isOpen) {
            // Close menu
            navLinks.classList.remove('open');
            navLinks.classList.add('hidden');
            menuOverlay.classList.remove('show');
            document.body.style.overflow = '';
        } else {
            // Open menu
            navLinks.classList.remove('hidden');
            navLinks.classList.add('open', 'flex');
            menuOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        menuBtn.setAttribute('aria-expanded', !isOpen);
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMenu);
    }
    
    // Close menu on link click
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }
});