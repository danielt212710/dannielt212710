export const profile = {
  name: "Daniel Tupa",
  title: "Software Engineer",
  tagline:
    "I’m a software engineer specializing in C# and .NET, with a focus on backend architecture, distributed systems, and developer tooling. I enjoy turning complex problems into systems that are simple to reason about, observable in production, and built to last.",
  email: "danielt212710@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/danielt212710" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    // { label: "X", href: "https://x.com" },
    // { label: "CodePen", href: "https://codepen.io" },
  ],
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
] as const;

export const about = [
  "I don't just focus on the technical side of custom applications — I own the full stack, from architecture to delivery. Beyond the code, I care deeply about client experience, usability, and user experience. I have a clear view of what's feasible and deliver quality work efficiently.",
  "Every project I take on comes with genuine passion and empathy. I love diving into a client's business logic and building the right solution for it. In this industry, I firmly believe that standing still means falling behind — so I never stop learning and exploring.",
];

export const stack = [
  "React",
  "Typescript",
  "Node.js",
  "Sass",
  "Tailwind",
  "C#",
  ".NET",
  "ASP.NET Core",
  "EF Core",
  "LINQ",
  "PostgreSQL",
  "Docker",
  "Redis",
];

export const experience = [
  {
    period: "Aug 2023 — Present",
    role: "Senior Software Engineer",
    company: "Ryventra",
    summary:
      "Lead the interface layer of a real-time analytics platform — a shader-backed data canvas rendering tens of thousands of points without dropping frames, plus the design system every product team builds on.",
    tech: ["TypeScript", "React", "WebGL", "three.js", "Tailwind", ".Net"],
  },
  {
    period: "Aug 2021 — Jun 2023",
    role: "Distinguished Software Engineer",
    company: "BILL",
    summary:
      "Owner of the Angular platform and a 3.5-million-line mono repo, working in a complex organization involving cross-functional and cross-business products on the UI Platform team.Regularly mentored and motivated engineers and raised engineering standards across all the company. We achieved everything we set our eyes on.",
    tech: ["Angular", "React", "GSAP", "Motion", "Next.js", "GLSL"],
  },
  {
    period: "Oct 2019 — Oct 2021",
    role: "Fullstack Software Engineer",
    company: "Schlumberger",
    summary:
      "Responsible for developing RESTful api in go and frontend development in angular, SASS, and HTML5, with e2e and unit test coverage.",
    tech: ["JavaScript", "React", "SCSS", "Storybook","EESy", "Argo", "Golang"],
  },
  {
    period: "Apr 2018 — Oct 2019",
    role: "Lead UI Dev",
    company: "Anadarko Petroleum Corporation",
    summary:
      "UI Lead for Real-Time Drilling in AAET (Advanced Analytics and Emerging Technologies). Publication acknowledgements: SPE-196228-MS, SPE-199584-MS, and SPE-199670-MS",
    tech: ["MongoDB", "HTML5 and +7 skills"],
  },
];

export const education = [
  {
    period: "2013 — 2015",
    degree: "Bachelor of Science, Computer Engineering",
    school: "University of Houston-Clear Lake",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
  {
    period: "2009 — 2013",
    degree: "Associate of Science, Mathematics",
    school: "San Jacinto College",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
];

export const projects = [
  {
    title: "PropertyFlow - Real Estate Property Management Platform",
    year: "2025",
    description:
      "Responsible for designing and implementing backend services and business workflows using C# and ASP.NET Core. I developed REST APIs, implemented domain and persistence logic, integrated SQL-based data access, and worked on authentication, authorization, validation, and background processing.",
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL Server"],
    href: "https://www.propertyflow.site",
  },
  {
    title: "LedgerX - Digital Asset Settlement & Payment Platform",
    year: "2024",
    description:
      "Improved transaction reliability by introducing idempotent processing and explicit transaction states, ensuring that retries or duplicate requests could not result in duplicate financial operations.",
    tech: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "Blockchain", "Ethereum"],
    href: "https://www.ledgerx.org/",
  },
  {
    title: "ShopCore - Enterprise E-Commerce Platform",
    year: "2023",
    description:
      "Developed checkout workflows that validated product availability, calculated order totals, applied promotions, and coordinated payment and order creation.",
    tech: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "RabbitMQ", "Vue.js"],
    href: "https://shopcore.in",
  },
  {
    title: "LearnSphere — Online Learning & Assessment Platform",
    year: "2021",
    description:
      "Responsible for developing backend services and academic workflows using C# and ASP.NET Core. Worked on course management, student enrollment, assignments, assessments, grading, authentication, and learning-progress tracking while focusing on maintainable architecture and reliable data processing.",
    tech: ["C#", ".NET Core", "ASP.NET Core", "Angular"],
    href: "https://www.cs.cmu.edu/~learnsphere/",
  },
  {
    title: "CareTrack — Electronic Health Record Platform",
    year: "2019",
    description:
      "Responsible for developing the frontend of an Electronic Health Record platform using React and TypeScript. Built reusable clinical components and workflows for patient management, encounters, diagnoses, medications, laboratory results, and clinical documentation while focusing on usability, data validation, and reliable interaction with REST APIs.",
    tech: ["React", "TypeScript", "Redux", "REST API", "Material-UI"],
    href: "https://caretrack.com",
  },
];
