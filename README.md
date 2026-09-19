# Nishant Poudel — Developer Portfolio

A modern, interactive developer portfolio built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and **Lucide React**. Dark-first, responsive, and powered by JavaScript throughout.

## Quick start

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # oxlint checks
```

## Structure

```
src/
├── components/    # reusable UI (Navbar, Terminal, ProjectCard, SocialLinks, …)
├── sections/      # page sections (Hero, About, Skills, Projects, GitHub, Journey, Contact)
├── data/          # all editable content — projects, skills, social links, site info
├── hooks/         # useTheme, useActiveSection, useTypewriter, useRotatingText
├── utils/         # helpers
├── App.jsx        # composition
└── main.jsx
```

## Customising content

Almost everything lives in `src/data/`:

- `site.js` — name, email, URLs, CV path, nav links
- `projects.js` — project cards, tech, features, filters
- `skills.js` — skill categories and levels
- `socialLinks.js` — social accounts. **To add a new account** (Instagram, Facebook, TikTok, etc.), add one entry here; pick an icon from `src/components/icons/BrandIcons.jsx` or Lucide, and the whole site updates. Empty `url` renders a muted "coming soon" badge — no fake links.

## CV

The **Download CV** button points to `/cv/Nishant-Poudel-CV.pdf`. Replace that file with your real CV (see `public/cv/README.md`).

## Notable features

- Animated hero with a live rotating role title and auto-typing terminal visual
- Working interactive terminal (`#terminal`) with `help`, `about`, `skills`, `projects`, `contact`, `clear` and more
- Project filtering + modal details, skill category filters, animated counters
- Live GitHub repos via the GitHub API with a graceful offline fallback
- Dark/light mode (persisted in `localStorage`), custom cursor, scroll progress, scroll-spy navbar, toasts, form validation
- Respects `prefers-reduced-motion`