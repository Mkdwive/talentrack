let lenisInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavbarScroll();
    initTalentSlider();
    initBackToTop();
});

/**
 * Lenis Smooth Scrolling Setup
 */
function initSmoothScroll() {
    if (typeof Lenis === 'undefined') return;

    lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false
    });

    function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth Anchor Scrolling with 80px sticky header compensation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#!') return;

            // Let Bootstrap handle tabs, pills, collapses
            if (this.getAttribute('data-bs-toggle') || this.getAttribute('data-bs-target')) {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                lenisInstance.scrollTo(target, {
                    offset: -80,
                    duration: 1.2
                });
            }
        });
    });
}

/**
 * Navbar elevation & backdrop effect on scroll
 */
function initNavbarScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = (scrollY) => {
        const y = typeof scrollY === 'number' ? scrollY : window.scrollY;
        if (y > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    if (lenisInstance) {
        lenisInstance.on('scroll', ({ scroll }) => handleScroll(scroll));
    } else {
        window.addEventListener('scroll', () => handleScroll(window.scrollY), { passive: true });
    }
    handleScroll(window.scrollY);
}

/**
 * Talent Carousel / Slider with Swiper.js
 */
function initTalentSlider() {
    const swiperEl = document.getElementById('talentSwiper');
    if (!swiperEl || typeof Swiper === 'undefined') return;

    new Swiper(swiperEl, {
        slidesPerView: 1.8,
        spaceBetween: 12,
        loop: true,
        speed: 750,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            prevEl: '#talentPrevBtn',
            nextEl: '#talentNextBtn'
        },
        breakpoints: {
            480: {
                slidesPerView: 2.2,
                spaceBetween: 14
            },
            640: {
                slidesPerView: 2.8,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 16
            },
            992: {
                slidesPerView: 4.8,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
}

/**
 * Back to Top Button with Lenis Smooth Scrolling
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    const toggleBackToTop = (scrollY) => {
        const y = typeof scrollY === 'number' ? scrollY : window.scrollY;
        if (y > 350) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    if (lenisInstance) {
        lenisInstance.on('scroll', ({ scroll }) => toggleBackToTop(scroll));
    } else {
        window.addEventListener('scroll', () => toggleBackToTop(window.scrollY), { passive: true });
    }
    toggleBackToTop(window.scrollY);

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}


