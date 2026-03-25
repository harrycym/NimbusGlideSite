"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, gx = 0, gy = 0;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let animId: number;
    function tick() {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      el!.style.left = gx + "px";
      el!.style.top = gy + "px";
      animId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
      style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
    />
  );
}
