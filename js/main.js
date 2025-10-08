// Simplified version without overlay
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('open');
        
        if (isOpen) {
            // Closing menu
            navLinks.classList.remove('open', 'flex');
            navLinks.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            // Opening menu
            navLinks.classList.remove('hidden');
            navLinks.classList.add('open', 'flex');
            menuBtn.setAttribute('aria-expanded', 'true');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close menu when link clicked (mobile)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navLinks.classList.remove('open', 'flex');
                navLinks.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}
  
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile viewport handling
    function setMobileZoom() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (window.innerWidth <= 768) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=no');
        } else {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    }

    window.addEventListener('load', setMobileZoom);
    window.addEventListener('resize', setMobileZoom);

    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                loadingScreen.classList.add('hide');
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 1000);
        });
    }

    console.log('Main JS loaded successfully');



    

document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const extraServices = document.getElementById('extraServices');
  const servicesGrid = document.getElementById('servicesGrid');
  
  let isExpanded = false;

  viewMoreBtn.addEventListener('click', function() {
    if (!isExpanded) {
      // Show hidden services
      extraServices.classList.remove('hidden');
      extraServices.classList.add('grid', 'md:grid-cols-3', 'gap-8', 'col-span-full');
      
      // Update button text
      viewMoreBtn.textContent = 'Show Less Services';
      isExpanded = true;
    } else {
      // Hide services
      extraServices.classList.add('hidden');
      extraServices.classList.remove('grid', 'md:grid-cols-3', 'gap-8', 'col-span-full');
      
      // Update button text
      viewMoreBtn.textContent = 'View All Services';
      isExpanded = false;
      
      // Scroll to services section
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// In main.js - Add this to the navbar scroll effect section
const navbar = document.getElementById('navbar');
if (navbar) {
    // Force fixed positioning
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.zIndex = '50';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}