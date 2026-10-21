# Software Engineering for Vibe Coders - Course Landing Page

A modern React landing page for a course teaching engineering fundamentals to builders who create with AI. For non-technical founders, freelancers, and indie hackers building products with tools like Claude, ChatGPT, and other AI assistants.

## Course Overview

**Stop Re-Prompting. Understand Your Code.**

This 12-week intensive program teaches the engineering fundamentals that AI won't teach you. Learn to read code, debug problems, evaluate quality, and improve what you build. Designed specifically for people building real products with AI.

### The 10 Core Skills

1. Reading Code
2. Debugging Fundamentals
3. Problem Decomposition
4. Version Control (Git)
5. Data Structures & Algorithms Basics
6. Testing
7. Understanding the Full Stack
8. System Design Basics
9. Security Basics
10. Code Review & Documentation

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

- **Hero** - "Stop Re-Prompting" message
- **ValueProposition** - Why builders using AI need these fundamentals
- **Motivation** - The problem with building without engineering knowledge
- **Curriculum** - The 10 core skills taught over 12 weeks
- **Audience** - Four primary personas (Founders, Freelancers, Career Switchers, Indie Hackers)
- **PainPoints** - Real struggles of AI-powered builders
- **Instructor** - Mentor who works with AI-first builders
- **Testimonials** - Success stories from non-traditional builders
- **FAQ** - Questions from the AI-builder community
- **Footer** - Call-to-action

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
- All components are separated into individual JSX files with matching CSS files for better maintainability
- Designed and copywritten for builders using AI as their primary development tool
