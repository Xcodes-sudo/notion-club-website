/* ==========================================================================
   Scroll Progress
   ========================================================================== */

/**
 * Animations Module
 * Manages scroll indicators, back-to-top toggles, and scroll entrance effects.
 */
const Animations = (() => {
    let scrollProgress, backToTopBtn, prefersReducedMotion, revealObserver;

    function init() {
        scrollProgress = document.getElementById('scroll-progress');
        backToTopBtn = document.getElementById('back-to-top');
        prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        /* ==========================================================================
           Back To Top
           ========================================================================== */
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', scrollToTop);
        }

        /* ==========================================================================
           Intersection Observer (Entrance Reveals)
           ========================================================================== */
        setupRevealObserver();
    }

    function handleScroll() {
        // Calculate scroll percentage and update the progress indicator
        if (scrollProgress) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                const scrollPercent = (window.scrollY / scrollHeight) * 100;
                scrollProgress.style.width = `${scrollPercent}%`;
            }
        }

        // Show back-to-top button when scrolled past 300px
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    }

    function setupRevealObserver() {
        const targetElements = document.querySelectorAll('section > div');

        if (prefersReducedMotion) {
            // Remove entrance transitions and show sections immediately
            targetElements.forEach(el => {
                el.classList.add('opacity-100', 'translate-y-0');
            });
        } else {
            const revealObserverOptions = {
                threshold: 0.05,
                rootMargin: '0px 0px -50px 0px'
            };

            revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, revealObserverOptions);

            targetElements.forEach(el => {
                el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
                revealObserver.observe(el);
            });
        }
    }

    return { init };
})();
