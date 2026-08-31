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
  "C#",
  ".NET",
  "ASP.NET Core",
  "EF Core",
  "LINQ",
  "PostgreSQL",
  "Docker",
  "Redis",
  "React",
  "Typescript",
  "Node.js",
  "Sass",
  "Tailwind",
];

export const experience = [
  {
    period: "Sep 2023 — Aug 2026  ",
    role: "Senior C# / .NET Software Engineer",
    company: "Ryventra",
    summary:
      "Lead the interface layer of a real-time analytics platform — a shader-backed data canvas rendering tens of thousands of points without dropping frames, plus the design system every product team builds on.",
    tech: ["TypeScript", "React", "WebGL", "three.js", "Tailwind", ".Net"],
  },
  {
    period: "Aug 2020 — Aug 2023",
    role: "Distinguished Software Engineer",
    company: "BILL",
    summary:
      "Owner of the Angular platform and a 3.5-million-line mono repo, working in a complex organization involving cross-functional and cross-business products on the UI Platform team.Regularly mentored and motivated engineers and raised engineering standards across all the company. We achieved everything we set our eyes on.",
    tech: ["Angular", "React", "GSAP", "Motion", "Next.js", "GLSL"],
  },
  {
    period: "Apr 2016 — Oct 2020",
    role: "Fullstack Software Engineer",
    company: "Schlumberger",
    summary:
      "Responsible for developing RESTful api in go and frontend development in angular, SASS, and HTML5, with e2e and unit test coverage.",
    tech: ["JavaScript", "React", "SCSS", "Storybook","EESy", "Argo", "Golang"],
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
    title: "StoreGrid E-commerce API - E-commerce Platform",
    year: "2025",
    description:
      "Developed a scalable e-commerce backend using C# and ASP.NET Core Web API. Implemented APIs for product catalog, customer accounts, shopping carts, product variants, orders, and administrative operations. Used Entity Framework Core and SQL for data persistence and implemented JWT-based authentication and role-based authorization. Applied clean architecture principles and automated testing to improve maintainability and reliability.",
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL", "JWT"],
    href: "https://",
  },
  {
    title: "Healthcare Management System",
    year: "2023",
    description:
      "Developed secure backend services for patient, physician, appointment, and medical-record management using C# and ASP.NET Core. Implemented REST APIs and Entity Framework for database operations and created role-based access for administrators, doctors, and patients. Added authentication, authorization, validation, and audit logging to support secure healthcare workflows.",
    tech: ["ASP.NET Core", "C#", "Entity Framework"],
    href: "https://",
  },
  {
    title: "Neddle LMS - Learning Management System",
    year: "2022",
    description:
      "Developed scalable backend services for an LMS using C# and .NET Core. Implemented functionality for course management, student enrollment, learning content, and user administration. Designed RESTful APIs and database access layers and implemented authentication and authorization for different user roles. Focused on scalability, maintainability, and reliable data processing.",
    tech: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "RabbitMQ"],
    href: "https://",
  },
  {
    title: "Financial-Services — Financial Services Platform",
    year: "2021",
    description:
      "Developed backend services for financial transaction and account-management workflows using C# and ASP.NET Core. Designed REST APIs for financial operations, implemented business validation and transaction processing, and integrated SQL-based data persistence. Added authentication, error handling, logging, and automated testing to improve reliability and maintainability.",
    tech: ["C#", ".NET Core", "ASP.NET Core"],
    href: "https://",
  },
  {
    title: "Estate CMS — Real Estate Management Platform",
    year: "2019",
    description:
      "Developed backend functionality for a real estate CMS using C# and ASP.NET Core. Implemented property management workflows, CRUD operations, user authentication, and database-driven functionality. Built maintainable MVC components and RESTful services while applying object-oriented design and clean coding practices.",
    tech: ["React", "TypeScript", "Redux", "REST API", "ASP.NET Core", "C#"],
    href: "https://",
  },
];
