/* ==========================================================================
   Accessibility
   ========================================================================== */

/**
 * Accessibility Module
 * Manages reduced-motion behavior checks and enhances tab focus tracking.
 */
const Accessibility = (() => {
    function init() {
        // Detect prefers-reduced-motion and apply helper class to document root
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.documentElement.classList.add('reduced-motion');
        }

        // Track keyboard navigation to render outlines only when user is tabbing
        setupKeyboardFocus();
    }

    function setupKeyboardFocus() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('user-is-tabbing');
            }
        });

        window.addEventListener('mousedown', () => {
            document.body.classList.remove('user-is-tabbing');
        });
    }

    return { init };
})();
