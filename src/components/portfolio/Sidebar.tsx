import { motion } from "motion/react";
import { profile, sections } from "@/data/portfolio";

export function Sidebar({ active }: { active: string }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.p
          {...stagger(0)}
          className="font-mono text-xs uppercase tracking-[0.35em] text-primary"
        >
          Portfolio — 2026
        </motion.p>
        <motion.h1
          {...stagger(1)}
          className="mt-5 font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          {...stagger(2)}
          className="mt-3 font-display text-lg font-medium text-highlight sm:text-xl"
        >
          {profile.title}
        </motion.h2>
        <motion.p {...stagger(3)} className="mt-5 max-w-sm text-muted-foreground">
          {profile.tagline}
        </motion.p>

        <motion.nav {...stagger(4)} className="mt-16 hidden lg:block" aria-label="Sections">
          <ul className="space-y-4">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 py-1"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-highlight"
                          : "w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                        isActive
                          ? "text-highlight"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>

      <motion.ul {...stagger(5)} className="mt-12 flex flex-wrap gap-5">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-highlight after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-highlight after:transition-all after:duration-300 hover:after:w-full"
            >
              {s.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </header>
  );
}
