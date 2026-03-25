"use client";

import { useEffect, useRef, useState } from "react";
import WakeWordDemo from "./WakeWordDemo";

function CountUp({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const duration = 2000;
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el!.textContent = (eased * target).toFixed(decimals);
            if (progress < 1) requestAnimationFrame(tick);
            else el!.textContent = target.toFixed(decimals);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>0</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background orbs + grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/[0.12] -top-[200px] -right-[100px] blur-[80px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-500/[0.1] -bottom-[100px] -left-[100px] blur-[80px] animate-[float_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/[0.08] top-1/2 left-1/2 blur-[80px] animate-[float_18s_ease-in-out_infinite_5s]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div className="max-w-[560px] lg:max-w-none">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.82rem] font-semibold text-indigo-500 bg-indigo-500/[0.06] border border-indigo-500/10 mb-7" data-animate="fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse-dot_2s_ease-in-out_infinite]" />
            Coming Soon — Join the Waitlist
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4rem)] font-black leading-[1.08] tracking-[-0.04em] text-gray-900 mb-6" data-animate="fade-up" data-delay="100">
            Say the word.<br />
            <span className="gradient-text">Change the mode.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-4" data-animate="fade-up" data-delay="200">
            NimbusGlide is AI dictation that doesn&apos;t just transcribe — it <em className="not-italic text-indigo-500 font-medium">understands context</em>.
            Say <strong className="text-gray-700">&ldquo;NimbusGlide&rdquo;</strong> at any time to switch modes on the fly.
          </p>

          <p className="text-base text-gray-400 leading-relaxed mb-9" data-animate="fade-up" data-delay="250">
            Dictating an email? Say <span className="font-mono text-sm text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded">&ldquo;NimbusGlide, draft this as an email&rdquo;</span>. Need an AI prompt? <span className="font-mono text-sm text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded">&ldquo;NimbusGlide, make this an AI prompt&rdquo;</span>. It just works.
          </p>

          <div className="flex gap-4 mb-12 flex-wrap" data-animate="fade-up" data-delay="300">
            <a href="#try-it" className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_2px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              Try Live
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-semibold text-gray-700 border border-gray-200 rounded-full hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-500/[0.04] transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Demo
            </a>
          </div>

          <div className="flex items-center gap-7" data-animate="fade-up" data-delay="400">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight tabular-nums">
                <CountUp target={99.2} decimals={1} /><span className="text-lg font-bold text-indigo-500">%</span>
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Accuracy</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight tabular-nums">
                <CountUp target={50} /><span className="text-lg font-bold text-indigo-500">+</span>
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Languages</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight tabular-nums">
                <CountUp target={0.3} decimals={1} /><span className="text-lg font-bold text-indigo-500">s</span>
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Latency</span>
            </div>
          </div>
        </div>

        {/* Right — Interactive wake word demo */}
        <div className="relative" data-animate="fade-up" data-delay="350">
          <WakeWordDemo />
        </div>
      </div>
    </section>
  );
}
