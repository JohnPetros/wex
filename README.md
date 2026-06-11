# Wex Distribuidora 🚚

Modern website for **Wex Distribuidora**, a distributor of parts for truck implements (Sider, aluminum box, refrigerated, tipper, flatbed, and beverage trailers).

![Astro](https://img.shields.io/badge/Astro-5.16.0-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

## Pages

- **Home** — Company overview, product categories, brands, and CTAs
- **Catalog** — Tabbed catalog across 6 product lines, each with detailed sub-product listings
- **Company** — About page with mission, values, and commitments

## Tech Stack

- **[Astro](https://astro.build)** — Static site generation with island architecture
- **[React](https://react.dev)** — Interactive components (catalog tabs, mobile menu, animations)
- **[Tailwind CSS](https://tailwindcss.com)** v4 — Utility-first styling via Vite plugin
- **[Motion](https://motion.dev)** — Animations and transitions
- **[Lucide](https://lucide.dev)** — Icons
- **[Radix Themes](https://radix-ui.com/themes)** — Accessible UI primitives
- **[Biome](https://biomejs.dev)** — Linting and formatting

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── assets/          # Images
├── components/      # Astro + React components
│   ├── catalog/     # Catalog page (Hero, Tabs)
│   │   └── react/   # Per-category product components
│   ├── company/     # Company page (Hero, Mission, Commitments)
│   ├── home/        # Home page sections
│   │   └── react/   # Categories carousel
│   ├── react/       # Shared interactive components
│   └── ui/          # UI primitives (Button, Card, etc.)
├── config/
│   └── site.ts      # Site metadata, navigation, social links
├── constants/
│   └── categories.ts # Product category definitions
├── layouts/
│   └── BaseLayout.astro
├── pages/           # Routes: index, catalog, company
├── styles/
│   └── global.css   # Tailwind v4 import + custom animations
└── utils/
    └── constants.ts # Industries and capabilities data
```

## Customization

- **Content** — Edit `src/config/site.ts` for site metadata, navigation, and social links
- **Categories** — Update `src/constants/categories.ts` for product catalog configuration
- **Images** — Swap assets in `src/assets/`
- **Styling** — Tailwind classes throughout components; global styles in `src/styles/global.css`

## Deployment

```bash
npm run build
```

The project now builds as a plain static Astro site for Locaweb hosting.

- Upload the contents of `dist/` to `public_html/`
- The `public/.htaccess` file is copied into the build automatically for the Apache server
- The GitHub Actions workflow deploys `dist/` to Locaweb via FTP

## License

MIT
