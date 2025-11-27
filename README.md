# Mehedi Hasan Hridoy — Portfolio

Live: https://mehedihridoy.online

This is my personal portfolio: a fast, minimal, and thoughtfully engineered site that showcases selected projects, tools, and experience. It focuses on credibility, clarity, and performance — the three things that matter most to recruiters and collaborators.

## Why This Build

- Clarity: Clean information architecture with a single, focused landing and dedicated projects area.
- Speed: Static-first Next.js routing, optimized fonts, images, and lean client interactivity.
- Maintainability: Typed components, a small but sharp design system, and data‑driven content.

## Tech Stack

- Next.js 16 (App Router): Modern routing, layouts, metadata, and server actions.
- TypeScript: Safer, self-documenting components across the codebase.
- Tailwind CSS 4: Design system via utility classes; `tailwind-merge` for class composition.
- Framer Motion: Subtle, performant UI motion for forms and sections.
- next-themes: First‑class dark mode with class attributes and no FOUC.
- React Hook Form + Zod: Typed client validation matching server schemas.
- Resend: Reliable transactional email for the contact form.

## Architecture

- App Router structure under `app/` with a main shell and sectioned content.
- Route group `(main)` provides the sticky left profile and right content layout.
- Projects are data‑driven via `app/data/projects.ts` and statically generated detail routes using `generateStaticParams` in `app/(main)/projects/[slug]/page.tsx`.
- Project write‑ups live as React content blocks in `app/(main)/projects/_content/` for rich, styled narratives.
- Global theming via `app/providers/ThemeProviderWrapper.tsx` using `next-themes`.

Directory highlights:

```
app/
	(main)/
		layout.tsx        # Sticky left card + right content
		page.tsx          # Home sections (Hero, Projects, Tools, About, Contact)
		projects/
			page.tsx        # Project list from data
			[slug]/page.tsx # SSG detail routes from data
			_content/       # Project-specific rich content
	api/contact/route.ts# Email API (Resend + Zod + basic rate limit)
	providers/ThemeProviderWrapper.tsx
lib/
	utils.ts            # cn() utility
	validation/contact.ts# Zod schema shared client/server
```

## Key Features

- Polished UX: Sticky profile card, focus on readability, and responsive layout.
- Dark Mode: Persistent theme toggle powered by `next-themes`.
- Motion with Restraint: Split text reveal, typewriter intro, and smooth section transitions via Framer Motion.
- Data‑Driven Projects: Central `projects.ts` file powers cards and static detail pages.
- Contact Workflow: Validated form with `react-hook-form` + `zod`, toasts via `sonner`, and a resilient email API using Resend.

## Performance & SEO

- Static rendering for projects; minimal client hydration where needed.
- `next/font` for Google Poppins with proper preloading and subset.
- `next/image` for responsive images (with explicit sizing) on cards and profile.
- Basic metadata via `app/layout.tsx` (`Metadata` API). Easy to extend with OpenGraph/Twitter cards.

## API, Validation & Safety

- Endpoint: `POST /api/contact`
- Validation: Shared `ContactSchema` (Zod) on both client and server.
- Rate limiting: Simple in‑memory throttle (1 request / 20s / IP) to curb abuse.
- Email: Resend SDK with configurable sender/recipient.

Environment variables:

- `RESEND_API_KEY` — Resend API key
- `CONTACT_FROM` — Optional override of sender (defaults to Resend dev)
- `CONTACT_TO` — Optional recipient (defaults to personal email)


## Deployment

This site is deployed to a managed Node.js environment and served at `mehedihridoy.online`. Provide the environment variables above in your hosting platform. Any platform that supports Next.js 16 (Node.js 18+) will work.

## What I Focused On (Developer’s POV)

- Strong foundations: typed React components, modern Next.js patterns, and clean composition utilities.
- Real-world flows: production‑ready contact pipeline with validation, rate limiting, and email delivery.
- UX over novelty: motion supports comprehension; design prioritizes content and scannability.
- Maintainability: projects are content‑driven and easy to extend without touching routing.

## Future Enhancements

- Richer SEO (OpenGraph images per project) and a sitemap.
- Analytics for engagement insights (privacy‑respecting).
- Unit tests for UI primitives and the contact API.

— Built with care by Mehedi Hasan Hridoy.
