/* ==========================================================================
   JavaScript Initialisation
   ========================================================================== */

/**
 * App Initializer
 * Coordinates module activation once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    Accessibility.init();
    Navigation.init();
    Animations.init();
});
