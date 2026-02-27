# QuickHire — Frontend

React.js + Tailwind CSS + Framer Motion job board UI.

## Tech Stack
- **React 18** + Vite
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — page transitions, scroll animations, micro-interactions
- **React Router v6** — client-side routing
- **Axios** — API calls
- **Lucide React** — icons

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Categories, Featured & Latest jobs |
| `/jobs` | Job listings with search & filter |
| `/jobs/:id` | Job detail + Apply Now form |
| `/admin` | Admin dashboard — post & delete jobs |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env
# Edit VITE_API_URL to point to your backend

# 3. Start dev server
npm run dev
# → http://localhost:3000
```

## Folder Structure
```
src/
├── components/
│   ├── common/       # JobCard, Loader, ScrollReveal
│   ├── home/         # Hero, CategorySection, FeaturedJobs, LatestJobs, CTABanner
│   └── layout/       # Navbar, Footer, Layout
├── pages/            # Home, JobsPage, JobDetailPage, AdminPage, NotFound
├── services/         # api.js (axios)
└── utils/            # helpers.js (colors, formatters, constants)
```

## Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |