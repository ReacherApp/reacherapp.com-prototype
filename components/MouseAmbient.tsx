'use client';

import { useEffect, useRef } from "react";

/**
 * motion.page-style "mouse movement": a soft brand glow that smoothly (eased)
 * follows the cursor, plus a parallax background bloom that drifts with it.
 * Renders into its parent (the hero <section>).
 */
export default function MouseAmbient() {
  const glowRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const bloom = bloomRef.current;
    const parent = glow?.parentElement;
    if (!glow || !bloom || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // target (tx,ty) and smoothed (cx,cy) normalized positions
    let tx = 0.5;
    let ty = 0.32;
    let cx = tx;
    let cy = ty;
    let active = false;

    const onMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      tx = (event.clientX - rect.left) / rect.width;
      ty = (event.clientY - rect.top) / rect.height;
      active = true;
    };
    const onLeave = () => {
      active = false;
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      // smoothing (the "smooth" option in motion.page)
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      glow.style.left = `${cx * 100}%`;
      glow.style.top = `${cy * 100}%`;
      glow.style.opacity = active ? "1" : "0";
      // gentle parallax: bloom drifts opposite the cursor
      bloom.style.transform = `translate(calc(-50% + ${(cx - 0.5) * -54}px), ${(cy - 0.5) * -26}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={bloomRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-150px] h-[520px] w-[78%] max-w-[980px] -translate-x-1/2 rounded-[100%] bg-[#6f9eff]/15 blur-[120px] will-change-transform"
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,89,233,0.16),rgba(4,200,249,0.06)_45%,transparent_68%)] opacity-0 blur-[36px] transition-opacity duration-500 will-change-[left,top]"
        style={{ left: "50%", top: "32%" }}
      />
    </>
  );
}
