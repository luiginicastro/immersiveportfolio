# Luigi Nicastro — VR Portfolio

Dark, video-first portfolio for immersive/XR work. Built with React (Vite) and
React Router.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All content lives in two files — no component changes needed:

- `src/data/site.js` — name, tagline, intro, email, Instagram/LinkedIn, resume
- `src/data/projects.js` — one object per project; each gets a card on the home
  grid and a case-study page at `/work/<slug>`

Media files go in `public/media/`. See `MEDIA_GUIDE.md` for what to record and
how to swap placeholders for real captures.

## Deploy

`npm run build` outputs to `dist/`. Deploy to Vercel or Netlify (both handle
the client-side routes out of the box). For GitHub Pages you'd need a 404
redirect workaround — Vercel/Netlify is simpler.
