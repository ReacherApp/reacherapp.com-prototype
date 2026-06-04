# Reacher App Pixel Clone

Next.js marketing-site migration for Reacher.

## Scope

- Pixel-for-pixel rebuild of `https://reacherapp.com/` in Next.js + React + Tailwind CSS.
- Frontend-only marketing site. Do not touch `portal.reacherapp.com`, APIs, databases, or product app code.
- Phase 1 starts with the homepage (`/`) only, then expands to the remaining English and Portuguese pages.

## Quality gate

For each page:

1. Capture live reference screenshots at 1440px and 375px.
2. Build the page/components in this repo.
3. Capture local screenshots at the same widths.
4. Compare live vs local screenshots with vision review.
5. Iterate until layout, spacing, colors, typography, and responsive behavior match.
6. Commit completed page work separately.

## Stack

- Next.js 15 App Router
- React
- Tailwind CSS v4
- `next/font/google` for Inter, IBM Plex Mono, and Fragment Mono
- Vercel Analytics
- lucide-react
- framer-motion only where useful after static match
