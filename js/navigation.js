/* ==========================================================================
   Navigation Logic
   ========================================================================== */

/**
 * Navigation Module
 * Controls mobile menu drawers, smooth navigation transitions, and active highlighting.
 */
const Navigation = (() => {
    let menuBtn, closeBtn, drawer, drawerContent, navLinks, sections, activeObserver;

    function init() {
        // Query navigation and trigger elements
        menuBtn = document.getElementById('menu-btn');
        closeBtn = document.getElementById('close-btn');
        drawer = document.getElementById('drawer');
        drawerContent = drawer ? drawer.querySelector('div') : null;
        navLinks = document.querySelectorAll('.nav-link');
        sections = document.querySelectorAll('section[id]');

        // Setup click listeners for mobile navigation drawer
        if (menuBtn && closeBtn && drawer) {
            menuBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            drawer.addEventListener('click', (e) => {
                if (e.target === drawer) closeMenu();
            });
        }

        // Close mobile drawer when clicking anchor links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Initialize intersection observer for highligting links
        setupActiveObserver();
    }

    function openMenu() {
        if (!drawer || !drawerContent) return;
        drawer.classList.remove('hidden');
        setTimeout(() => {
            drawer.classList.remove('opacity-0');
            drawerContent.classList.remove('translate-x-full');
        }, 10);
    }

    function closeMenu() {
        if (!drawer || !drawerContent) return;
        drawer.classList.add('opacity-0');
        drawerContent.classList.add('translate-x-full');
        setTimeout(() => {
            drawer.classList.add('hidden');
        }, 300);
    }

    function setupActiveObserver() {
        const activeObserverOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Focused in middle-upper viewport
            threshold: 0
        };

        activeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${activeId}`) {
                            link.classList.add('bg-primary-container', 'text-on-primary-container');
                            link.classList.remove('text-text-secondary');
                        } else {
                            link.classList.remove('bg-primary-container', 'text-on-primary-container');
                            link.classList.add('text-text-secondary');
                        }
                    });
                }
            });
        }, activeObserverOptions);

        sections.forEach(sec => activeObserver.observe(sec));
    }

    return { init };
})();
