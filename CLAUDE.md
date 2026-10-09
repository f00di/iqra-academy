# Iqra Angels Learning Academy

Next.js + Tailwind static-export site for a tutoring academy: programs by class level, fees, activities (computer/beginner AI), contact via WhatsApp. Values-based, Islamic learning habits.

- Routes: `app/` (`about`, `activities`, `contact`, `fees`, `programs/[slug]`). Components in `components/`. Data in `lib/`.
- Commands: `npm run dev`, `npm run typecheck`, `npm run build` (writes `out/`). No tests or lint configured.
- `basePath` comes from `NEXT_PUBLIC_BASE_PATH` (see `next.config.ts`).
- Icons: `lucide-react` (already installed). Don't add a second icon set.
