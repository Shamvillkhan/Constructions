// Carousel Data
const blogPosts = [
  {
    id: 1,
    title: "Building Sustainable Homes",
    excerpt: "Explore the principles and benefits of sustainable construction practices for modern homes. Learn how to reduce environmental impact while creating beautiful, efficient living spaces.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    link: "#",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Innovative Architectural Design Trends",
    excerpt: "Stay ahead with the latest design trends shaping the future of architecture. Discover how technology and sustainability are transforming modern construction.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    link: "#",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Renovation Tips for Your Home",
    excerpt: "Learn expert tips to make your home renovation project smooth and successful. From planning to execution, we've got you covered.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600",
    link: "#",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Modern Construction Materials",
    excerpt: "Discover the latest materials revolutionizing the construction industry. From self-healing concrete to smart glass, explore what's new.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600",
    link: "#",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Smart Home Integration",
    excerpt: "How to seamlessly integrate smart technology into your construction projects. Create homes that are both beautiful and intelligent.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=600",
    link: "#",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Cost-Effective Construction Methods",
    excerpt: "Strategies to reduce construction costs without compromising quality. Smart planning and material choices can save you thousands.",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=600",
    link: "#",
    readTime: "8 min read"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    position: "CEO, GreenTech",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "JKConstruction delivered our project on time and exceeded all expectations. Their attention to detail is remarkable. The team was professional throughout the entire process.",
    rating: 5
  },
  {
    id: 2,
    name: "David K.",
    position: "Founder, BuildRight",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    content: "Professional team with great communication throughout the process. Highly recommend them! They understood our vision and brought it to life perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah T.",
    position: "Manager, Urban Living",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    content: "Outstanding quality and service. They transformed our vision into reality perfectly! The finished project has received countless compliments.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael B.",
    position: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The team was professional, responsive, and delivered exactly what we wanted. Couldn't be happier with our new home!",
    rating: 5
  },
  {
    id: 5,
    name: "Jennifer L.",
    position: "Property Developer",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    content: "Working with JKConstruction was a seamless experience from start to finish. Will definitely use their services again for future projects.",
    rating: 5
  },
  {
    id: 6,
    name: "Robert K.",
    position: "Architect",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "As a fellow professional in the industry, I can confidently say JKConstruction sets the standard for quality work and client satisfaction.",
    rating: 5
  }
];

// Carousel Class
class Carousel {
  constructor(containerId, items, options = {}) {
    this.container = document.getElementById(containerId);
    this.items = items;
    this.options = {
      autoPlay: options.autoPlay || false,
      autoPlayInterval: options.autoPlayInterval || 5000,
      isBlog: options.isBlog || true,
      ...options
    };
    
    this.currentIndex = 0;
    this.slidesPerView = 1;
    this.autoPlayTimer = null;
    
    this.init();
  }
  
  init() {
    this.createCarouselStructure();
    this.updateSlidesPerView();
    this.createCarouselItems();
    this.createDots();
    this.updateCarousel();
    this.attachEventListeners();
    
    if (this.options.autoPlay) {
      this.startAutoPlay();
    }
  }
  
  createCarouselStructure() {
    this.track = document.createElement('div');
    this.track.className = 'carousel-track';
    this.container.appendChild(this.track);
    
    // Create navigation buttons
    this.prevBtn = document.createElement('button');
    this.prevBtn.className = 'carousel-btn prev';
    this.prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    this.prevBtn.setAttribute('aria-label', 'Previous items');
    this.container.appendChild(this.prevBtn);
    
    this.nextBtn = document.createElement('button');
    this.nextBtn.className = 'carousel-btn next';
    this.nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    this.nextBtn.setAttribute('aria-label', 'Next items');
    this.container.appendChild(this.nextBtn);
    
    // Create dots container
    this.dotsContainer = document.createElement('div');
    this.dotsContainer.className = 'carousel-dots';
    this.container.appendChild(this.dotsContainer);
  }
  
  updateSlidesPerView() {
    if (window.innerWidth >= 1024) {
      this.slidesPerView = 3;
    } else if (window.innerWidth >= 768) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }
  
  createCarouselItems() {
    this.track.innerHTML = '';
    
    this.items.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      
      if (this.options.isBlog) {
        slide.innerHTML = this.createBlogCard(item);
      } else {
        slide.innerHTML = this.createTestimonialCard(item);
      }
      
      this.track.appendChild(slide);
    });
  }
  
  createBlogCard(item) {
    return `
      <article class="blog-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="blog-content">
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
          <div class="flex justify-between items-center mt-auto">
            <span class="text-sm text-gray-500">${item.readTime}</span>
            <a href="${item.link}" aria-label="Read more about ${item.title}">Read More &rarr;</a>
          </div>
        </div>
      </article>
    `;
  }
  
  createTestimonialCard(item) {
    const stars = Array(item.rating).fill('<i class="fas fa-star text-yellow-400" aria-hidden="true"></i>').join('');
    
    return `
      <article class="testimonial-card">
        <div class="testimonial-content">
          <div class="stars" aria-label="${item.rating} out of 5 stars">
            ${stars}
          </div>
          <p>"${item.content}"</p>
          <div class="testimonial-author">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <div class="testimonial-author-info">
              <h4>${item.name}</h4>
              <p>${item.position}</p>
            </div>
          </div>
        </div>
      </article>
    `;
  }
  
  createDots() {
    this.dotsContainer.innerHTML = '';
    const totalSlides = Math.ceil(this.items.length / this.slidesPerView);
    
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }
  
  updateCarousel() {
    const slideWidth = 100 / this.slidesPerView;
    this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}%)`;
    
    // Update active dot
    const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update button states
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= Math.ceil(this.items.length / this.slidesPerView) - 1;
  }
  
  goToSlide(index) {
    const maxIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
    this.currentIndex = Math.max(0, Math.min(index, maxIndex));
    this.updateCarousel();
    
    // Reset autoplay if active
    if (this.options.autoPlay) {
      this.resetAutoPlay();
    }
  }
  
  nextSlide() {
    const maxIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    } else if (this.options.autoPlay) {
      // Loop back to start
      this.currentIndex = 0;
      this.updateCarousel();
    }
  }
  
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    } else if (this.options.autoPlay) {
      // Loop to end
      this.currentIndex = Math.ceil(this.items.length / this.slidesPerView) - 1;
      this.updateCarousel();
    }
  }
  
  attachEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.prevSlide();
      if (this.options.autoPlay) {
        this.resetAutoPlay();
      }
    });
    
    this.nextBtn.addEventListener('click', () => {
      this.nextSlide();
      if (this.options.autoPlay) {
        this.resetAutoPlay();
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.updateSlidesPerView();
      this.createDots();
      this.updateCarousel();
    });
    
    // Keyboard navigation
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    });
    
    // Pause autoplay on hover
    if (this.options.autoPlay) {
      this.container.addEventListener('mouseenter', () => {
        this.pauseAutoPlay();
      });
      
      this.container.addEventListener('mouseleave', () => {
        this.startAutoPlay();
      });
    }
  }
  
  startAutoPlay() {
    if (this.options.autoPlay && !this.autoPlayTimer) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.options.autoPlayInterval);
    }
  }
  
  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }
  
  resetAutoPlay() {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }
  
  destroy() {
    this.pauseAutoPlay();
    
    // Remove event listeners
    this.prevBtn.removeEventListener('click', this.prevSlide);
    this.nextBtn.removeEventListener('click', this.nextSlide);
    
    // Clean up DOM
    this.container.innerHTML = '';
  }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Blog Carousel
  const blogCarousel = new Carousel('blog-carousel', blogPosts, {
    autoPlay: true,
    autoPlayInterval: 6000,
    isBlog: true
  });
  
  // Testimonial Carousel
  const testimonialCarousel = new Carousel('testimonial-carousel', testimonials, {
    autoPlay: true,
    autoPlayInterval: 8000,
    isBlog: false
  });
  
  // Make carousels available globally for debugging
  window.blogCarousel = blogCarousel;
  window.testimonialCarousel = testimonialCarousel;
});

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Carousel, blogPosts, testimonials };
}