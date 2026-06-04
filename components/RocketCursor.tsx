'use client';

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; life: number; size: number; hue: number };

/**
 * Replaces the cursor with a 🚀 over the hero and emits a fading particle trail.
 */
export default function RocketCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rocket = rocketRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !rocket || !parent || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // skip touch devices

    parent.style.cursor = "none";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let mx = w / 2;
    let my = h / 2;
    let rx = mx;
    let ry = my;
    let prevRx = rx;
    let prevRy = ry;
    let angle = -Math.PI / 2;
    let inside = false;

    const onMove = (event: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      mx = event.clientX - r.left;
      my = event.clientY - r.top;
      inside = true;
      rocket.style.opacity = "1";
    };
    const onLeave = () => {
      inside = false;
      rocket.style.opacity = "0";
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    const particles: Particle[] = [];
    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      const dx = rx - prevRx;
      const dy = ry - prevRy;
      const speed = Math.hypot(dx, dy);
      if (speed > 0.4) angle = Math.atan2(dy, dx);
      // 🚀 nose points up-right (-45°); rotate so it faces travel direction
      rocket.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) rotate(${angle + Math.PI / 4}rad)`;

      const emit = inside ? Math.min(5, Math.floor(speed / 1.5) + 1) : 0;
      for (let i = 0; i < emit; i++) {
        particles.push({
          x: rx - Math.cos(angle) * 11 + (Math.random() - 0.5) * 7,
          y: ry - Math.sin(angle) * 11 + (Math.random() - 0.5) * 7,
          vx: -dx * 0.12 + (Math.random() - 0.5) * 0.9,
          vy: -dy * 0.12 + (Math.random() - 0.5) * 0.9 + 0.25,
          life: 1,
          size: 1.4 + Math.random() * 2.6,
          hue: 212 + Math.random() * 30,
        });
        if (particles.length > 260) particles.shift();
      }
      prevRx = rx;
      prevRy = ry;

      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.vy += 0.012;
        pt.life -= 0.022;
        if (pt.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${pt.hue}, 92%, 62%, ${0.55 * pt.life})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
      parent.style.cursor = "";
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 z-[2]" />
      <div
        ref={rocketRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[45] select-none text-[26px] leading-none opacity-0 will-change-transform"
        style={{ filter: "drop-shadow(0 2px 5px rgba(16,24,40,0.28))" }}
      >
        🚀
      </div>
    </>
  );
}
