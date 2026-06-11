# GS Advertising & Connections

React + Vite website for GS Advertising & Connections.

## Local Setup

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env` and fill in your Supabase project URL and anon key.
3. Install and run:

```bash
npm install
npm run dev
```

## Deploying

Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```

This repo includes static-hosting support for:

- Netlify: `netlify.toml` and `public/_redirects`
- Vercel: `vercel.json`
- GitHub Pages: `public/404.html` plus the app redirect restore hook

For a custom domain, connect the GitHub repo to your host, add the domain in that host's dashboard, then point your DNS records to the host. If you use GitHub Pages directly, add the custom domain in the Pages settings after deployment.

## Supabase Migration

Run the migrations in `supabase/migrations` on your Supabase project. The latest migration adds `plan` and `amount` to `payment_confirmations`, which lets the admin approval flow activate Premium Membership benefits correctly.
