<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&weight=700&size=40&duration=4000&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&height=80&lines=Bhautik+Rakhasiya;Full+Stack+Developer;Portfolio+Website" alt="Typing SVG" />
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
