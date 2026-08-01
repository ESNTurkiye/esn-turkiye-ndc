# ESN Türkiye NDC Platform

Web platform for the **Barriers of Mobility** research project led by the **ESN Türkiye** National Development Committee (NDC), offering insights into mobility barriers, visa processes, and international mobility experiences.

## Documents
- **[How to contribute / developers guide](/CONTRIBUTING.md)**.
- **[License](/LICENSE)**.

## Development

### Requirements
- **Node.js** and **npm** ([nodejs.org](https://nodejs.org))

### Setup
```bash
git clone https://github.com/ESNTurkiye/esn-turkiye-ndc.git
cd esn-turkiye-ndc
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run fetch-posts` | Fetch blog posts from external sources |
| `npm run lint` | Check code quality and style |

## Tech Stack
React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router

## Structure
```
src/
├── components/     # Reusable UI (layout, sections, shared)
├── config/         # Analytics, SEO, navigation
├── data/           # Static data (team, testimonials, blog)
├── hooks/          # Custom React hooks
├── pages/          # Page components (Home, Blog)
└── utils/          # Helper functions
```

## Routes
| URL | Content |
|-----|---------|
| `/` | Home: Hero, project summary, team, testimonials |
| `/blog` | Blog posts list |
| `/blog/:slug` | Individual blog post |

## ESN Dictionary
- **ESN**: Erasmus Student Network, the largest student organisation in Europe.
- **NDC**: National Development Committee, the ESN Türkiye body overseeing this project.
- **Mobility**: the movement of students across borders for study or experience.
- **Barriers**: obstacles, such as visa processes or travel restrictions, faced during international mobility.
- **Erasmus**: a European Union programme supporting education, training, youth and sport.

## License
This project is licensed under **Apache-2.0**. See **[LICENSE](/LICENSE)**.

---
**ESN Türkiye** — Students Helping Students