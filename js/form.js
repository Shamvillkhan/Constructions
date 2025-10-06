// js/form.js - Contact form handling and services functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');

    if (contactForm && formMessage && submitBtn && btnText) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            submitBtn.style.opacity = '0.7';
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());
            
            // Simulate form submission (Replace this with actual API call)
            setTimeout(() => {
                // Show success message
                formMessage.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
                formMessage.className = 'form-message success show';
                
                // Log form data (for debugging)
                console.log('Form submitted:', formObject);
                
                // Reset form
                contactForm.reset();
                
                // Reset button state
                setTimeout(() => {
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    submitBtn.style.opacity = '1';
                }, 500);
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 5000);
            }, 2000);
        });

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