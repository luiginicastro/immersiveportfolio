# Luigi Nicastro's VR Portfolio

Personal portfolio for Luigi Nicastro, VR creator and Immersive Technology Lead
at CGS Immersive. Rebuilt from scratch in September 2026. Repo:
github.com/luiginicastro/immersiveportfolio (branch main).

## Stack and structure

- Vite + React + React Router (BrowserRouter). Deliberately **no 3D/WebGL**;
  Three.js was removed on purpose, do not re-add it.
- Design: dark immersive. Near-black background, violet to cyan glow accents,
  Space Grotesk headings, Inter body. All tokens in `src/index.css`.
- **All content lives in two data files.** Never hardcode copy in components:
  - `src/data/site.js`: name, tagline, intro, email, Instagram/LinkedIn, resume
  - `src/data/projects.js`: one object per project; each gets a home-grid card
    and a case-study page at `/work/<slug>` automatically. Optional `credits`
    array renders a Team block on the case study.
- Media files go in `public/media/`. A media entry with `src: ''` renders a
  styled placeholder tile. Videos take an optional `poster` (also used as the
  home-grid thumbnail when the project has no real images). `type: 'vimeo'`
  with an `id` renders an embedded Vimeo player (Luigi's account:
  vimeo.com/user94287325). `MEDIA_GUIDE.md` documents what to record.
- Luigi drops raw captures in `public/media/`; compress them before use
  (`sips` for images, `ffmpeg` for video, both installed) and move the
  originals to `media-src/` (gitignored). GitHub rejects files over 100 MB.
- Optional `download` on a project renders a "Try it yourself" block with a
  download button. Seeds Of Return's APK (about 240 MB) is a GitHub Release
  asset (tag `seeds-of-return-v1.0`); the repo was made public so the link
  works. Never commit APKs to `public/`, they exceed GitHub's 100 MB limit.
- Pages: Home (hero + project grid), `/work/<slug>` case studies, `/about`.
  Contact is Instagram/email/LinkedIn/resume links in nav and footer, not a page.

## Copy rules (important to Luigi)

- **Never use em dashes** anywhere in site copy, including year ranges
  ("2022 - Present" with a hyphen).
- **No AI tone.** Plain first-person sentences. Prefer Luigi's own wording
  verbatim over paraphrase. Text in `[Placeholder: ...]` brackets marks copy
  Luigi still needs to write.
- No Outcome sections on case studies (Luigi removed them deliberately).

## The three projects (Luigi's chosen order)

1. **Seeds Of Return** (2025, Quest 3, Unity): mixed reality installation about
   climate grief and stillness. Luigi is Lead Developer only; the art assets
   were bought from the Unity Asset Store, so do not credit him as artist. Hero
   video in place (3 min, H.264 re-encode of Luigi's HEVC capture) plus seven
   stills pulled from it. Case-study text done (Luigi's write-up verbatim).
2. **The Visceral Return** (2025, Quest 3, Unity): immersive journey by artist
   Dalia Elcharbini; environment art by Alexander Martins; Luigi was Lead
   Developer (weekly vision sessions with Dalia, built interactions/user
   flow/optimization). Five environment images already in `public/media/`
   (pulled from Alexander's ArtStation). Hero video in place (2:35, H.264
   re-encode of Luigi's HEVC capture, original in `media-src/`) with a poster
   pulled from the 45s mark.
3. **IC Contemporary** (2022 - Present, Quest 3/Windows/macOS, Unity + Normcore
   + OpenXR): Toronto gallery's multiplayer platform for emerging artists,
   Luigi's long-running passion project. Case-study text done; six exhibit
   captures in place (Queer Identities, Intersection, Somnarium, Traces of Us,
   Uniform, Elly). Hero is Luigi's 21s "Exhibit Teasers" Vimeo embed
   (vimeo.com/885761828); a longer multiplayer walkthrough would be a nice
   upgrade but is not blocking.

## Still pending (waiting on Luigi)

- Deployment: recommend Vercel/Netlify import from GitHub (BrowserRouter means
  GitHub Pages would 404 on deep links without a redirect workaround)

## Commands

- `npm run dev` (port 5173), `npm run lint`, `npm run build`
- No test suite. Verify visual changes by screenshotting with headless Chrome
  (`chromium-cli` is not installed; use the Google Chrome binary directly).
  Note: ArtStation blocks curl/WebFetch via Cloudflare; headless Chrome with
  `--headless=new` and a real user agent gets through.

## Gotchas

- lucide-react here has no brand icons; Instagram/LinkedIn are inline SVGs in
  `src/components/SocialIcons.jsx`.
- The resume PDF exists twice: root copy (source) and `public/` copy (served).
  Keep them in sync when Luigi updates it.
- Luigi's portfolio contact email is `luigicnicastro@gmail.com` (note the
  spelling: luigi-c-nicastro).
