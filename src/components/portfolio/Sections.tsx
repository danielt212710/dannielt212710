import { motion } from "motion/react";
import {
  ArrowUpRight,
  Atom,
  Boxes,
  Box,
  Wind,
  Sparkles,
  Hexagon,
  Zap,
  Accessibility,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { about, education, experience, profile, projects, stack } from "@/data/portfolio";

const skillIcons: Record<string, LucideIcon> = {
  TypeScript: Atom,
  React: Atom,
  "WebGL / GLSL": Boxes,
  "three.js": Box,
  Motion: Sparkles,
  "Tailwind CSS": Wind,
  "Node.js": Hexagon,
  Vite: Zap,
  Accessibility: Accessibility,
  "Design Systems": LayoutGrid,
};

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-8 bg-background/70 px-6 py-4 font-mono text-xs uppercase tracking-[0.3em] text-highlight backdrop-blur-md lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
      {children}
    </h2>
  );
}

function Tag({ children, icon: Icon }: { children: string; icon?: LucideIcon | undefined }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-wide text-highlight">
      {Icon ? <Icon className="size-3 shrink-0" strokeWidth={2.2} /> : null}
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 lg:py-20" aria-label="About">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-muted-foreground">
        {about.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {stack.map((s) => {
            const Icon = skillIcons[s] ?? Atom;
            return (
              <li key={s}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-surface/30 px-3 py-4 text-center transition-colors hover:border-primary/50 hover:bg-surface/50 hover:shadow-glow"
                >
                  <Icon className="size-6 text-highlight transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                  <span className="font-mono text-[11px] tracking-wide text-muted-foreground transition-colors group-hover:text-highlight">
                    {s}
                  </span>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 lg:py-20" aria-label="Experience">
      <SectionHeading>Experience</SectionHeading>
      <ol className="space-y-4">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group grid gap-3 rounded-xl border border-transparent p-5 transition-colors hover:border-primary/30 hover:bg-surface/40 hover:shadow-glow sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-1">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-highlight">
                    {job.role} · {job.company}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{job.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-12 lg:py-20" aria-label="Education">
      <SectionHeading>Education</SectionHeading>
      <ol className="space-y-4">
        {education.map((e, i) => (
          <li key={e.degree}>
            <Reveal delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group grid gap-3 rounded-xl border border-transparent p-5 transition-colors hover:border-primary/30 hover:bg-surface/40 hover:shadow-glow sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-1">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-highlight">
                    {e.degree}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-highlight">{e.school}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 lg:py-20" aria-label="Projects">
      <SectionHeading>Projects</SectionHeading>
      <ol className="space-y-4">
        {projects.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.04}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group grid gap-3 rounded-xl border border-transparent p-5 transition-colors hover:border-primary/30 hover:bg-surface/40 hover:shadow-glow sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-1">
                  {p.year}
                </p>
                <div>
                  <h3 className="flex items-center gap-1.5 font-display text-base font-semibold text-foreground transition-colors group-hover:text-highlight">
                    {p.title}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <footer className="py-12 lg:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Let's build something with texture.
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          I'm open to frontend and creative engineering work. The fastest way to reach me is
          email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-highlight transition-all duration-300 hover:bg-primary/20 hover:shadow-glow"
        >
          {profile.email}
          <ArrowUpRight className="size-4" />
        </a>
        <p className="mt-12 font-mono text-[11px] text-muted-foreground">
          Built with React, TanStack Start, WebGL and far too many easing curves.
        </p>
      </Reveal>
    </footer>
  );
}
