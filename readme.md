# Talentrack - India's First AI Content Marketplace

A modern, high-performance, and responsive enterprise landing page for **Talentrack** — India's premier AI content marketplace bridging cutting-edge AI generation with licensed, verified human talent.

Built with semantic HTML5, modern CSS3 design tokens, fluid typography, Bootstrap 5.3.3, Swiper 11, and Lenis inertial smooth scrolling.

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose & Architecture Rationale |
| :--- | :--- | :--- |
| **HTML5 (Semantic)** | Modern Spec | Semantic layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`) adhering to WCAG 2.1 AA accessibility and SEO best practices. |
| **CSS3 / Modern CSS** | Latest Spec | CSS Custom Properties (Design Tokens), fluid typography with `clamp()`, Flexbox, CSS Grid, Glassmorphism backdrop filters, and custom floating scrollbars. |
| **Vanilla JavaScript** | ECMAScript 6+ | Lightweight, native modular scripts handling scroll state detection, custom controls, tab synchronization, and component initialization without framework overhead. |
| **Bootstrap** | `v5.3.3` | Used for responsive layout utilities, mobile Offcanvas drawer, Collapse accordion navigation, and tabbed navigation panels (`nav-pills`). |
| **Swiper.js** | `v11.x` | Touch-enabled, hardware-accelerated carousel engine powering the continuous Talent Showcase slider with adaptive breakpoints and custom navigation buttons. |
| **Lenis** | `v1.1.18` | Physics-based smooth inertial scrolling running on a continuous `requestAnimationFrame` loop, providing ultra-fluid page scrolling and anchor navigation. |
| **Google Fonts** | Poppins | Primary brand typography loaded across weights 300, 400, 500, 600, 700, 800, and 900 for consistent, high-legibility brand presentation. |

---

## ✨ Key Features & Highlights

### 1. Sticky Glassmorphism Header & Mobile Navigation Drawer
- **Dynamic Scroll Elevation**: The navigation header is sticky (`position: sticky; top: 0`) and automatically applies a frosted glass backdrop filter (`backdrop-filter: blur(12px)`) and subtle elevation shadow once the user scrolls past 20px.
- **Mobile Offcanvas with Accordion Menus**: On tablets and mobile devices, navigation collapses into a slide-out drawer featuring expandable accordion submenus with interactive `+` / `−` indicators and active card states.
- **Gradient Border CTA**: An eye-catching pill button featuring a dual-layer 1px gradient border (`#034bb8` to `#f4242e`) with a subtle ambient hover glow.

### 2. Immersive Hero Section
- **High-Impact Visual Card**: Framed within an ultra-modern rounded container with high-contrast typography, an ambient gradient overlay, and a prominent "Request a Proposal" primary action.
- **Dynamic Fluid Heading**: Scales smoothly between mobile viewports and 4K desktop screens without awkward text wrapping or line breaks.

### 3. Explore Use Cases (Zero-Scrollbar Filter Tabs)
- **Interactive Category Switching**: Category filter pills powered by Bootstrap's tab architecture, switching between Ad Films, Social Media Content, Influencer Campaigns, E-commerce Catalogs, and Branded Content.
- **Hidden Scrollbar Swipe Experience**: Equipped with horizontal swipe affordance on mobile and tablet screens, with scrollbar display completely hidden (`scrollbar-width: none !important;` and `::-webkit-scrollbar { display: none !important; }`) for a native app feel.

### 4. Licensed AI Talent Pool (Swiper 11 Carousel)
- **Fluid Multi-Card Slider**: Displays talent profile cards (Daksh Chopra, Sheen Rawat, Syscila Sampath, Salman Shaikh, Misty, Arshi Srivastava) with image aspect ratios, gradients, and role captions.
- **Responsive Multi-Card Breakpoints**:
  - Desktop (>1200px): 6 slides
  - Laptops (992px - 1199px): 4.8 slides
  - Tablets (768px - 991px): 3.5 slides
  - Large Mobile (640px - 767px): 2.8 slides
  - Mobile (<480px): 1.8 slides
- **Custom Circular Controllers**: Dedicated Prev/Next buttons (`40px × 40px`, `#e3e8ff` background, `#034bb8` arrows) with keyboard focus support and smooth pagination.

### 5. Enterprise Compliance Orbit Section
- **Radial Orbital Illustration**: Visualizes identity consent, chain of ownership, copyright safety, campaign duration controls, commercial usage, and brand approvals around a central AI sphere.
- **Desktop SVG Geometry Alignment**: Positioned precisely along the orbital concentric rings at 12 o'clock, 2 o'clock, 4 o'clock, 6 o'clock, 8 o'clock, and 10 o'clock.
- **Professional Hover Lift & Glow**: Multi-layered ambient shadow (`rgba(3, 75, 184, 0.18)` and `rgba(16, 24, 40, 0.08)`) with delicate border shift on card hover.
- **Mobile Responsive Linear Flow**: Automatically flattens into an intuitive, sequential mobile card list with the glowing AI orb centered on smaller screens.

### 6. Lenis Smooth Scrolling Engine
- Custom inertial scrolling running at display refresh rate via `requestAnimationFrame`.
- Seamless anchor scrolling for internal links (`href^="#"`) with automated `-80px` offset compensation to avoid sticky header occlusion.

### 7. Floating Back-to-Top Navigation
- Fixed circular floating button (`44px × 44px`) in primary brand blue (`#034bb8`).
- Smooth entry and exit animations (`opacity` and `transform`) triggered when scrolling past 350px.
- Clean upward arrow SVG with zero vertical jitter on hover, transitioning smoothly back to top via Lenis.

### 8. Custom Document Scrollbar
- A custom 9px floating scrollbar with rounded tracks and hover-responsive thumb (`#a0bbf8` / `#b8ccfa`) complementing the website's brand colors.

---

## 🎨 Design System & CSS Variables

All typographic scales, color palettes, and component geometries are centralized in CSS custom properties within `:root`:

```css
:root {
    /* Centralized Typography Tokens */
    --font-family-base: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --font-family-poppins: 'Poppins', sans-serif;

    /* Brand Color Palette */
    --color-primary: #0052cc;
    --color-primary-dark: #003d99;
    --color-primary-light: #ebf3ff;
    --color-accent-purple: #6f42c1;
    --color-dark-heading: #111827;
    --color-text-body: #454b54;

    /* Fluid Typographic Scales */
    --fs-hero-title: clamp(2rem, 3.8vw + 0.5rem, 4.125rem);
    --fs-hero-sub: clamp(0.925rem, 1vw + 0.15rem, 1.1rem);
    --fs-h2: clamp(1.75rem, 3vw + 0.3rem, 2.65rem);
    --fs-h3: clamp(1.35rem, 1.02rem + 1.63vw, 3rem);
    --fs-h4: clamp(1.05rem, 0.52rem + 1.3vw, 2rem);
    --fs-body: clamp(0.925rem, 0.9vw + 0.15rem, 1.05rem);

    /* Component Geometry */
    --radius-hero: 24px;
    --radius-card: 16px;
    --radius-pill: 9999px;
}
```

---

## 📁 Directory Structure

```
talentrack-test/
├── assets/
│   ├── images/
│   │   ├── logo.svg                   # Vector SVG brand logo
│   │   ├── hero-baanner.jpg           # Hero background panoramic visual
│   │   ├── walking.jpg                # Use case showcase image
│   │   ├── daksh-chopra.jpg           # Talent card visual 1
│   │   ├── sheen-rawat.jpg            # Talent card visual 2
│   │   ├── syscila-sampath.jpg        # Talent card visual 3
│   │   ├── salman-shaikh.jpg          # Talent card visual 4
│   │   ├── misty.jpg                  # Talent card visual 5
│   │   └── arshi-srivastava.jpg       # Talent card visual 6
├── css/
│   └── style.css                      # Master stylesheet (tokens, layout, components, media queries)
├── js/
│   └── main.js                        # Core application scripts (Lenis, Swiper, Navbar, Back-to-top)
├── index.html                         # Semantic HTML5 document
└── readme.md                          # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Local Development
No build tools, bundlers, or package installations are required. All third-party libraries are delivered via reliable production CDNs (jsDelivr).

1. Clone or download the repository to your local machine.
2. Open `index.html` directly in any modern browser, or run a local development server:

```bash
# Using VS Code Live Server extension, or Python:
python -m http.server 8000

# Or with Node.js npx serve:
npx serve .
```

3. Navigate to `http://localhost:8000` in your web browser.

---

## 🌐 Browser Compatibility & Performance

- **Supported Browsers**: Chrome (88+), Safari (14+), Firefox (85+), Microsoft Edge (88+), iOS Safari (14+), Android Chrome.
- **Touch & Mobile Optimization**: Native touch swiping, `-webkit-overflow-scrolling: touch`, responsive viewports, and tap targets exceeding the 44px minimum touch recommendation.
- **Accessibility**: Semantic heading hierarchy, focusable interactive controls with visible focus rings (`:focus-visible`), and ARIA roles for screen reader navigation.
