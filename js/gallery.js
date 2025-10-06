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

    console.log('Gallery JS loaded successfully');
});