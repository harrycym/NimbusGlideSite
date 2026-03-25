# Master Prompt for Claude Terminal: Wispr Flow Alternative

*Please copy everything below the line and paste it into Claude Terminal to build the site in one shot.*

---

**Objective:**
I need you to build an ultra-premium, Apple-like landing page for a voice-to-text AI application similar to Wispr Flow. The site must be built purely with HTML, Vanilla CSS, and Vanilla JavaScript (no Tailwind, no React). It must be clean, lack any jank, and be highly optimized for conversion.

**Please create three files:** `index.html`, `styles.css`, and `app.js` in the current working directory.

### Requirements:

**1. `index.html` Structure:**
- **Navigation:** A minimalist, glassmorphic sticky navigation bar with a logo text on the left and a prominent, high-contrast 'Download' button on the right.
- **Hero Section:** A declarative, high-conversion section with massive, bold typography (e.g., "Speak. We'll format the rest.") and a floating, interactive-looking 'Dictation Pill' UI element that simulates the product in action.
- **Social Proof:** A 'Trusted By Professionals At' section using the following real company logo SVGs loaded directly from their URLs. Render them in a horizontal scrolling marquee row, desaturated/white tinted with `filter: brightness(0) invert(1)` so they appear monochrome on the dark background. Use ALL of the following logos:
  - Notion: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/69b278e72764b15a5312517c_notion-lumon.svg`
  - Amazon: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/6834ba4ae4bfda8858fae910_Amazon_logo%201.svg`
  - NVIDIA: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68850e2cf5f493b2bb7e7cfc_nvidia-v4.svg`
  - Vercel: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68cd489e5cc5b3b63d17259a_vercel-logo1.svg`
  - Replit: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68d282cf6db9e65365e93c86_replit-lumen-v2.svg`
  - Warp: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/690a52550f741606c7e2c77a_warp-lumen.svg`
  - Rivian: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/696006ee1cc34cfd31c5a197_rivian-lumon.svg`
  - Substack: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f0aaace6817d9ec9c5117_substack-lumon.svg`
  - Clay: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/690a5985b1c1332c33a609a8_clay-lumen2.svg`
  - Mercury: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f1210efd813db213a4714_mercury-lumon.svg`
  - Groupon: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f1376ce57025556d25a77_groupon-lumon-v3.svg`
  - Lovable: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68875c8ba8908e8964583de6_lovable-v2.svg`
  - Menlo Ventures: `https://cdn.prod.website-files.com/682fa12727f78b943ed45584/6885091bff23fbbaead4d68f_menlo%20(2).svg`
  - Intercom: `https://www.granola.ai/customerLogos/intercom.svg`
  - Ramp: `https://www.granola.ai/customerLogos/ramp.svg`
  - Linear: `https://www.granola.ai/customerLogos/linear.svg`
  - Brex: `https://www.granola.ai/customerLogos/brex.svg`
- **Side-by-Side Speed Test Simulator:** An interactive section displaying two terminal or text-box windows side-by-side ("Your App" vs "Wispr Flow"). It should animate a typing race of the same paragraph where "Your App" drops the text in essentially instantaneously (~0.1s) while "Wispr Flow" types it out quickly but noticeably slower (~0.8s). The animation should be realistic—Wispr Flow is fast, but Your App is near-instantaneous.
- **Features (Bento Box):** A 'Bento Box' grid layout showcasing core benefits (e.g., "Removes filler words automatically", "Context-aware corrections", "3x faster than typing").
- **Footer/CTA:** A final, high-contrast Call-to-Action section to compel the user to download.

**2. `styles.css` Specifications:**
- **Typography:** Use clean, system-level fonts (`-apple-system, BlinkMacSystemFont, "Inter", "San Francisco", sans-serif`).
- **Aesthetic:** Implement a pure dark mode aesthetic (`background: #000` or `#0A0A0A`, text: `#FFF`, subtle borders/separators: `#333`).
- **Whitespace:** Extensive use of padding and margin to reduce cognitive load and draw attention to the text (e.g., `padding: 120px 20px`).
- **Effects:** Heavy use of Glassmorphism for the floating pill and navbar (`backdrop-filter: blur(24px); background: rgba(255, 255, 255, 0.05);`).
- **Polished Buttons:** Smooth hover states (`transition: all 0.3s ease`), subtle scaling (`transform: scale(1.02)`), and glowing drop-shadows on primary buttons.
- **Variables:** Use CSS Variables (`:root`) for easy theme and primary color adjustments.

**3. `app.js` Specifications:**
- **Scroll Animations:** Implement an `IntersectionObserver` to add a `visible` class to elements as they scroll into view, triggering seamless CSS fade-up animations.
- **Micro-interactions:** Add an interactive event listener to the 'Dictation Pill' in the hero section to simulate audio waves or typing when hovered or clicked.

**4. Code Quality & Verification:**
- Ensure the code is absolutely pristine and bug-free. Please note that I will be using Gemini 3.11 inside Antigravity to rigorously check and verify your code afterwards, so there is no room for error.

Please generate the complete, production-ready, highly polished code directly into the respective files.
