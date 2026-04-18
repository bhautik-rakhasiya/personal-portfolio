<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&weight=700&size=40&duration=4000&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&height=80&lines=Bhautik+Rakhasiya;Full+Stack+Developer;Portfolio+Website" alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-BB4BFF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="#-code-quality"><img src="https://img.shields.io/badge/Prettier-3-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" /></a>
  <a href="#-code-quality"><img src="https://img.shields.io/badge/Husky-9-000000?style=for-the-badge&logo=husky&logoColor=white" alt="Husky" /></a>
</p>

<p align="center">
  A modern, animated, and fully responsive developer portfolio built with React 19, Tailwind CSS v4, and Framer Motion.<br/>
  Multi-page SPA with lazy-loaded routes, interactive particle background, custom cursor, smooth page transitions, and full SEO support.
</p>

<p align="center">
  <a href="https://bhautikrakhasiya.vercel.app">🌐 Live Demo</a> &nbsp;•&nbsp;
  <a href="https://linkedin.com/in/bhautik-rakhasiya">💼 LinkedIn</a> &nbsp;•&nbsp;
  <a href="https://github.com/bhautik-rakhasiya">🐙 GitHub</a>
</p>

---

## 📸 Preview

| Page | Sections |
|------|----------|
| **Home** `/` | Hero (typewriter + CTA), About (bio + key facts + highlights), Skills (filterable grid) |
| **Projects** `/projects` | Project cards with hover overlay, tech tags, live demo & source links |
| **Experience** `/experience` | Professional timeline + Education cards with CGPA |
| **Contact** `/contact` | Contact form (Web3Forms), email/phone/location info, social links, "Open to Opportunities" card |

---

## ✨ Features

### UI & Animations
- **Animated Page Transitions** — Framer Motion `AnimatePresence` with `mode="wait"` between routes
- **Interactive Particle Background** — Canvas-based particle system with mouse interaction
- **Custom Cursor** — Animated dot + ring cursor with hover detection (desktop only)
- **Scroll Reveal Animations** — Elements animate in as they enter the viewport
- **Typewriter Effect** — Rotating job titles in the Hero section
- **Animated Stats** — CountUp numbers triggered on scroll with `react-intersection-observer`
- **Hover Effects** — Scale, lift, glow, and border highlight on cards and buttons

### Pages & Sections
- **Multi-Page SPA** — 4 routes with React Router v7 and `AnimatePresence`
- **About Section** — Detailed bio, key facts grid, skill highlights, "Show more / Show less" on mobile
- **Filterable Skills Grid** — Category tabs (All / Frontend / Backend / Cloud / Tools) with animated layout transitions
- **Project Cards** — Hover overlay with live demo / source links, tech tag badges
- **Experience Timeline** — Alternating timeline layout with role, company, duration, and tech tags
- **Education Cards** — Degree, institution, CGPA, and key academic highlights
- **Contact Form** — Powered by [Web3Forms](https://web3forms.com), with sending/success/error states
- **"Open to Opportunities" Card** — Checklist of engagement types (full-time / freelance / startup)

### Developer Experience
- **Code Splitting** — All pages lazy-loaded via `React.lazy` + `Suspense`
- **Prettier** — Auto-formatting with consistent rules (single quotes, 2-space indent, 100-char width, LF line endings)
- **Husky + lint-staged** — Pre-commit hook runs Prettier only on staged files
- **Centralized Data** — All personal content lives in `src/data/index.js`; no scattered hardcoding

### SEO & Meta
- **Open Graph tags** — Rich previews on LinkedIn, WhatsApp, and Facebook
- **Twitter Card** — `summary_large_image` for X/Twitter shares
- **JSON-LD Structured Data** — `Person` schema for Google rich results
- **Canonical URL** — Prevents duplicate content indexing
- **Targeted keywords** — Name, role, tech stack, location, and employer

---

## 🛠 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 19 |
| **Build Tool** | Vite | 7 |
| **Styling** | Tailwind CSS (`@tailwindcss/vite` plugin) | 4 |
| **Routing** | React Router DOM | 7 |
| **Animations** | Framer Motion | 12 |
| **Icons** | React Icons (Font Awesome + Simple Icons) | 5 |
| **Form** | Web3Forms API | — |
| **Utilities** | react-countup, react-intersection-observer | — |
| **Formatter** | Prettier | 3 |
| **Git Hooks** | Husky + lint-staged | 9 / 16 |
| **Language** | JavaScript (ES Modules) | — |

---

## 📁 Project Structure

```
personal-prtfolio/
├── public/
│   ├── favicon.svg              # Site favicon (SVG logo)
│   ├── Resume_FS.pdf            # Downloadable resume
│   └── images/                  # Project screenshots & profile photos
│       ├── profile.jpg
│       ├── og-logo.png          # OG / Twitter Card image (1200×630)
│       ├── banking-portal.png
│       ├── livestreaming.png
│       └── society-management.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.jsx      # Animated cursor (desktop)
│   │   │   ├── Loader.jsx            # Full-screen loading screen
│   │   │   ├── Logo.jsx              # SVG "BR" brand logo
│   │   │   ├── PageTransition.jsx    # Framer Motion page wrapper
│   │   │   └── ParticlesBackground.jsx # Canvas particle system
│   │   ├── layout/
│   │   │   ├── Footer.jsx            # Footer with links, socials, scroll-to-top
│   │   │   ├── Layout.jsx            # Navbar + main + footer wrapper
│   │   │   └── Navbar.jsx            # Sticky nav with active route highlighting
│   │   └── ui/
│   │       ├── AnimatedSection.jsx   # Scroll-reveal section wrapper
│   │       └── SectionHeader.jsx     # Reusable subtitle + title + description header
│   ├── data/
│   │   └── index.js              # ⭐ All personal data (bio, skills, projects, etc.)
│   ├── hooks/                    # Custom React hooks
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero + About + Skills
│   │   ├── ProjectsPage.jsx      # Project showcase with page hero
│   │   ├── ExperiencePage.jsx    # Timeline + Education with page hero
│   │   └── ContactPage.jsx       # Contact form + info (no redundant hero)
│   ├── sections/
│   │   ├── Hero.jsx              # Landing hero with typewriter + CTA buttons
│   │   ├── About.jsx             # Bio, key facts, highlights, mobile expand/collapse
│   │   ├── Skills.jsx            # Filterable skills grid with category tabs
│   │   ├── Projects.jsx          # Project cards with hover overlay
│   │   ├── Experience.jsx        # Professional experience timeline
│   │   ├── Education.jsx         # Education cards
│   │   └── Contact.jsx           # Contact form + info + social links
│   ├── App.jsx                   # Router, lazy loading, AnimatePresence, global loader
│   ├── main.jsx                  # React root entry point
│   └── index.css                 # Tailwind v4 imports + custom theme + utilities
├── .husky/
│   └── pre-commit                # Runs lint-staged before every commit
├── .prettierrc                   # Prettier formatting rules
├── .prettierignore               # Files excluded from formatting
├── index.html                    # HTML entry + full SEO meta tags
├── vite.config.js                # Vite + React + Tailwind plugins
└── package.json                  # Scripts, dependencies, lint-staged config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhautik-rakhasiya/personal-prtfolio.git
cd personal-prtfolio

# 2. Install dependencies (also sets up Husky git hooks automatically)
npm install

# 3. Start the development server
npm run dev
```

App runs at **http://localhost:5173**

### Build & Preview

```bash
# Build optimised production bundle → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run format` | Auto-format all `src/` files with Prettier |
| `npm run format:check` | Check formatting without writing (CI-safe) |
| `npm run prepare` | Install Husky git hooks (runs automatically on `npm install`) |

---

## 🎨 Customisation

All personal data is centralised in **`src/data/index.js`**. Edit that file to make this portfolio your own — no need to touch component code.

| Export | What to update |
|--------|---------------|
| `personalInfo` | Name, tagline, rotating titles, email, phone, location, social links, resume link, photo paths |
| `navLinks` | Navigation routes and labels |
| `aboutData` | Bio paragraphs, key highlights, stats |
| `skillsData` | Skill name, icon, color, category (Frontend / Backend / Cloud / Tools) |
| `experienceData` | Company, role, period, bullet points, tech tags |
| `projectsData` | Title, description, screenshot, tech tags, live demo & source links |
| `educationData` | Degree, institution, year, CGPA, highlights |
| `contactData` | Email and phone shown in the contact section |
| `footerData` | Tagline, quick links, services list |

### Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) (free tier, no backend needed).

1. Sign up at [web3forms.com](https://web3forms.com) and get your **Access Key**
2. Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. The form in `src/sections/Contact.jsx` already reads `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`.

### OG / Social Preview Image

The Open Graph and Twitter Card image points to `/images/og-logo.png`.  
Add your logo as a **1200×630 PNG** at `public/images/og-logo.png`.

### Updating the Deployed URL

After deploying, replace `https://bhautik-rakhasiya.vercel.app/` in `index.html` with your actual domain — it appears in `canonical`, `og:url`, `twitter:url`, and the JSON-LD structured data.

---

## 🔍 SEO

The following meta tags are configured in `index.html`:

| Tag | Purpose |
|-----|---------|
| `<title>` | Keyword-rich page title |
| `meta description` | Search result snippet (under 160 chars) |
| `meta keywords` | Name, role, stack, location, employer |
| `canonical` | Prevents duplicate content indexing |
| `og:*` | Rich previews on LinkedIn, WhatsApp, Facebook |
| `twitter:card` | `summary_large_image` for X/Twitter |
| `application/ld+json` | `Person` schema for Google rich results |

---

## 🔧 Code Quality

### Prettier

Formatting rules in `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5",
  "endOfLine": "lf"
}
```

### Pre-commit Hook (Husky + lint-staged)

Every `git commit` automatically runs Prettier on staged files only:

```
git commit → Husky pre-commit → lint-staged → prettier --write (staged files) → commit
```

Configured in `package.json`:

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": ["prettier --write"],
  "src/**/*.{css,json}": ["prettier --write"]
}
```

---

## 🌐 Deployment

This is a static SPA — deploy to any static hosting provider.

| Platform | Steps |
|----------|-------|
| **Vercel** | Connect GitHub repo → framework preset "Vite" → auto deploys on push |
| **Netlify** | Build command: `npm run build` · Publish directory: `dist` |
| **GitHub Pages** | Build `dist/` and push, or use `gh-pages` package |

> **SPA routing note:** Configure your host to redirect all routes to `index.html`. Vercel and Netlify handle this automatically with their Vite presets.

---

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Designed & built by <strong>Bhautik Rakhasiya</strong><br/>
  <a href="https://linkedin.com/in/bhautik-rakhasiya">LinkedIn</a> &nbsp;•&nbsp;
  <a href="https://github.com/bhautik-rakhasiya">GitHub</a> &nbsp;•&nbsp;
  <a href="mailto:bhautikrakhasiya108@gmail.com">Email</a>
</p>


<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-BB4BFF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
</p>

<p align="center">
  A modern, animated, and fully responsive developer portfolio built with React 19, Tailwind CSS v4, and Framer Motion.<br/>
  Features multi-page routing, lazy-loaded pages, interactive particle background, custom cursor, and smooth page transitions.
</p>

---

## 📸 Preview

| Home | Projects | Experience | Contact |
|------|----------|------------|---------|
| Hero + About + Skills | Detailed project cards | Timeline + Education | Form + Contact info |

> **Live Demo:** _Coming soon_ <!-- Replace with your deployed URL -->

---

## ✨ Features

- **Multi-Page SPA** — 4 pages with React Router v7 and animated route transitions
- **Tailwind CSS v4** — Utility-first styling with custom theme (colors, fonts, animations)
- **Framer Motion Animations** — Page transitions, scroll reveals, hover effects, layout animations
- **Code Splitting** — Lazy-loaded pages with `React.lazy` + `Suspense` for fast initial load
- **Interactive Particle Background** — Canvas-based particle system with mouse interaction
- **Custom Cursor** — Animated dot + ring cursor with hover detection (desktop only)
- **Responsive Design** — Mobile-first, works seamlessly on all screen sizes
- **TypeWriter Effect** — Rotating titles in the hero section
- **Animated Stats** — CountUp numbers triggered on scroll
- **Filterable Skills** — Category tabs with animated progress bars
- **Expandable Project Cards** — Hover overlay with live demo / source links + expandable details
- **Timeline Layout** — Alternating experience timeline with tech tags
- **Contact Form** — Styled form with validation states and send animation
- **Scroll to Top** — Floating button in footer
- **Dark Theme** — Fully dark UI with gradient accents

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, Vite 7 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| **Routing** | React Router DOM v7 |
| **Animations** | Framer Motion 12 |
| **Icons** | React Icons (Font Awesome + Simple Icons) |
| **Utilities** | react-countup, react-intersection-observer, react-scroll |
| **Language** | JavaScript (ES Modules) |

---

## 📁 Project Structure

```
personal-prtfolio/
├── public/
│   └── images/              # Profile photo & gallery images
├── src/
│   ├── assets/              # Static assets (images, fonts)
│   ├── components/
│   │   ├── common/          # Shared components
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── PageTransition.jsx
│   │   │   └── ParticlesBackground.jsx
│   │   ├── layout/          # Layout wrapper components
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/              # Reusable UI primitives
│   │       ├── AnimatedSection.jsx
│   │       └── SectionHeader.jsx
│   ├── data/
│   │   └── index.js         # Centralized data (personal info, skills, projects, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route-level page components
│   │   ├── HomePage.jsx     # Hero + About + Skills
│   │   ├── ProjectsPage.jsx # Detailed project showcase
│   │   ├── ExperiencePage.jsx # Timeline + Education
│   │   └── ContactPage.jsx  # Contact form + info
│   ├── sections/            # Page section components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Router setup, lazy loading, global providers
│   ├── main.jsx             # React root entry point
│   └── index.css            # Tailwind imports + custom theme + utilities
├── index.html               # HTML entry with Google Fonts
├── vite.config.js           # Vite + React + Tailwind plugins
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/bhautikrakhasiya/personal-prtfolio.git
cd personal-prtfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📄 Pages & Routing

| Route | Page | Sections |
|-------|------|----------|
| `/` | Home | Hero (TypeWriter + profile), About (photo gallery + stats), Skills (filterable grid) |
| `/projects` | Projects | Detailed project cards with hover overlay, expandable descriptions, tech tags |
| `/experience` | Experience & Education | Professional timeline + education cards with CGPA |
| `/contact` | Contact | Contact form, email/phone/location info, social links |

---

## 🎨 Customization

All personal data is centralized in a single file — **`src/data/index.js`**. Update it to make the portfolio your own:

| Export | What to update |
|--------|---------------|
| `personalInfo` | Name, tagline, titles, email, phone, location, social links, photo paths |
| `navLinks` | Navigation routes and labels |
| `aboutData` | Bio paragraphs, highlights, stats |
| `skillsData` | Skills with name, level, icon, color, category |
| `experienceData` | Company, role, period, description, technologies |
| `projectsData` | Project title, description, long description, image, tags, links |
| `educationData` | Degree, institution, year, CGPA, highlights |
| `contactData` | Contact details |
| `footerData` | Footer tagline, quick links, services |

### Adding Your Photos

Replace the placeholder SVGs in `public/images/` with your actual photos:

```
public/images/
├── profile.svg  → Your profile photo (square, ~400×400)
├── photo-1.svg  → Gallery photo 1
├── photo-2.svg  → Gallery photo 2
├── photo-3.svg  → Gallery photo 3
└── photo-4.svg  → Gallery photo 4
```

Then update the file extensions in `personalInfo.profilePhoto` and `personalInfo.photos` inside `src/data/index.js`.

---

## 🌐 Deployment

This project works with any static hosting provider:

| Platform | Command |
|----------|---------|
| **Vercel** | `vercel --prod` or connect your GitHub repo |
| **Netlify** | Set build command to `npm run build` and publish directory to `dist` |
| **GitHub Pages** | Use `vite-plugin-gh-pages` or deploy the `dist` folder |

> **Note:** Since this is a SPA with client-side routing, configure your hosting to redirect all routes to `index.html` (Vercel and Netlify handle this automatically with their framework presets).

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |

---

## 🤝 Contributing

This is a personal portfolio project, but if you find it useful as a template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Designed & Built by <strong>Bhautik Rakhasiya</strong><br/>
  <a href="https://linkedin.com/in/bhautikrakhasiya">LinkedIn</a> •
  <a href="https://github.com/bhautikrakhasiya">GitHub</a>
</p>
