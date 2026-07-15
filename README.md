# Notion Club Website

Notion Club Website is a modern, responsive website developed to establish a professional digital presence for the Notion Club at VIT Bhopal University.

---

## Project Overview
The website serves as a digital hub to represent the club, showcase its mission, introduce leadership roles, present upcoming events, display member gallery spotlights, and facilitate student interest forms. The project highlights clean frontend practices, responsive layout structures, and accessibility standards.

---

## Features
The following features are implemented:

- **Responsive Design**: Fluid grid layouts that adapt to mobile, tablet, and desktop screens.
- **Dark Theme**: High-contrast dark styling for optimized legibility.
- **Glassmorphism UI**: Frosted-glass containers and subtle hover outlines.
- **Smooth Scrolling**: Smooth anchor transitions for site navigation.
- **Mobile Navigation Drawer**: Slide-out side menu for smaller viewports.
- **Active Navigation Highlighting**: Highlights navigation items in the menu as sections scroll into view.
- **Scroll Progress Indicator**: Horizontal bar fixed at the top of the viewport indicating scroll progress.
- **Back-to-Top Button**: Floating button that appears after scrolling past 300px to navigate back to the page header.
- **Hero Section**: Chapter introduction with call-to-actions.
- **About Section**: Core club details presented through feature cards.
- **Team Section**: Leadership structure placeholders with gradient avatar boxes.
- **Events Section**: Detailed meets and bootcamp listings with interest signups.
- **Gallery Section**: Frosted image cards showcasing project nights and coding labs.
- **Contact Section**: Communication form with proper field bindings alongside email, address, and social links.
- **Join Section**: expression of interest signup for launch alerts.
- **Accessibility features**: ARIA markers, label bindings, hidden visual icons, outline indicators for tabbing, and reduced motion settings.
- **SEO metadata**: canonical setup, favicons, OG parameters, and Twitter Cards.
- **Lazy loading**: native loading attributes on all gallery and event images.

---

## Technology Stack
The project is built using:

- **HTML5**: Semantic document structure.
- **Tailwind CSS (CDN)**: Utility styling and custom theme configuration.
- **Vanilla CSS**: Global styles, focus configurations, and animation overrides.
- **Vanilla JavaScript (ES6+)**: Custom DOM listeners and IntersectionObserver instances.
- **Google Fonts**: Inter (UI font) and JetBrains Mono (coding font labels).
- **Material Symbols**: Symbol indicators.

---

## Folder Structure
The codebase follows a modular directory layout:

```
/
│
├── index.html                  # Main HTML file containing page layout and Tailwind settings
│
├── assets/
│   └── images/
│       └── logo.jpg            # Official Notion Club logo image file
│
├── css/
│   └── styles.css              # Custom stylesheet (resets, layouts, and overrides)
│
├── js/
│   ├── accessibility.js        # Focus outlines and reduced motion controls
│   ├── navigation.js           # Mobile menu toggles and scroll highlight observers
│   ├── animations.js           # Scroll progress, top scrolls, and reveal observers
│   └── main.js                 # Entry script activating JavaScript modules
│
├── README.md                   # Project documentation manual
│
├── LICENSE                     # License terms
│
└── .gitignore                  # Git ignore definitions
```

---

## Design Philosophy
- **Modern UI & Minimalist Design**: Embodies a dark theme using space zincs, glowing boundaries, and high contrast accents.
- **Glassmorphism**: Frosted background surfaces with fine gradients.
- **Dark Theme**: Obsidian colors (`#09090B`) to maximize readability.
- **Responsive Layout**: Scaling columns from mobile grids to wide desktop viewports.
- **Accessibility**: Readable contrasts, explicit focus paths, and semantic heading tags.
- **Clean Information Hierarchy**: Transitions users from branding, through member pillars, events, and galleries, to contact forms.

---

## Accessibility
- **ARIA Integration**: Includes button descriptors (`aria-label`) and hides decorative icons (`aria-hidden="true"`) from screen readers.
- **Keyboard Navigation**: Implements `:focus-visible` styles painting Indigo focus outlines around interactive buttons, inputs, and links when keyboard-navigated.
- **Semantic HTML**: Standardizes header levels and wraps content in main semantic containers.
- **Reduced Motion Support**: Listens to browser preferences via `prefers-reduced-motion: reduce`. When active, it disables scroll reveals, cursor scale animations, and background blobs.

---

## Performance
- **Lazy Loading**: Applies `loading="lazy"` tags to images outside the immediate viewport.
- **Modular Styles & Scripts**: Code splitting separates styles, utilities, and functions.
- **Tailwind Caching**: Runs compiler payloads directly in the head.

---

## Installation
To run the project locally:

1. **Clone the Repository**:
   Clone the code files to your local workstation.
2. **Navigate into the Project Directory**:
   Open the folder in your terminal or editor.
3. **Run a Static Web Server**:
   Serve the static files using Live Server, Python's built-in server (`python -m http.server`), or any static web server:
   ```bash
   npx -y http-server -p 8085
   ```
4. **Open in a Browser**:
   Open `http://localhost:8085` in your browser.

---

## Deployment
To deploy the application to Vercel:

1. Connect your repository to a GitHub account.
2. Log in to Vercel and import your repository.
3. Choose **Other** as the framework preset (the project consists of static files).
4. Deploy the application.

---

## Future Improvements
Proposed future updates:
- **Dynamic Event Management**: Connect a headless CMS to update event schedules.
- **Backend Database Integration**: Link contact forms to a serverless backend to store sign-up data.
- **Member Authentication**: Implement a secure member portal dashboard.
- **Event Registration System**: Allow direct event registration with email confirmation alerts.

---

## Author
- **Author**: Adityesh Raghav

---


