# MovieLog - Your Personal Movie Journey

MovieLog is a full-stack movie tracking application that allows users to discover movies, create personalized watchlists, and log their viewing history. Built with a modern monorepo architecture using pnpm workspaces.

## Features

- **Discover Movies** - Browse popular, top-rated, and upcoming movies
- **Create Watchlists** - Save movies to custom lists (Watch Later, Favorites, Watched)
- **Rate & Review** - Share your thoughts on movies you've watched
- **Personal Tags** - Organize movies with custom tags
- **Viewing Statistics** - Track your watching habits over time

## Tech Stack

### Frontend (Next.js)
- Next.js 14 with App Router
- TypeScript
- TailwindCSS for styling
- React Query for data fetching
- Zustand for state management
- Jest & React Testing Library for testing

### Backend (NestJS)
- NestJS framework
- TypeScript
- PostgreSQL with Prisma ORM
- Jest for unit/integration testing
- Redis for caching (optional)

### Monorepo Tools
- pnpm workspaces
- ESLint for code linting
- Prettier for code formatting
- Turborepo for build optimization

### External API
- [The Movie Database (TMDB) API](https://developers.themoviedb.org/3)
