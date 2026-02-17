# SEO Setup

## Environment Variables

Set these variables for canonical SEO behavior:

- `NEXT_PUBLIC_SITE_URL=https://quizcitoyen.fr`
- `NEXT_PUBLIC_SHOULD_INDEX=true`

Vercel behavior:

- `Production`: indexed only when `VERCEL_ENV=production`.
- `Preview/Development`: blocked by default (`Disallow: /`), even if `NEXT_PUBLIC_SHOULD_INDEX=true`.

## Manual Check

1. Run `npm run dev`.
2. Open `/robots.txt`.
3. Expected result:
   - Production: contains `Allow: /` and `Sitemap: https://quizcitoyen.fr/sitemap.xml`
   - Preview/development: contains `Disallow: /`
