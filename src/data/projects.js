// One entry per project. Add a project = add an object here; it appears on the
// home grid and gets its own case-study page at /work/<slug> automatically.
//
// media entries: { type: 'video' | 'image', src: '/path-in-public', caption }
// Leave src as '' to render a styled placeholder. See MEDIA_GUIDE.md for
// what to record and at which aspect ratios.

export const projects = [
  {
    slug: 'seeds-of-return',
    title: 'Seeds Of Return',
    tagline: '[Placeholder: one-line hook for the project]',
    year: '2025',
    role: 'Artist & Lead Developer',
    platform: 'Meta Quest 3',
    tools: 'Unity',
    accent: ['#4ade80', '#fbbf24'],
    summary:
      '[Placeholder: 2-3 sentence summary of what Seeds Of Return is, who it is for, and what makes it worth experiencing.]',
    sections: [
      {
        heading: 'The project',
        body: '[Placeholder: the story and intent behind Seeds Of Return, your own art piece.]',
      },
      {
        heading: 'What I built',
        body: '[Placeholder: your role, key interactions, technical and design decisions.]',
      },
    ],
    media: [
      { type: 'video', src: '', caption: 'Hero: in-headset capture (16:9, 30-60s)' },
      { type: 'image', src: '', caption: 'Still: key moment' },
      { type: 'image', src: '', caption: 'Still: interaction detail' },
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
      { type: 'video', src: '', caption: 'Hero: walkthrough of a gallery exhibit with other visitors present (16:9)' },
      { type: 'image', src: '', caption: 'Choosing an exhibit from the unified hub' },
      { type: 'image', src: '', caption: 'Exploring an exhibit together' },
      { type: 'image', src: '', caption: 'A featured work up close' },
    ],
  },
];
