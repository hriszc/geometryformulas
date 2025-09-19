# Geometry Formulas Knowledge Base

This project provides a printable, internationalized knowledge base for geometry and math formulas. It is built with Next.js (App Router) and TypeScript, styled with Tailwind CSS and localized with `next-intl`.

## Tech Stack

- **Next.js 14** with the App Router for SSR/SSG and SEO-ready routing.
- **TypeScript** for end-to-end type safety.
- **Tailwind CSS** for atomic styling including print-friendly utilities.
- **next-intl** for localized routes (`/en`, `/zh`).
- **ESLint** + **Prettier** for consistent formatting.
- **next-sitemap** to generate `sitemap.xml` and `robots.txt` during builds.

## Getting Started

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev

# Lint and format checks
yarn lint
yarn format

# Build for production
yarn build
```

After building, run `yarn postbuild` or rely on the `postbuild` script to create SEO assets with `next-sitemap`.

## Internationalization

All pages live under the localized prefix (e.g. `/en`, `/zh`). Locale detection is handled via middleware. Translation strings are stored in `src/i18n/messages`.

## Content

- `/[locale]` – Comprehensive 2D and 3D geometry formulas with diagrams.
- `/[locale]/math-formulas` – Arithmetic, algebra and geometry essentials.
- `/[locale]/double-angle-formulas` – Trigonometric double angle identities.
- Downloadable PDFs are served from `public/pdfs`.

## SEO Enhancements

- Structured metadata with Open Graph and Twitter cards.
- JSON-LD `WebSite` schema injected at the layout level.
- Dynamic Open Graph image via `app/opengraph-image.tsx`.
- `sitemap.xml` and `robots.txt` generation using `next-sitemap` plus dedicated route handlers.

## Printing

Use the **Print / Export to PDF** button in the header to generate clean A4-ready study sheets. Tailwind print utilities hide navigation and preserve layout when printing.
