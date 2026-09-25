# Methuku Lakshmi Chethana — Portfolio

A premium personal portfolio site built with **React + Vite + Tailwind CSS**, in a wine/burgundy and ivory brand identity.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`. Deploy `dist/` to any static host:
Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

- **Vercel/Netlify**: connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package).

## Updating content

All resume-sourced content (education, skills, projects, certifications, contact info,
links) lives in one place: `src/data/profile.js`. Edit that file to update the site —
no need to touch the component code.

- `public/Chethana_Resume.pdf` — the file served by the "Download Resume" button. Replace
  it (keeping the same filename, or update the `resumeFile` path in `profile.js`) when the
  resume changes.
- `src/assets/chethana-photo.jpg` — the hero portrait. Replace with a new image of the
  same filename, or update the import in `src/components/Hero/Hero.jsx`.

## GitHub section

The "Recent on GitHub" section fetches public, non-fork repositories live from the
GitHub REST API (`https://api.github.com/users/klu2300030960/repos`) in the visitor's
browser — no build step or token needed. If the API is unreachable or rate-limited, it
falls back to a link straight to the GitHub profile.

## Contact form

The contact form currently opens the visitor's email client with a pre-filled message
(via a `mailto:` link) — no backend required. To collect submissions directly instead,
wire `src/components/Contact/Contact.jsx` up to a form service such as Formspree,
Getform, or EmailJS.

## Project structure

```
src/
  assets/            portrait image
  data/profile.js    all resume content (single source of truth)
  hooks/useReveal.js scroll-reveal helper
  components/
    Navbar/  Hero/  About/  Education/  Skills/
    Projects/  Certifications/  GitHub/  Contact/  Footer/
  App.jsx
  main.jsx
  index.css
public/
  Chethana_Resume.pdf
```
