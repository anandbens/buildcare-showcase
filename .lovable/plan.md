This is a large multi-part request. Here is what I'll build, with sensible defaults where you skipped the questions. Tell me anything you want changed and I'll start.

## 1. Responsive, retina & accessibility fixes
- Audit Header / Footer / Home / Projects / Services / About / Clients / Contact at 360 / 768 / 1024 / 1440.
- Fix the current hydration warning in `Footer.tsx` (whitespace inside `<li>` next to `<Mail/>`).
- Replace `h-screen` → `h-dvh` where used, ensure tap targets ≥ 44×44, add `aria-label` to all icon-only buttons (including floating Enquire button & header social icons).
- Add visible focus rings using `--ring` token; ensure all form inputs have associated `<Label htmlFor>` (already mostly OK).
- Mark decorative images `alt=""`, give meaningful images real alt text.
- Add `srcset` / responsive `sizes` to hero & project images so retina displays get sharp assets; lazy-load below-the-fold imagery.
- Add `<html lang="en">` (present) and a single `<main>` landmark (present in `__root.tsx`).
- Form usability: inline error messages with `aria-invalid`, `aria-describedby`, `inputMode` hints for phone/email, autocomplete attributes, disabled-while-submitting state.

## 2. SEO across every page
- Per-route `head()` with unique `title`, `description`, `og:title`, `og:description`, `og:url`, `og:type`, `twitter:card`, leaf-only `<link rel="canonical">`.
- Generate one OpenGraph share image (1200×630) and wire it as default `og:image` / `twitter:image`; per-project pages use the project hero.
- `src/routes/sitemap[.]xml.ts` server route enumerating static + dynamic project routes.
- `public/robots.txt` allowing all, pointing to `/sitemap.xml`.
- JSON-LD: `Organization` + `WebSite` in `__root.tsx`; `BreadcrumbList` on inner pages; `Service` schema on services; `Article`-like schema on project detail pages.

## 3. Lead delivery (defaults chosen: **Email + Webhook**)
- Enable **Lovable Cloud** (DB + auth + email infra). Every enquiry persists to a `leads` table (RLS: insert public, select admin only).
- Send notification email via Lovable Emails to a configurable recipient (defaults to `info@chennaibuildcare.com` — change in Admin → Settings).
- POST the same payload to an optional `LEAD_WEBHOOK_URL` secret (works with Zapier / Make / HubSpot / any custom URL). If not set, webhook is skipped silently.
- Server-side input validation with Zod, simple in-memory rate limit per IP, honeypot field for spam.

## 4. Admin dashboard (`/admin`)
- Lovable Cloud auth: **email/password + Google sign-in**. `user_roles` table with `admin` role and `has_role()` security-definer function. First sign-up is auto-promoted to admin if `leads` table is empty; subsequent admins added by existing admin.
- Dashboard sections:
  - **Leads** — table with status (new / contacted / closed), search, CSV export.
  - **Projects** — create / edit / delete; toggle Completed ↔ Ongoing; manage gallery images (upload to Lovable Cloud storage); set category, client, location, area.
  - **Categories** — CRUD for project categories.
  - **Clients** — CRUD for the client list (logo upload, industry tag).
  - **Settings** — lead recipient email, webhook URL.
- Public pages migrate from hard-coded `src/data/*.ts` to fetching from the DB (with the existing data seeded on first run).

## Technical notes
- Stack stays TanStack Start; all mutations go through `createServerFn` with `requireSupabaseAuth` + `has_role` checks.
- `/admin` routes live under a `_authenticated` layout so unauth'd users are redirected to `/login`.
- All secrets (`LEAD_NOTIFY_EMAIL`, `LEAD_WEBHOOK_URL`) stored via Lovable Cloud secrets, never in the bundle.

## Out of scope unless you confirm
- Switching to a third-party email provider (Resend / Brevo / Mailgun) — happy to swap if you prefer.
- Direct HubSpot/Salesforce CRM connector — the webhook covers this via Zapier; native connector can be added on request.
- Translating site into other languages for "international" reach (assumed English-only).

Approve and I'll build it in one pass.