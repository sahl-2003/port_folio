// ============================================
// ENHANCED PORTFOLIO JAVASCRIPT
// Modern, Animated, Production-Ready
// ============================================

console.log('🚀 Portfolio website initializing...');

// ============================================
// 1. PAGE LOADING
// ============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    console.log('✅ Page loaded successfully');
  }, 1000);
});


// ============================================
// 3. SCROLL PROGRESS INDICATOR
// ============================================
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = `${scrolled}%`;
});

// ============================================
// 4. HEADER SCROLL EFFECT
// ============================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 20) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
  
  // Hide header on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// ============================================
// 5. MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

// ============================================
// 6. SMOOTH SCROLL FOR NAVIGATION
// ============================================
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
    e.preventDefault();
      const targetId = href;
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ============================================
// 7. SCROLL DOWN BUTTON
// ============================================
const scrollBtn = document.getElementById('scroll-btn');
if (scrollBtn) {
scrollBtn.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = aboutSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
}

// ============================================
// 8. TYPING EFFECT
// ============================================
const typedTextElement = document.getElementById('typed-text');
const textArray = [
  'Building innovative web solutions',
  'Crafting beautiful user experiences',
  'Transforming ideas into reality',
  'Passionate about clean code'
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
  const currentText = textArray[textArrayIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    typingDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    typingDelay = 500;
  }
  
  setTimeout(typeText, typingDelay);
}

// Start typing effect after page load
setTimeout(typeText, 1500);


// ============================================
// 10. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      
      // Animate skill bars when skills section is visible
      if (entry.target.closest('#skills')) {
        animateSkillBars();
      }
    }
  });
}, observerOptions);

// Observe all reveal elements
const revealElements = document.querySelectorAll('.reveal-element');
revealElements.forEach(element => {
  observer.observe(element);
});

// ============================================
// 11. SKILL BARS ANIMATION
// ============================================
let skillBarsAnimated = false;

function animateSkillBars() {
  if (skillBarsAnimated) return;
  
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
      bar.style.setProperty('--progress', `${progress}%`);
      bar.style.width = `${progress}%`;
      bar.classList.add('animated');
    }, 200);
  });
  
  skillBarsAnimated = true;
}

// ============================================
// 12. ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  const headerHeight = header.offsetHeight;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(`.nav-link[href="#${sectionId}"]`).forEach(link => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-primary'));
        link.classList.add('text-primary');
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveNav);

// ============================================
// 13. PARALLAX EFFECTS
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Hero parallax - only for text and image, not the scroll button
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroText && scrolled < window.innerHeight) {
    heroText.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroText.style.opacity = 1 - (scrolled / 600);
  }
  
  if (heroImage && scrolled < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
  }
  
  // Keep scroll button fixed in position (no parallax)
  const scrollBtn = document.getElementById('scroll-btn');
  if (scrollBtn && scrolled < window.innerHeight) {
    scrollBtn.style.transform = 'translateX(-50%)'; // Keep centered, no parallax movement
  }
});

// ============================================
// 14. BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============================================
// 15. CONTACT FORM HANDLING
// ============================================
// Note: Contact form handling is now managed in index.html using EmailJS
// This section has been removed to prevent conflicts with the EmailJS handler

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// 16. FORM INPUT ANIMATIONS
// ============================================
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('input-focused');
  });
  
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('input-focused');
  });
});

// ============================================
// 17. UPDATE CURRENT YEAR IN FOOTER
// ============================================
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = currentYear;
}

// ============================================
// 18. PROJECT CARD ANIMATIONS
// ============================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// ============================================
// 19. KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
  // ESC key closes mobile menu
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  
  // Ctrl/Cmd + K for quick navigation
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});


// ============================================
// 21. PRELOAD CRITICAL ASSETS
// ============================================
function preloadCriticalAssets() {
  const criticalImages = [
    'hero-portrait.jpg'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadCriticalAssets();


// ============================================
// 23. VIEWPORT HEIGHT FIX FOR MOBILE
// ============================================
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);


// ============================================
// 25. CONSOLE EASTER EGG
// ============================================
console.log('%c👋 Hello, Developer!', 'color: #20b2aa; font-size: 24px; font-weight: bold;');
console.log('%cLooking for something? Feel free to reach out!', 'color: #6b7280; font-size: 14px;');
console.log('%c🌐 Portfolio by Mohammed Sahl', 'color: #222; font-size: 12px;');


// ============================================
// 27. INITIALIZATION COMPLETE
// ============================================
console.log('✨ Portfolio website fully loaded and interactive!');

// Add loaded class to body
document.body.classList.add('portfolio-loaded');

// ============================================
// 28. EDUCATION CAROUSEL
// ============================================
const educationCarousel = {
  currentSlide: 0,
  totalSlides: 3,
  track: null,
  indicators: null,
  
  init() {
    this.track = document.querySelector('.education-carousel-track');
    this.indicators = document.querySelectorAll('.edu-indicator');
    
    if (!this.track) return;
    
    // Previous button
    document.getElementById('edu-prev')?.addEventListener('click', () => {
      this.prevSlide();
    });
    
    // Next button
    document.getElementById('edu-next')?.addEventListener('click', () => {
      this.nextSlide();
    });
    
    // Indicator buttons
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });
    
    // Auto play
    this.startAutoPlay();
    
    // Pause auto play on hover
    const carouselContainer = document.querySelector('.education-carousel-container');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', () => {
        this.stopAutoPlay();
      });
      
      carouselContainer.addEventListener('mouseleave', () => {
        this.startAutoPlay();
      });
    }
    
    // Touch swipe support
    this.initTouchSupport();
  },
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  },
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  },
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateCarousel();
  },
  
  updateCarousel() {
    if (!this.track) return;
    
    // Move track
    this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    
    // Update indicators
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.remove('bg-gray-300');
        indicator.classList.add('bg-primary');
      } else {
        indicator.classList.remove('bg-primary');
        indicator.classList.add('bg-gray-300');
      }
    });
  },
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  },
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  },
  
  initTouchSupport() {
    let startX = 0;
    let isDragging = false;
    
    const container = document.querySelector('.education-carousel-container');
    if (!container) return;
    
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    
    container.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
    });
    
    container.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      
      isDragging = false;
    });
  }
};

// Initialize education carousel
if (document.querySelector('.education-carousel-track')) {
  educationCarousel.init();
  console.log('✅ Education carousel initialized');
}

// ============================================
// 29. PARTICLES.JS BACKGROUND ANIMATION
// ============================================
function initParticlesJS() {
  // Check if Particles.js library is loaded
  if (typeof particlesJS === 'undefined') {
    console.warn('⚠️ Particles.js library not loaded. Skipping particle animation.');
    return;
  }

  // Check if particles container exists
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) {
    console.warn('⚠️ Particles container not found. Skipping particle animation.');
    return;
  }

  // Initialize Particles.js with orange color scheme
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#F59E0B' // Bright orange color
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#F59E0B',
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.7
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  console.log('✅ Particles.js initialized with orange theme');
}

// Initialize Particles.js when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure Particles.js library is fully loaded
  setTimeout(initParticlesJS, 100);
});

// ============================================
// 30. TIMELINE ANIMATIONS
// ============================================
const timelineAnimation = {
  init() {
    this.observeTimelineItems();
    this.animateTimelineProgress();
  },
  
  observeTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Force reveal all timeline items after a short delay
    setTimeout(() => {
      timelineItems.forEach((item, index) => {
        item.classList.add('revealed');
        this.animateTimelineNode(item);
      });
    }, 500);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation for timeline items
          setTimeout(() => {
            entry.target.classList.add('revealed');
            this.animateTimelineNode(entry.target);
          }, index * 200);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  },
  
  animateTimelineNode(timelineItem) {
    const node = timelineItem.querySelector('.timeline-node');
    if (node) {
      // Add pulse animation to the node
      node.style.animation = 'timelineNodePulse 0.6s ease-out';
    }
  },
  
  animateTimelineProgress() {
    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) {
      // Animate the timeline line progress
      setTimeout(() => {
        timelineLine.classList.add('animate');
      }, 1000);
    }
  }
};

// Timeline node pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes timelineNodePulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      box-shadow: 0 0 0 10px rgba(245, 158, 11, 0.3);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
    }
  }
`;
document.head.appendChild(style);

// Initialize timeline animations
document.addEventListener('DOMContentLoaded', () => {
  timelineAnimation.init();
  console.log('✅ Timeline animations initialized');
});

// ============================================
// END OF PORTFOLIO JAVASCRIPT
// ============================================
