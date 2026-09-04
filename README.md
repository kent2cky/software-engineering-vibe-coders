# Smartcore Cloud Landing Page - React Project

A modern React landing page for Smartcore Cloud Solutions, converted from static HTML using Vite.

## Project Structure

```
├── src/
│   ├── components/          # React components (Hero, Curriculum, FAQ, etc.)
│   ├── styles/              # Global styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── public/                  # Static assets (images)
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── dist/                    # Production build (generated)
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Build
```bash
npm run preview
```
Preview the production build locally before deployment

## Features

- ✅ Fully responsive design
- ✅ Dark mode support (automatic based on system preferences)
- ✅ Component-based architecture
- ✅ Fast development with Vite
- ✅ Organized CSS per component
- ✅ Optimized production build

## Tech Stack

- **React 18.3** - UI library
- **Vite 5.3** - Build tool and dev server
- **CSS3** - Styling with CSS custom properties

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Component Overview

- **Hero** - Main hero section with CTA
- **ValueProposition** - Value prop and event details
- **Motivation** - Why AWS learning is important
- **Curriculum** - 12-week learning path (9 modules)
- **Audience** - Target audience cards (Developers, Engineers, Entrepreneurs, Students)
- **PainPoints** - Common challenges and disclaimers
- **Instructor** - Instructor bio and expertise
- **Testimonials** - Success stories
- **FAQ** - Frequently asked questions
- **Footer** - Footer with CTA

## Styling

All styles use CSS custom properties (CSS variables) for theming:
- `--purple`, `--purple-dark`, `--purple-light` - Brand colors
- `--white`, `--bg` - Background colors
- `--text-dark`, `--text-grey` - Text colors
- `--border` - Border colors

Dark mode is automatically enabled based on system preferences or can be controlled via `data-theme` attribute.

## Building for Production

```bash
npm run build
```

The build output is in the `dist/` folder, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, AWS S3, etc.).

## Notes

- Images are stored in `public/images/` and referenced as `/images/filename`
- The old HTML file (`smartcore-cloud-landing.html`) is kept in git but excluded from the build via `.gitignore`
- All components are separated into individual JSX files with matching CSS files for better maintainability
