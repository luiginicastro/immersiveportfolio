// One entry per project. Add a project = add an object here; it appears on the
// home grid and gets its own case-study page at /work/<slug> automatically.
//
// media entries: { type: 'video' | 'image', src: '/path-in-public', caption }
// or { type: 'vimeo', id: '<vimeo video id>', caption } for a hosted embed.
// Videos can also set poster: '/path-in-public' (a still shown before play,
// also used as the home-grid thumbnail when a project has no real images yet).
// Leave src as '' to render a styled placeholder. See MEDIA_GUIDE.md for
// what to record and at which aspect ratios.

export const projects = [
  {
    slug: 'seeds-of-return',
    title: 'Seeds Of Return',
    tagline: 'A mixed reality installation that asks: what emerges when we stop trying to move forward?',
    year: '2025',
    role: 'Artist & Lead Developer',
    platform: 'Meta Quest 3',
    tools: 'Unity',
    accent: ['#4ade80', '#fbbf24'],
    summary:
      'In a world where urgency overshadows introspection, this piece invites slowness. Through augmented stillness and shifting atmospheric states, this mixed reality installation asks: What emerges when we stop trying to move forward?',
    sections: [
      {
        heading: 'The experience',
        body: 'Visitors enter a world shrouded in thick fog, a symbolic stand-in for grief, uncertainty, and the psychic weight of ecological collapse. Movement thickens the fog. Stillness clears it. As the air begins to lift, the earth signals a chance for potential new life. A garden of native flora and fauna can grow when visitors plant the seeds that sprout in response to their stillness.',
      },
      {
        heading: 'Climate grief as a relational state',
        body: 'This work embodies climate grief not as paralysis, but as a relational state. Rather than calling for action or control, it invites stillness, slowness, and gentle participation. In that stillness, growth becomes possible. Visitors play an active role in healing the earth simply by being present. They witness a world that can begin to recover when given the opportunity to breathe.',
      },
      {
        heading: 'What I built',
        body: 'The interaction itself is a fully hand tracked experience that tracks your movement from the headset’s velocity. The experience requires you to be slow and still to allow growth, so if you move too fast you get a prompt telling you to slow down. If you move slow enough, the tree will signal you to move towards it, and when you approach it seeds appear. Each tree unlocks a level of nature, so by the end you have an entire ecosystem that you brought back to life.',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/media/seeds-of-return.mp4',
        poster: '/media/seeds-of-return-poster.jpg',
        caption: 'In-headset capture of Seeds Of Return',
      },
      { type: 'image', src: '/media/seeds-of-return-1.jpg', caption: 'The void world: bare trees in the fog before anything is planted' },
      { type: 'image', src: '/media/seeds-of-return-2.jpg', caption: 'Grabbing a seed from a tree' },
    ],
  },
  {
    slug: 'the-visceral-return',
    title: 'The Visceral Return',
    tagline: 'An immersive journey by Palestinian-Canadian artist Dalia Elcharbini',
    year: '2025',
    role: 'Lead Developer',
    platform: 'Meta Quest 3',
    tools: 'Unity',
    accent: ['#fb7185', '#8b5cf6'],
    credits: [
      { name: 'Dalia Elcharbini', role: 'Artist' },
      { name: 'Luigi Nicastro', role: 'Lead Developer' },
      { name: 'Alexander Martins', role: 'Environment Art' },
    ],
    summary:
      'The Visceral Return is an immersive journey by Palestinian-Canadian artist Dalia Elcharbini. This surreal, multi-sensory experience transforms Dalia’s art into a living landscape for viewers to explore, inspired by the sacred grounds of Jerusalem and the emotional terrain of diaspora.',
    sections: [
      {
        heading: 'The experience',
        body: 'The experience takes viewers into a dreamlike world, inviting them into an intimate meditation on return, belonging, and identity.',
      },
      {
        heading: 'What I built',
        body: 'I met weekly with Dalia to understand her vision for the project, working through multiple story and vision boards. From there, I collaborated with Alex to build the space out, and I took on optimizing the experience and building all of the interactions and user flow.',
      },
    ],
    media: [
      { type: 'video', src: '', caption: 'Hero: journey through the living landscape (16:9, 30-60s)' },
      { type: 'image', src: '/media/visceral-return-1.webp', caption: 'The Dome of the Rock and the Dome of the Chain' },
      { type: 'image', src: '/media/visceral-return-2.webp', caption: 'The stairway leading up to the dome' },
      { type: 'image', src: '/media/visceral-return-3.webp', caption: 'The dome from across the plaza' },
      { type: 'image', src: '/media/visceral-return-4.webp', caption: 'Approaching through the arched gateway' },
      { type: 'image', src: '/media/visceral-return-5.jpg', caption: 'Visitors beneath the arches' },
    ],
  },
  {
    slug: 'ic-contemporary',
    title: 'IC Contemporary',
    tagline: 'An art platform supporting emerging artists around the world',
    year: '2022 - Present',
    role: 'Creator & Developer',
    platform: 'Meta Quest 3 · Windows · macOS',
    tools: 'Unity · C# · Normcore · OpenXR',
    accent: ['#34d399', '#818cf8'],
    summary:
      'IC Contemporary is a Toronto based art gallery, and I helped build their digital platform that supports emerging artists around the world. It is a cross-platform multiplayer experience that runs on VR headsets (OpenXR), Windows, and macOS using Normcore, and a personal passion project I have been working on for the last few years.',
    sections: [
      {
        heading: 'The project',
        body: 'In 2020, I built my first digital twin of an art gallery for ICC, and since then we have gone on to build six more exhibits featuring artists from around the world.',
      },
      {
        heading: 'From solo apps to a shared hub',
        body: 'For the longest time, each exhibit was its own application as a solo experience, but that was not the experience we wanted our users to have. In 2022, I combined all the galleries into one unified hub platform where users can explore every space created by ICC, this time with friends, family, and people from around the world. This was the birth of IC Contemporary’s online platform.',
      },
      {
        heading: 'Why it matters',
        body: 'The platform gives equity-seeking artists from diverse backgrounds a global stage. It lets underrepresented artists showcase their work to audiences far beyond a physical gallery in Toronto.',
      },
    ],
    media: [
      { type: 'vimeo', id: '885761828', caption: 'Exhibit teasers from the IC Contemporary platform' },
      { type: 'image', src: '/media/icc-queer-identities.jpg', caption: 'Queer Identities: portraits under the skylight' },
      { type: 'image', src: '/media/icc-intersection.jpg', caption: 'Intersection: the entrance hall and its curtained archways' },
      { type: 'image', src: '/media/icc-somnarium.jpg', caption: 'Somnarium: a stone path through a dreamlike garden' },
      { type: 'image', src: '/media/icc-traces-of-us.jpg', caption: 'Traces of Us: neon script above the archway' },
      { type: 'image', src: '/media/icc-uniform.jpg', caption: 'Uniform: a courtyard of shipping crates by the water' },
      { type: 'image', src: '/media/icc-elly.jpg', caption: 'Elly: a forest installation framed by the stone entrance' },
    ],
  },
];
