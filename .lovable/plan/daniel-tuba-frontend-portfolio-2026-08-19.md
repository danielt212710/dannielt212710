# Daniel Tuba — Frontend Portfolio

A single-page portfolio inspired by brittanychiang.com, but with its own identity: a neon-mint-on-deep-navy palette, a live WebGL background, and motion throughout.

## Layout

Sticky-left / scrolling-right split, like the reference:

```text
+---------------------+-----------------------------+
|  Daniel Tuba        |  ABOUT                      |
|  Frontend Engineer  |  ...                        |
|  short blurb        |                             |
|                     |  EXPERIENCE                 |
|  · About            |  role cards                 |
|  · Experience       |                             |
|  · Projects         |  PROJECTS                   |
|                     |  project cards              |
|  social icons       |  CONTACT / footer           |
+---------------------+-----------------------------+
```

On mobile it collapses to a single stacked column with the intro on top.

## Visual effects

- **WebGL background (subtle, level 2):** a full-viewport animated shader canvas behind the content — slow-flowing mint/teal gradient noise with a soft grain, reacting gently to cursor position and scroll. Sits behind everything at low opacity, pauses when the tab is hidden, and is disabled for reduced-motion users and very small/low-power screens (static gradient fallback).
- **Cursor spotlight:** a soft radial glow following the pointer, layered over the shader (desktop only).
- **Scroll motion:** section headings and cards fade/slide in on first view; nav item on the left highlights the section currently in view.
- **Micro-interactions:** project and experience cards lift with a mint border glow and slight image scale on hover; links get an animated underline; hero text does a staggered reveal on load.

## Content

Placeholder-but-realistic copy for Daniel Tuba, Frontend Engineer — an about paragraph, 3 experience entries, 4–5 project cards with tech tags, and a tech-stack list. All plain text in one data file so it is trivial to swap for real details later.

## Design system

- Palette: `#0d1b2a` base, `#1b4332` deep surface, `#2dd4a8` primary accent, `#73ffb8` highlight — added as semantic tokens (background, surface, primary, accent, glow) in `src/styles.css` using oklch. No hardcoded color classes in components.
- Typography: geometric sans for headings, clean sans for body, loaded via a `<link>` in the root route.

## Technical notes

- Single route: rewrite `src/routes/index.tsx` with its own SEO head (title, description, og/twitter tags); sections split into components under `src/components/portfolio/`.
- 3D layer: `three` + `@react-three/fiber` rendering one fullscreen shader plane, lazy-loaded client-side only (dynamic import behind a hydration gate) so SSR is unaffected.
- Animation: `motion` (Motion for React) for reveals and hover states; IntersectionObserver drives the active-nav highlight.
- No backend needed; the contact section is a mailto link.
