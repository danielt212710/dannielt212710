export const profile = {
  name: "Nicholas Yardich",
  title: "Software Engineer",
  tagline:
    "Software Engineer with a strong foundation in Java, C#, SQL, full-stack development, software architecture, and automated testing. Experienced in developing and maintaining production-oriented applications using Spring, React, Node.js, REST APIs, relational databases, and modern development tools. Background includes software engineering internships with JP Morgan Chase & Co. and Northrop Grumman, with hands-on experience in enterprise application development, system modernization, quality engineering, and Agile software delivery. Strong understanding of object-oriented programming, data structures, algorithms, database design, API development, and software testing.",
  email: "nicholasyardich1@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/NYardich" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/NYardich" },
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
  "Java",
  "C#",
  "C",
  "SQL",
  "Python",
  "JavaScript",
  "PHP",
  "Spring",
  "Spring Framework",
  "Hibernate",
  "React",
  "Node.js",
  "Microsoft SQL Server",
  "MySQL",
  "MongoDB",
  "Relational Database Design",
  "Git",
  "Jira",
  "Maven",
  "Google Cloud",
  "Docker",
];

export const experience = [
  {
    period: "JUN 2022 – AUG 2022 ",
    role: "Software Engineering Intern",
    company: "JP Morgan Chase & Co.",
    summary:
      "Lead the interface layer of a real-time analytics platform — a shader-backed data canvas rendering tens of thousands of points without dropping frames, plus the design system every product team builds on.",
    tech: ["TypeScript", "React", "WebGL", "three.js", "Tailwind", ".Net"],
  },
  {
    period: "MAY 2021 – JUL 2021",
    role: "Software Engineering Intern",
    company: "Northrop Grumman",
    summary:
      "Contributed to the modernization of an enterprise scheduling system using Java, Spring, React, SQL, Maven, and Hibernate, implementing backend services, database integrations, and UI components for scalable and maintainable applications.",
    tech: ["Angular", "React", "GSAP", "Motion", "Next.js", "GLSL"],
  },
  {
    period: "NOV 2020 – JAN 2022",
    role: "Director of Logistics and Hacker Experience",
    company: "KnightHacks",
    summary:
      "Led technical operations and infrastructure for a large-scale software development hackathon, coordinating developers, sponsors, mentors, schedules, workshops, and technical resources across multiple concurrent initiatives.",
    tech: ["JavaScript", "React", "SCSS", "Storybook","EESy", "Argo", "Golang"],
  },
];

export const education = [
  {
    period: "AUG 2019 – DEC 2022",
    degree: "Bachelor's degree in Computer Science",
    school: "University of Central Florida",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
  // {
    // period: "2009 — 2013",
    // degree: "Associate of Science, Mathematics",
    // school: "San Jacinto College",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  // },
];

export const projects = [
  {
    title: "U-Ride",
    year: "SEPT 2021 – DEC 2021",
    description:
      "Full-stack ridesharing application developed using the MERN stack (MongoDB, Express.js, React, Node.js) in a seven-person development team. Designed database structures, contributed to backend/API development, and co-developed the mobile application. Applied collaborative development practices using Git and Visual Studio Live Share.",
    tech: ["MongoDB","Express.js","React.js","Node.js","JavaScript","RESTful APIs","Database Design","Git","Visual Studio Live Share","API Integration","Agile"],
    href: "https://github.com/COP4331-Group3-Fall2021/U-Ride",
  },
  {
    title: "WikiWho",
    year: "SEPT 2021",
    description:
      "Full-stack contacts management application developed using the LAMP stack (Linux, Apache, MySQL, PHP). Designed and implemented database functionality, developed PHP API components, and led quality-assurance activities. Focused on application reliability, database integrity, and functional testing.",
    tech: ["LAMP Stack", "Linux", "Apache", "MySQL", "PHP", "SQL", "REST APIs", "Database Design", "CRUD", "Functional Testing","QA"],
    href: "https://github.com/Naton-1/POOSD-POOP-Group-Small_Project",
  },
  {
    title: "EasyDAW",
    year: "AUG 2018 – MAY 2019",
    description:
      "Java-based music education application developed independently for students and teachers. Designed the application architecture, GUI, relational database, and SQL data layer. Followed a self-managed Scrum methodology throughout development and delivery.",
    tech: ["Java", "OOP", "GUI Development", "SQL", "Relational Databases", "Software Architecture", "Scrum"],
    href: "https://github.com/NYardich/EasyDAW",
  },
  {
    title: "Wildfire Watch",
    year: "2021",
    description:
      "Developed backend services for financial transaction and account-management workflows using C# and ASP.NET Core. Designed REST APIs for financial operations, implemented business validation and transaction processing, and integrated SQL-based data persistence. Added authentication, error handling, logging, and automated testing to improve reliability and maintainability.",
    tech: ["Python", "Computer Vision", "OpenCV", "Google Vision API", "Google Cloud", "Image Processing", "Video Processing", "Geolocation", "REST APIs", "AI/ML"],
    href: "https://devpost.com/software/wildfire-watch-prgh25",
  },
];
