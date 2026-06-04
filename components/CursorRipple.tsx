'use client';

import { useEffect, useRef } from "react";

type Ripple = { x: number; y: number; r: number; life: number };

/**
 * Lightweight canvas "water ripple" that trails the cursor across its parent.
 * Spawns expanding, fading brand-blue rings as the pointer moves.
 */
export default function CursorRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const ripples: Ripple[] = [];
    let lastX = -999;
    let lastY = -999;

    const onMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (Math.hypot(x - lastX, y - lastY) > 26) {
        ripples.push({ x, y, r: 4, life: 1 });
        lastX = x;
        lastY = y;
        if (ripples.length > 36) ripples.shift();
      }
    };
    parent.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 2.6;
        rp.life -= 0.016;
        if (rp.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        const a = rp.life * rp.life;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(53,89,233,${0.20 * a})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        // soft inner echo for a more water-like feel
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r * 0.62, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(4,200,249,${0.12 * a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 z-[1]" />;
}
