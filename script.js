/**
 * ShokherSrity - Premium Wedding Photography
 * Main JavaScript File
 */

// ============================================
// PHOTO CATALOG - All photos from categorized folders (sorted numerically)
// ============================================

// Utility: extract number from filename and sort
function numericSortFiles(files) {
    return [...files].sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
        if (numA !== numB) return numA - numB;
        // If same number, shorter name first (e.g. "1.webp" before "001.webp")
        return a.length - b.length;
    });
}

const PHOTO_CATALOG = {
    wedding: {
        label: 'Wedding',
        folder: 'attached_assets/Wedding Photoshooot',
        files: numericSortFiles(['1.webp','02.webp','03.webp','04.webp','4.webp','6.webp','7.webp','07.webp','8.webp','08.webp','9.webp','11.webp','13.webp','14.webp','001.webp','014.webp','15.webp','16.webp','17.webp','18.webp','19.webp','20.webp','020.webp','21.webp','021.webp','22.webp','022.webp','26.webp','27.webp','28.webp','29.webp','31.webp'])
    },
    bride: {
        label: 'Bride',
        folder: 'attached_assets/Bride Photoshoot',
        files: numericSortFiles(['01.webp','02.webp','03.webp','04.webp','05.webp','06.webp','07.webp','0003.webp','0004.webp','0010.webp','003.webp','004.webp','007.webp','010.webp','012.webp','013.webp','014.webp','015.webp','016.webp','019.webp','3.webp','4.webp','5.webp','6.webp','7.webp','9.webp','10.webp','11.webp','12.webp','13.webp','14.webp','15.webp','16.webp','17.webp','18.webp','19.webp','23.webp','27.webp','34.webp','36.webp','38.webp','40.webp','41.webp'])
    },
    reception: {
        label: 'Reception',
        folder: 'attached_assets/Reception',
        files: numericSortFiles(['0003.webp','003.webp','03.webp','04.webp','08.webp','011.webp','012.webp','017.webp','1.webp','2.webp','3.webp','4.webp','5.webp','7.webp','8.webp','9.webp','11.webp','12.webp','14.webp','15.webp','16.webp','17.webp','19.webp'])
    },
    engagement: {
        label: 'Engagement',
        folder: 'attached_assets/Engegment Photoshoot',
        files: numericSortFiles(['01.webp','04.webp','05.webp','07.webp','1.webp','2.webp','3.webp','4.webp','5.webp','6.webp','7.webp','8.webp','9.webp','12.webp','13.webp','16.webp'])
    },
    babyshower: {
        label: 'Baby Shower',
        folder: 'attached_assets/Baby Shower',
        files: numericSortFiles(['0003.webp','003.webp','01.webp','010.webp','011.webp','02.webp','03.webp','04.webp','10.webp','11.webp','13.webp','16.webp','19.webp','2.webp','20.webp','3.webp','5.webp','7.webp','8.webp','9.webp'])
    },
    baby: {
        label: 'Baby Photoshoot',
        folder: 'attached_assets/Baby Photoshoot',
        files: numericSortFiles(['015.webp','016.webp','017.webp','03.webp','04.webp','05.webp','09.webp','1.webp','11.webp','13.webp','14.webp','15.webp','16.webp','17.webp','19.webp','2.webp','3.webp','4.webp','5.webp','7.webp','8.webp','9.webp'])
    }
};

// ============================================
// DYNAMIC COPYRIGHT YEAR
// ============================================
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('[data-copyright-year], .copyright-year');
    copyrightElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!menuBtn || !navLinks) return;
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// STAGGER ANIMATION
// ============================================
function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('.stagger-children');
    if (staggerContainers.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    staggerContainers.forEach(el => observer.observe(el));
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (statNumbers.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                const suffix = entry.target.dataset.suffix || '';
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        entry.target.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current) + suffix;
                    }
                }, 16);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// SHUFFLE ARRAY UTILITY
// ============================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================
// BUILD GALLERY GRID (gallery.html)
// ============================================
function buildGalleryGrid() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    // Build all photo items from all categories
    let allItems = [];
    Object.keys(PHOTO_CATALOG).forEach(catKey => {
        const cat = PHOTO_CATALOG[catKey];
        cat.files.forEach(file => {
            allItems.push({
                src: cat.folder + '/' + file,
                category: catKey,
                label: cat.label,
                title: cat.label
            });
        });
    });

    // Shuffle for "all" view
    allItems = shuffleArray(allItems);

    // Create masonry items with lazy placeholders
    allItems.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'masonry-item';
        div.dataset.category = item.category;
        div.innerHTML = `
            <div class="img-placeholder"></div>
            <img data-src="${item.src}" alt="${item.label} Photography" decoding="async">
            <div class="masonry-overlay">
                <span class="masonry-category">${item.label}</span>
                <h4 class="masonry-title">${item.title}</h4>
            </div>
            <div class="masonry-zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            </div>
        `;
        grid.appendChild(div);
    });

    // Initialize progressive lazy loading
    initProgressiveLazyLoad();
}

// ============================================
// BUILD HOMEPAGE FEATURED SECTION
// ============================================
function buildHomepageFeatured() {
    const grid = document.getElementById('homepage-featured-grid');
    if (!grid) return;

    // Pick 2 photos from each category
    const picks = [];
    Object.keys(PHOTO_CATALOG).forEach(catKey => {
        const cat = PHOTO_CATALOG[catKey];
        const shuffled = shuffleArray(cat.files);
        const count = Math.min(2, shuffled.length);
        for (let i = 0; i < count; i++) {
            picks.push({
                src: cat.folder + '/' + shuffled[i],
                category: catKey,
                label: cat.label
            });
        }
    });

    // Shuffle the picks
    const finalPicks = shuffleArray(picks);

    finalPicks.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'featured-item';
        div.dataset.category = item.category;
        div.setAttribute('data-aos', 'fade-up');
        if (idx > 0) div.setAttribute('data-aos-delay', String(idx * 100));
        div.innerHTML = `
            <div class="img-placeholder"></div>
            <img data-src="${item.src}" alt="${item.label} Photography" decoding="async">
            <div class="featured-overlay">
                <span class="featured-category">${item.label}</span>
                <h4 class="featured-title">${item.label}</h4>
            </div>
        `;
        grid.appendChild(div);
    });

    initProgressiveLazyLoad();
}

// ============================================
// GALLERY FILTER
// ============================================
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const getGalleryItems = () => document.querySelectorAll('.masonry-item');
    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const galleryItems = getGalleryItems();
            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// LIGHTBOX (FIXED)
// ============================================
function initLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    let visibleItems = [];

    function getClickableItems() {
        return document.querySelectorAll('.masonry-item, .featured-item');
    }

    // Use event delegation for dynamically created items
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.masonry-item, .featured-item');
        if (!item) return;

        const allItems = getClickableItems();
        visibleItems = Array.from(allItems).filter(i => i.style.display !== 'none');
        currentIndex = visibleItems.indexOf(item);
        if (currentIndex === -1) currentIndex = 0;

        updateLightbox();
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
        lightboxImg.src = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function updateLightbox() {
        if (visibleItems.length === 0) return;
        const currentItem = visibleItems[currentIndex];
        const img = currentItem.querySelector('img');
        const caption = currentItem.querySelector('.masonry-title, .featured-title');

        // Use data-src for lazy images, fallback to src
        const imgSrc = img.dataset.src || img.src;
        lightboxImg.src = imgSrc;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : '';
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightbox();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % visibleItems.length;
        updateLightbox();
    }

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        switch(e.key) {
            case 'Escape': closeLightbox(); break;
            case 'ArrowLeft': prevImage(); break;
            case 'ArrowRight': nextImage(); break;
        }
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
        }
    }, { passive: true });
}

// ============================================
// RESPONSIVE HERO IMAGE SWAP
// Desktop: landscape (L.webp) | Mobile: portrait (19.webp)
// ============================================
function initResponsiveHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const landscapeImg = 'attached_assets/L.webp';
    const portraitImg = 'attached_assets/Wedding Photoshooot/19.webp';

    function swapHeroImage(isDesktop) {
        const img = isDesktop ? landscapeImg : portraitImg;
        hero.style.setProperty('--hero-bg-image', `url('${img}')`);
    }

    // Use matchMedia for responsive detection
    const mq = window.matchMedia('(min-width: 769px)');
    swapHeroImage(mq.matches);
    mq.addEventListener('change', (e) => swapHeroImage(e.matches));
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// PROGRESSIVE LAZY LOADING WITH BLUR-UP
// High-performance image loader for 150+ images
// ============================================
let _lazyObserver = null;

function initProgressiveLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]:not(.lazy-loaded)');
    if (lazyImages.length === 0) return;

    // Use IntersectionObserver for optimal performance
    if (!_lazyObserver) {
        _lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    _lazyObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '300px 0px', // Start loading 300px before entering viewport
            threshold: 0.01
        });
    }

    lazyImages.forEach(img => _lazyObserver.observe(img));
}

function loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    const tempImg = new Image();
    tempImg.decoding = 'async';

    tempImg.onload = () => {
        img.src = src;
        img.classList.add('loaded');
        img.classList.add('lazy-loaded');
        // Hide placeholder
        const placeholder = img.parentElement.querySelector('.img-placeholder');
        if (placeholder) placeholder.classList.add('hidden');
    };

    tempImg.onerror = () => {
        // Retry once after 1s
        setTimeout(() => {
            const retry = new Image();
            retry.onload = () => {
                img.src = src;
                img.classList.add('loaded');
                img.classList.add('lazy-loaded');
                const placeholder = img.parentElement.querySelector('.img-placeholder');
                if (placeholder) placeholder.classList.add('hidden');
            };
            retry.onerror = () => {
                img.classList.add('error');
                img.classList.add('loaded');
            };
            retry.src = src;
        }, 1000);
    };

    tempImg.src = src;
}

// Legacy wrapper for images that already have src set (about section, etc.)
function initImageLoading() {
    const images = document.querySelectorAll('img[src]:not([data-src]):not(.loaded):not(.lightbox-img)');
    images.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => { img.classList.add('loaded'); });
            img.addEventListener('error', () => {
                img.classList.add('error');
                img.classList.add('loaded');
            });
        }
    });
}

// ============================================
// AOS INITIALIZATION
// ============================================
function initAOS() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        disable: window.matchMedia('(pointer: coarse)').matches ? true : false
    });
}

// ============================================
// WHATSAPP BUTTON
// ============================================
function initWhatsAppButton() {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn, [data-whatsapp]');
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const phone = btn.dataset.whatsapp || '8801799334656';
            const message = btn.dataset.message || 'Hello! I would like to inquire about your wedding photography services.';
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
}

// ============================================
// INQUIRY CARDS
// ============================================
function initInquiryCards() {
    const inquiryCards = document.querySelectorAll('.inquiry-card');
    inquiryCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.inquiry || 'general';
            const phone = '8801799334656';
            let message = '';
            switch(type) {
                case 'wedding': message = 'Hello! I am interested in booking your wedding photography package.'; break;
                case 'portrait': message = 'Hello! I would like to book a portrait photography session.'; break;
                case 'event': message = 'Hello! I am interested in event photography services.'; break;
                default: message = 'Hello! I would like to inquire about your photography services.';
            }
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
}

// ============================================
// NOISE TEXTURE OVERLAY
// ============================================
function addNoiseTexture() {
    const sections = document.querySelectorAll('.hero, .testimonials, .cta-section');
    sections.forEach(section => {
        const noise = document.createElement('div');
        noise.className = 'noise-overlay';
        noise.style.cssText = `position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");opacity:0.03;pointer-events:none;z-index:1;`;
        section.style.position = 'relative';
        section.appendChild(noise);
    });
}

// ============================================
// PERFORMANCE & MOTION
// ============================================
function respectReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-fast', 'none');
        document.documentElement.style.setProperty('--transition-base', 'none');
        document.documentElement.style.setProperty('--transition-slow', 'none');
    }
}

function optimizePerformance() {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.body.classList.add('reduce-motion');
    }
}

// ============================================
// PACKAGE CALCULATOR
// ============================================
function toggleCalcOption(element) {
    element.classList.toggle('selected');
    updateCalcTotal();
}

function updateCalcTotal() {
    const selectedOptions = document.querySelectorAll('.calc-option.selected');
    let total = 0;
    selectedOptions.forEach(option => {
        total += parseInt(option.dataset.price) || 0;
    });
    const totalEl = document.getElementById('calc-total');
    if (totalEl) {
        totalEl.style.transform = 'scale(1.1)';
        totalEl.textContent = '৳' + total.toLocaleString('en-IN');
        setTimeout(() => { totalEl.style.transform = 'scale(1)'; }, 200);
    }
    const labelSpan = document.querySelector('.calc-total-label span');
    if (labelSpan) {
        if (selectedOptions.length === 0) {
            labelSpan.textContent = 'Select options above to build your package';
        } else {
            labelSpan.textContent = selectedOptions.length + ' service' + (selectedOptions.length > 1 ? 's' : '') + ' selected';
        }
    }
}

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();

    initScrollReveal();
    initStaggerAnimation();
    initStatsCounter();
    initParallax();
    initResponsiveHero();

    // Build dynamic content
    buildGalleryGrid();
    buildHomepageFeatured();

    // Gallery
    initGalleryFilter();
    initLightbox();
    initImageLoading();

    initAOS();
    initWhatsAppButton();
    initInquiryCards();
    addNoiseTexture();
    respectReducedMotion();
    optimizePerformance();

    document.body.classList.add('loaded');
});

// ============================================
// SERVICE WORKER UNREGISTRATION
// ============================================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => { registration.unregister(); });
    });
}
