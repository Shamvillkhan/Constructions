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




// animation.js

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




let popupShown = false;

function showCallPopup() {
  if (popupShown) return;
  
  document.getElementById('callPopup').classList.remove('hidden');
  setTimeout(() => {
    document.querySelector('#callPopup > div').classList.remove('scale-95');
  }, 10);
  popupShown = true;

  sessionStorage.setItem('popupShown', 'true');
}

function hideCallPopup() {
  document.querySelector('#callPopup > div').classList.add('scale-95');
  setTimeout(() => {
    document.getElementById('callPopup').classList.add('hidden');
  }, 300);
}


setTimeout(showCallPopup, 30000);


document.addEventListener('mouseout', (e) => {
  if (e.relatedTarget === null && !popupShown) {
    showCallPopup();
  }
});

window.addEventListener('load', () => {
  if (sessionStorage.getItem('popupShown') === 'true') {
    popupShown = true;
  }
});


document.getElementById('callPopup').addEventListener('click', function(e) {
  if (e.target.id === 'callPopup') {
    hideCallPopup();
  }
});



// form.js

// js/form.js - Contact form handling and services functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');

    if (contactForm && formMessage && submitBtn && btnText) {
        
        // REMOVE the e.preventDefault() - Let FormSubmit do its job
        contactForm.addEventListener('submit', function(e) {
            // DON'T prevent default - FormSubmit needs to submit normally
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            submitBtn.style.opacity = '0.7';
            
            // Show sending message
            formMessage.textContent = 'Sending your message...';
            formMessage.className = 'form-message info show';
            
            // Get form data for reference (optional)
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());
            console.log('Sending form data:', formObject);
            
            e.preventDefault(); // Uncomment this if you wan t AJAX submission
            
            // Submit via fetch
            fetch('https://formsubmit.co/ajax/jkconstructions.info@gmail.com', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formObject)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Show success message
                formMessage.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
                formMessage.className = 'form-message success show';
                
                // Reset form
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                // Show error message
                formMessage.textContent = 'Something went wrong. Please try again or email us directly.';
                formMessage.className = 'form-message error show';
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                submitBtn.style.opacity = '1';
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 5000);
            });
            
        }); // Close the submit event listener

        // Form validation on input change
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#FFB316';
                }
            });
            
            input.addEventListener('input', function() {
                this.style.borderColor = '#e5e7eb';
            });
        });
    }

    // View More Services functionality
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const extraServices = document.getElementById('extraServices');

    if (viewMoreBtn && extraServices) {
        viewMoreBtn.addEventListener('click', () => {
            const isHidden = extraServices.classList.contains('hidden');
            extraServices.classList.toggle('hidden');
            
            // Update button text
            viewMoreBtn.textContent = isHidden ? 'Show Less' : 'View All Services';
            
            // Smooth scroll to services when showing more
            if (isHidden) {
                setTimeout(() => {
                    extraServices.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 300);
            }
            
            // Add animation to newly shown services
            if (isHidden) {
                setTimeout(() => {
                    const newServices = extraServices.querySelectorAll('.service-card');
                    newServices.forEach((service, index) => {
                        service.style.animationDelay = `${index * 0.1}s`;
                    });
                }, 50);
            }
        });
    }

    console.log('Form JS loaded successfully');
});

// gallery.js
// js/gallery.js - Lightbox and project gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const projectCards = document.querySelectorAll('.project-card');

    if (lightbox && lightboxImg && lightboxClose) {
        // Open lightbox when project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.getAttribute('data-lightbox');
                if (imgSrc) {
                    lightboxImg.src = imgSrc;
                    lightboxImg.alt = card.querySelector('img').alt || 'Project image';
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
            
            // Keyboard accessibility for project cards
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const imgSrc = card.getAttribute('data-lightbox');
                    if (imgSrc) {
                        lightboxImg.src = imgSrc;
                        lightboxImg.alt = card.querySelector('img').alt || 'Project image';
                        lightbox.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        });

        // Close lightbox when close button is clicked
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close lightbox with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

});

// optimizaiton
// Ultra-optimized scroll handler for feature section
(function() {
  let ticking = false;
  const featureSection = document.getElementById('features');
  
  if (!featureSection) return;
  
  function optimizeFeatureSection() {
    // Check if feature section is in viewport
    const rect = featureSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      // Temporarily disable heavy styles when scrolling
      featureSection.style.willChange = 'transform';
      featureSection.style.transform = 'translateZ(0)';
    } else {
      // Reset when out of view
      featureSection.style.willChange = 'auto';
      featureSection.style.transform = 'none';
    }
    
    ticking = false;
  }
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(optimizeFeatureSection);
      ticking = true;
    }
  }, { passive: true });
})();

// Show different content based on user location
if (userCity === "Bhopal") {
  document.getElementById("service-area").innerHTML = "Serving Bhopal & nearby areas for 20+ years";
}