'use client';

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; life: number; size: number; hue: number };

/** Site-wide 🚀 cursor with a particle trail. Rendered once in the root layout. */
export default function GlobalCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rocket = rocketRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !rocket || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // skip touch devices

    const html = document.documentElement;
    html.classList.add("rocket-cursor");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let mx = w / 2;
    let my = h / 2;
    let rx = mx;
    let ry = my;
    let prevRx = rx;
    let prevRy = ry;
    let angle = -Math.PI / 2;
    let active = false;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      active = true;
      rocket.style.opacity = "1";
    };
    const onLeave = () => {
      active = false;
      rocket.style.opacity = "0";
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const particles: Particle[] = [];
    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      const dx = rx - prevRx;
      const dy = ry - prevRy;
      const speed = Math.hypot(dx, dy);
      if (speed > 0.4) angle = Math.atan2(dy, dx);
      rocket.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) rotate(${angle + Math.PI / 4}rad)`;

      const emit = active ? Math.min(5, Math.floor(speed / 1.5) + 1) : 0;
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
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      html.classList.remove("rocket-cursor");
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9998]" />
      <div
        ref={rocketRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] select-none text-[26px] leading-none opacity-0 will-change-transform"
        style={{ filter: "hue-rotate(200deg) saturate(1.25) drop-shadow(0 2px 5px rgba(53,89,233,0.4))" }}
      >
        🚀
      </div>
    </>
  );
}
