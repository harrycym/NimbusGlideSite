"use client";

import { useEffect, useRef, useState } from "react";

/* Animated counter that counts up when scrolled into view */
function CountUp({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
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
          const duration = 2200;
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            el!.textContent = (eased * target).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
            else el!.textContent = target.toFixed(decimals) + suffix;
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

/* Animated progress bar that fills when scrolled into view */
function AnimatedBar({ width, color, delay = 0 }: { width: string; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setTimeout(() => setVisible(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, visible]);

  return (
    <div ref={ref} className="h-3 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-[1.8s] ease-out ${color}`}
        style={{ width: visible ? width : "0%" }}
      />
    </div>
  );
}

export default function SpeedSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-indigo-500/[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-20" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 border border-indigo-200 mb-6">
            Why Voice?
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.08] tracking-[-0.04em] text-gray-900 mb-6">
            Speaking is{" "}
            <span className="gradient-text">
              <CountUp target={3} suffix="x" />
            </span>{" "}
            faster<br />than typing.
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            The average person types 40 words per minute. They speak 150. That&apos;s hours of your life back — every single week.
          </p>
        </div>

        {/* Speed comparison visual */}
        <div className="max-w-[800px] mx-auto mb-20" data-animate="fade-up" data-delay="150">
          <div className="glow-card glow-border bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500" data-tilt>
            {/* Typing */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><line x1="6" y1="8" x2="6" y2="8" /><line x1="10" y1="8" x2="10" y2="8" /><line x1="14" y1="8" x2="14" y2="8" /><line x1="18" y1="8" x2="18" y2="8" /><line x1="6" y1="12" x2="18" y2="12" /><line x1="6" y1="16" x2="10" y2="16" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-400">Typing</span>
                </div>
                <span className="text-sm font-bold text-gray-400 tabular-nums">~40 WPM</span>
              </div>
              <AnimatedBar width="27%" color="bg-gray-300" />
            </div>

            {/* Speaking with NimbusGlide */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#speed-mic)" strokeWidth="2" strokeLinecap="round">
                      <defs><linearGradient id="speed-mic" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs>
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">NimbusGlide</span>
                </div>
                <span className="text-sm font-bold text-indigo-500 tabular-nums">~150 WPM</span>
              </div>
              <AnimatedBar width="100%" color="bg-gradient-to-r from-indigo-500 to-violet-500" delay={400} />
            </div>
          </div>
        </div>

        {/* Impact stats */}
        <div className="grid md:grid-cols-3 gap-6" data-animate="fade-up" data-delay="300">
          {[
            {
              value: 21,
              suffix: "hrs",
              label: "Saved per month",
              desc: "Based on 3 hours of daily text input at average typing speed",
              gradient: "from-indigo-500 to-violet-500",
              bg: "bg-indigo-50",
              border: "border-indigo-200",
            },
            {
              value: 73,
              suffix: "%",
              label: "Less physical strain",
              desc: "Reduced repetitive stress from keyboard use, wrists and fingers rest",
              gradient: "from-violet-500 to-purple-500",
              bg: "bg-violet-50",
              border: "border-violet-200",
            },
            {
              value: 3.7,
              suffix: "x",
              decimals: 1,
              label: "More words captured",
              desc: "Thoughts flow faster when you speak — no more lost ideas while typing",
              gradient: "from-cyan-500 to-blue-500",
              bg: "bg-cyan-50",
              border: "border-cyan-200",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="group glow-card glow-border bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-indigo-200 hover:shadow-lg hover-lift transition-all duration-500"
              data-tilt
              data-animate="fade-up"
              data-delay={300 + i * 100}
            >
              <div className={`text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-[-0.04em] bg-gradient-to-r ${stat.gradient} bg-clip-text`} style={{ WebkitTextFillColor: "transparent" }}>
                <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </div>
              <p className="text-base font-bold text-gray-900 mt-2 mb-2">{stat.label}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
