# Media guide — what to record for each project

Every placeholder tile on the site corresponds to a `media` entry in
`src/data/projects.js`. To replace one:

1. Drop the file into `public/media/` (e.g. `public/media/xr-training-hero.mp4`)
2. Set the entry's `src` to `/media/xr-training-hero.mp4`

That's it — the placeholder is replaced automatically.

## What to record

**Hero videos (one per project) — these sell the work.**
- In-headset capture (Quest: hold Meta button → Camera → Record, or use
  [Meta Quest Developer Hub](https://developers.meta.com/horizon/documentation/unity/ts-odh/)
  for higher-quality capture at full resolution)
- 30–60 seconds, 16:9, lead with the most impressive 5 seconds — viewers decide fast
- Show *interaction*, not menus: hands grabbing, UI responding, people reacting
- Export as MP4 (H.264), 1080p, keep under ~15 MB each (use HandBrake to compress)
- No audio needed — they play with controls; captions in the case study do the talking
- Add a `poster` still (JPEG, same 16:9 frame) so the video has a cover before play
- Long or heavy footage: upload to Vimeo and use `{ type: 'vimeo', id: '...' }` instead of a file

**Gallery images**
- 16:9 stills, 1600px wide is plenty
- Mix in-headset shots with at least one "context" shot (a person wearing the
  headset, the Unity editor, a whiteboard) — it shows process, not just output

**About page portrait**
- 4:5 portrait, ideally you with a headset in hand or mid-demo — more memorable
  than a standard headshot

## Writing checklist (the `[Placeholder — ...]` text in projects.js)

For each case study, aim to answer:
- What was the problem, and why was it hard *in VR specifically*?
- What did **you** decide/build (vs. the team)?
- One interaction or comfort decision you're proud of
- What happened after it shipped (metric, quote, or adoption)

Also update in `src/data/site.js`:
- [ ] Your real Instagram URL (currently `YOUR_HANDLE`)
