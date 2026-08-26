# Hyperion / TradeHax starter

Dark + glow green + purple homepage. Static export for Cloudflare Pages.

## Local
```bash
npm install
npm run dev
```
Open http://localhost:3000

## GitHub
1. Create a new empty repo (do not use DarkModder33/main)
2. Upload this folder or run:
```bash
git init
git add .
git commit -m "Hyperion homepage"
git branch -M main
git remote add origin https://github.com/YOURUSER/hyperion-tradehax.git
git push -u origin main
```

## Cloudflare Pages
- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `out`
- Root directory: `/`

Then add custom domains tradehax.net and www.tradehax.net.
Keep Zoho MX/TXT records. Delete old Vercel A/TXT records after Pages is attached.
