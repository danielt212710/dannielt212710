export const profile = {
  name: "Sangeet Asati",
  title: "Software Engineer",
  tagline:
    "Software Engineer with a strong foundation in Java, C#, SQL, full-stack development, software architecture, and automated testing, with experience in AI development and integrating AI-powered solutions into applications. Skilled in building and maintaining production-ready applications using Spring, React, Node.js, REST APIs, relational databases, and modern development tools.",
  email: "sangeetasati930@gmail.com",
  socials: [
    // { label: "GitHub", href: "https://github.com/NYardich" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sangeetasati/" },
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
    period: "Nov 2022 – Sep 2026",
    role: "Senior Software Engineer",
    company: "FactSet",
    summary:
      "Working in the IBS team to design and develop scalable, high-performance applications using modern technologies, ensuring optimized performance and reliability.",
    tech: ["Python", "React", "AI", "AWS", "Cloud Computing", "Node.js", "C#", ".Net"],
  },
  {
    period: "Jul 2017 – Nov 2022 ",
    role: "Senior Software Engineer",
    company: "megidi",
    summary:
      "Built secure pharmaceutical ordering and compliance systems using Python, Flask, REST APIs, DEA Schedule II regulations, digital signatures, and EDI X12 integrations, including 340B pricing, drug-shortage tracking, and automated product matching.Designed asynchronous processing and backend integrations using Celery, AWS SQS, Kubernetes, OpenSearch, MySQL, and external APIs, while integrating QuickBooks Online, HubSpot, and SendGrid to automate accounting, CRM synchronization, and transactional notifications, reducing manual bookkeeping by approximately 90%.Developed responsive web applications using Angular, AngularJS, DevExtreme, Bootstrap, and Flask REST APIs, implementing dashboards, server-side data processing, automated testing, API integration, deployment pipelines, and development documentation across development, staging, and production environments.",
    tech: ["TypeScript", "React", "WebGL", "three.js", "Angular", "Java", ".Net", "Docker", "Python"],
  },
  {
    period: "Jan 2017 – May 2018",
    role: "Graduate Teaching Assistant",
    company: "University of Central Florida",
    summary:
      "Worked under the Professor Dr. Whiting throughout the semester and helped her to design assignment for course Internet Applications. Main responsibilities were to Grade the assignment and record them using UCF Grading Tool. Give some office hours to the course students for clarifying their doubts regarding the topic of Internet Applications.",
    tech: ["Teaching Assistance", "Assignment Grading", "Student Support", "Internet Applications", "Academic Assessment"],
  },
  {
    period: "Oct 2015 – Apr 2016",
    role: "Web Developer",
    company: "Peersome",
    summary:
      "As a member of the web development team, developed responsive websites and dynamic single-page applications using HTML, CSS, AngularJS, and REST APIs; designed interactive UI/UX for web and mobile platforms using Adobe Photoshop and Illustrator; built reusable code libraries; maintained and optimized websites for SEO; and created client surveys to gather feedback and improve user experience.",
    tech: ["JavaScript", "React", "SCSS", "Java", "Storybook","EESy", "Argo", "Golang"],
  },
];

export const education = [
  {
    period: "2016 – May 2018",
    degree: "Master's Degree in Computer Science",
    school: "University of Central Florida",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
  {
    period: "2011 — 2015",
    degree: "Bachelor’s Degree in Computer Science",
    school: "University Institute of Technology, RGPV",
    // summary:
    //   "Thesis on real-time GPU noise fields for large-scale terrain rendering. Coursework in shading languages, numerical methods and human-computer interaction.",
    // tech: ["GLSL", "C++", "OpenGL", "Research"],
  },
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
