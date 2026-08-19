export const profile = {
  name: "Daniel Tuba",
  title: "Frontend Engineer",
  tagline:
    "I build immersive, high-performance interfaces where motion, shaders and accessibility meet.",
  email: "hello@danieltuba.dev",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "CodePen", href: "https://codepen.io" },
  ],
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
] as const;

export const about = [
  "I'm a frontend engineer obsessed with the small details that make an interface feel alive — the easing curve of a card lifting, the grain of a shader running quietly behind the content, the way focus rings behave when you actually use a keyboard.",
  "Most of my work sits at the intersection of design systems and real-time graphics: component libraries that scale across teams, and WebGL layers that stay at 60fps on a mid-range laptop. I care as much about bundle budgets and reduced-motion support as I do about the visuals.",
  "Outside of work I write about rendering techniques, tinker with GLSL, and rebuild my own site far more often than is reasonable.",
];

export const stack = [
  "TypeScript",
  "React",
  "WebGL / GLSL",
  "three.js",
  "Motion",
  "Tailwind CSS",
  "Node.js",
  "Vite",
  "Accessibility",
  "Design Systems",
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Northsignal",
    summary:
      "Lead the interface layer of a real-time analytics platform — a shader-backed data canvas rendering tens of thousands of points without dropping frames, plus the design system every product team builds on.",
    tech: ["TypeScript", "React", "WebGL", "three.js", "Tailwind"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Fieldwork Studio",
    summary:
      "Built award-shortlisted marketing sites and product microsites for design-led clients. Owned the motion language: scroll choreography, page transitions, and a reduced-motion path that never felt like a downgrade.",
    tech: ["React", "GSAP", "Motion", "Next.js", "GLSL"],
  },
  {
    period: "2019 — 2021",
    role: "UI Developer",
    company: "Kestrel Labs",
    summary:
      "Rebuilt a legacy dashboard as a componentised React app, cutting first-load JS by 62% and bringing the product to WCAG 2.1 AA across every core flow.",
    tech: ["JavaScript", "React", "SCSS", "Storybook"],
  },
];

export const education = [
  {
    period: "2017 — 2019",
    degree: "MSc Computer Graphics & Visualisation",
    school: "Delft University of Technology",
    summary:
      "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
  {
    period: "2014 — 2017",
    degree: "BSc Software Engineering",
    school: "University of Amsterdam",
    summary:
      "Graduated with honours. Built the student union's first accessible course-planning app and led the front-end track of the university hack society.",
    tech: ["JavaScript", "Algorithms", "UX", "Accessibility"],
  },
  {
    period: "Ongoing",
    degree: "Continuous learning",
    school: "Self-directed",
    summary:
      "Regularly working through shader art challenges, WebGPU specs and accessibility audits — the site you're reading is the current sandbox.",
    tech: ["WebGPU", "Shader Art", "WCAG"],
  },
];

export const projects = [
  {
    title: "Fluxfield",
    year: "2026",
    description:
      "A browser playground for fluid simulation. Paint velocity fields with the cursor and export the result as a looping shader you can drop into any site.",
    tech: ["WebGL", "GLSL", "React", "TypeScript"],
    href: "https://github.com",
  },
  {
    title: "Cadence UI",
    year: "2025",
    description:
      "An open-source React component library built around motion tokens — every component ships with a documented enter, exit and reduced-motion state.",
    tech: ["React", "Motion", "Tailwind", "Storybook"],
    href: "https://github.com",
  },
  {
    title: "Terrainer",
    year: "2025",
    description:
      "Procedural terrain generator running entirely on the GPU. Tweak noise octaves and erosion in real time, then export a glTF mesh.",
    tech: ["three.js", "GLSL", "Vite"],
    href: "https://github.com",
  },
  {
    title: "Slowloop",
    year: "2024",
    description:
      "A minimal ambient music sequencer using the Web Audio API, with a canvas visualiser driven by live FFT data.",
    tech: ["Web Audio", "Canvas", "TypeScript"],
    href: "https://github.com",
  },
  {
    title: "Lumen Docs",
    year: "2024",
    description:
      "Documentation theme with instant search, MDX components and a perfect Lighthouse score on a 3G budget.",
    tech: ["MDX", "Astro", "TypeScript"],
    href: "https://github.com",
  },
];
