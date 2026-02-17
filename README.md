# SEO Setup

## Environment Variables

Set these variables for canonical SEO behavior:

- `NEXT_PUBLIC_SITE_URL=https://www.quizcitoyen.fr`

Vercel behavior:

- `Production`: indexed when `VERCEL_ENV=production`.
- `Preview/Development`: blocked by default (`Disallow: /`).

Notes:
- Indexing is controlled by `lib/seo/config.ts` via `SHOULD_INDEX = IS_PRODUCTION`.
- `NEXT_PUBLIC_SHOULD_INDEX` is not used by the current implementation.
- If `NEXT_PUBLIC_SITE_URL` is missing, fallback URL logic may use a Vercel URL or localhost.

## Manual Check

1. Run `npm run dev`.
2. Open `/robots.txt`.
3. Expected result:
   - Production: contains `Allow: /` and `Sitemap: https://www.quizcitoyen.fr/sitemap.xml`
   - Preview/development: contains `Disallow: /`
