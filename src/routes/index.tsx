import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { About, Contact, Education, Experience, Projects } from "@/components/portfolio/Sections";
import { sections } from "@/data/portfolio";

const title = "Daniel Tupa — Frontend Engineer & Creative Developer";
const description =
  "Portfolio of Daniel Tupa, a frontend engineer building immersive, high-performance interfaces with React, WebGL and motion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useActiveSection() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

function Index() {
  const active = useActiveSection();

  return (
    <main className="relative min-h-screen text-foreground">
      <BackgroundFX />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:flex lg:justify-between lg:gap-12 lg:py-0">
        <Sidebar active={active} />
        <div className="lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
