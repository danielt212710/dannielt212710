import { Suspense, lazy, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";

const ShaderScene = lazy(() => import("./ShaderScene"));

function useCanRenderShader() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 2;
    setOk(!reduced && !small && !lowCores);
  }, []);

  return ok;
}

function Spotlight() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 65%)`,
      }}
    />
  );
}

function ShaderLayer() {
  const canRender = useCanRenderShader();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (!canRender || !visible) return null;

  return (
    <div aria-hidden className="fixed inset-0 -z-10 opacity-70">
      <Suspense fallback={null}>
        <ShaderScene />
      </Suspense>
    </div>
  );
}

export function BackgroundFX() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-[radial-gradient(120%_90%_at_20%_0%,color-mix(in_oklab,var(--color-surface)_75%,transparent),transparent_60%)] bg-background"
      />
      <ClientOnly fallback={null}>
        <ShaderLayer />
        <Spotlight />
      </ClientOnly>
    </>
  );
}
