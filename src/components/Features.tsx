"use client";

import { useEffect, useState } from "react";
import InteractiveDemo from "./InteractiveDemo";

const ORBIT_ITEMS = [
  { label: "Email", bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-500" },
  { label: "AI Prompt", bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-500" },
  { label: "Notes", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-500" },
  { label: "Slack", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-500" },
  { label: "Tweet", bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-500" },
  { label: "Code", bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-500" },
];

function OrbitVisual() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animId: number;
    function tick() {
      setAngle((prev) => prev + 0.3);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const radius = 130;

  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-gray-200" />
      <div className="absolute inset-[15%] rounded-full border border-gray-200" />
      <div className="absolute inset-[30%] rounded-full border border-gray-200" />

      {/* Core */}
      <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center z-10">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#mic-grad)" strokeWidth="1.5">
          <defs><linearGradient id="mic-grad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        </svg>
      </div>

      {/* Orbiting labels */}
      {ORBIT_ITEMS.map((item, i) => {
        const itemAngle = (angle + (i * 360) / ORBIT_ITEMS.length) * (Math.PI / 180);
        const x = Math.cos(itemAngle) * radius;
        const y = Math.sin(itemAngle) * radius;
        return (
          <div
            key={item.label}
            className={`absolute px-3 py-1.5 rounded-full ${item.bg} border ${item.border} text-xs font-semibold ${item.text} whitespace-nowrap z-20 shadow-sm`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-28px",
              marginTop: "-14px",
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

const LANGUAGES = [
  "English", "Spanish", "Mandarin", "Hindi", "Arabic", "French", "Portuguese", "German",
  "Japanese", "Korean", "Italian", "Russian", "Dutch", "Turkish", "Polish", "Vietnamese",
  "Thai", "Indonesian",
];

/* Reusable white card with subtle gradient border on hover */
function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden ${className}`} data-animate="fade-up" data-delay={delay}>
      {/* Card */}
      <div className="relative rounded-2xl bg-white border border-gray-200 hover:border-indigo-200 p-8 h-full transition-all duration-500 shadow-sm hover:shadow-md">
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="features">
      {/* ============================================================
          SECTION 1 — Wake Word
          ============================================================ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 border border-indigo-200 mb-6">The Killer Feature</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                One wake word.<br /><span className="gradient-text">Infinite formats.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Say <strong className="text-gray-900">&ldquo;NimbusGlide&rdquo;</strong> followed by any instruction to instantly change output format. Email, AI prompt, meeting notes, code comment — mid-conversation, zero friction.
              </p>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                No competitor offers this. WhisperFlow makes you manually toggle modes. With NimbusGlide, your voice is the controller.
              </p>

              {/* Comparison card */}
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">vs WhisperFlow</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">Manual mode toggle</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  <span className="text-sm font-semibold text-indigo-500">Voice-activated, instant</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center" data-animate="fade-up" data-delay="150">
              <OrbitVisual />
            </div>
          </div>

          {/* How it works — 3 steps */}
          <div className="mt-24 pt-20 border-t border-gray-100" id="how-it-works">
            <div className="text-center max-w-[500px] mx-auto mb-14" data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 border border-indigo-200 mb-5">How It Works</span>
              <h3 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900">
                Three steps to <span className="gradient-text">effortless dictation.</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connecting line */}
              <div className="absolute top-[56px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 hidden md:block" />

              {[
                {
                  label: "Step 1", labelColor: "bg-indigo-50 text-indigo-500 border-indigo-200",
                  title: "Speak naturally",
                  desc: "Talk like you normally would — fast, slow, with pauses, with ums. NimbusGlide handles it all.",
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#s1)" strokeWidth="1.5" strokeLinecap="round"><defs><linearGradient id="s1" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>,
                },
                {
                  label: "Step 2", labelColor: "bg-violet-50 text-violet-500 border-violet-200",
                  title: 'Say "NimbusGlide"',
                  desc: "Trigger the wake word and tell it the format — email, AI prompt, notes, code. It instantly restructures your output.",
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#s2)" strokeWidth="1.5" strokeLinecap="round"><defs><linearGradient id="s2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#8b5cf6"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
                },
                {
                  label: "Step 3", labelColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
                  title: "Get polished output",
                  desc: "Perfectly formatted text in 0.2 seconds. Ready to paste into emails, docs, code editors, or anywhere.",
                  icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#s3)" strokeWidth="1.5" strokeLinecap="round"><defs><linearGradient id="s3" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#06b6d4"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                },
              ].map((step, i) => (
                <div key={step.label} className="group" data-animate="fade-up" data-delay={i * 120}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-7 transition-all duration-300 hover:border-indigo-200 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />
                    <div className="relative z-10 mb-5">{step.icon}</div>
                    <span className={`relative z-10 inline-block text-[0.68rem] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border mb-3 ${step.labelColor}`}>{step.label}</span>
                    <h4 className="relative z-10 text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="relative z-10 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo — right after the steps */}
      <InteractiveDemo />

      {/* ============================================================
          SECTION 2 — Context-Aware AI
          ============================================================ */}
      <section className="py-28 relative overflow-hidden bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual — before/after */}
            <div className="order-2 lg:order-1 space-y-4" data-animate="fade-up" data-delay="150">
              <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Other tools</p>
                <p className="text-base text-gray-500">&ldquo;The doctor said to <span className="text-red-500 font-medium line-through">reed</span> the results before the <span className="text-red-500 font-medium line-through">patience</span> arrive&rdquo;</p>
              </div>
              <div className="rounded-xl bg-white border border-emerald-200 shadow-sm p-5">
                <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-2">NimbusGlide</p>
                <p className="text-base text-gray-900">&ldquo;The doctor said to <span className="text-emerald-500 font-semibold">read</span> the results before the <span className="text-emerald-500 font-semibold">patients</span> arrive.&rdquo;</p>
              </div>
            </div>

            <div className="order-1 lg:order-2" data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-500 bg-cyan-50 border border-cyan-200 mb-6">Context-Aware AI</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                It actually<br /><span className="gradient-text">understands you.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                &ldquo;Dr.&rdquo; before a name? Title, not abbreviation. &ldquo;Read&rdquo; in past tense? Got it. &ldquo;Their&rdquo; vs &ldquo;there&rdquo;? Every time.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Our transformer engine doesn&apos;t just match sounds to words — it understands meaning, grammar, and intent simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Speed + Languages + Privacy (3-col cards)
          ============================================================ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Real-Time */}
            <GlassCard>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#speed-grad)" strokeWidth="1.5" className="mb-6">
                <defs><linearGradient id="speed-grad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sub-300ms</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Your words appear the instant you speak. No lag, no buffering.</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-indigo-500 font-semibold">NimbusGlide</span><span className="text-indigo-500">0.3s</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: "15%" }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-400">WhisperFlow</span><span className="text-gray-400">0.6s</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-gray-300 rounded-full" style={{ width: "30%" }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-400">Built-in</span><span className="text-gray-400">1.2s</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-gray-300 rounded-full" style={{ width: "60%" }} /></div>
                </div>
              </div>
            </GlassCard>

            {/* Languages */}
            <GlassCard delay={100}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#lang-grad)" strokeWidth="1.5" className="mb-6">
                <defs><linearGradient id="lang-grad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#22d3ee"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs>
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/><path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/>
              </svg>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">50+ Languages</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Switch mid-sentence. Detects dialects and accents in real-time.</p>
              <div className="flex flex-wrap gap-1.5">
                {LANGUAGES.map((lang, i) => (
                  <span key={lang} className={`px-2 py-1 rounded text-[0.65rem] font-medium border ${i < 3 ? "bg-indigo-50 border-indigo-200 text-indigo-500" : "bg-gray-50 border-gray-200 text-gray-600"}`}>{lang}</span>
                ))}
                <span className="px-2 py-1 rounded text-[0.65rem] font-bold bg-indigo-50 border border-indigo-200 text-indigo-500">+34</span>
              </div>
            </GlassCard>

            {/* Privacy */}
            <GlassCard delay={200}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#priv-grad)" strokeWidth="1.5" className="mb-6">
                <defs><linearGradient id="priv-grad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#10b981"/><stop offset="1" stopColor="#14b8a6"/></linearGradient></defs>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Data Retained</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Your words never leave your device unless you want them to.</p>
              <div className="space-y-3">
                {[
                  "On-device processing",
                  "End-to-end encryption",
                  "Zero retention",
                  "SOC 2 Type II",
                  "HIPAA ready",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Smart Commands
          ============================================================ */}
      <section className="py-28 relative overflow-hidden bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Commands */}
            <div className="order-2 lg:order-1 space-y-3" data-animate="fade-up" data-delay="150">
              {[
                { cmd: "\"New paragraph\"", result: "Inserts a paragraph break", color: "indigo" },
                { cmd: "\"Delete that\"", result: "Removes the last sentence", color: "red" },
                { cmd: "\"Capitalize the title\"", result: "Reformats to Title Case", color: "violet" },
                { cmd: "\"Undo\"", result: "Reverts the last change", color: "amber" },
                { cmd: "\"Read it back\"", result: "Speaks the text aloud", color: "cyan" },
              ].map((c) => (
                <div key={c.cmd} className={`group bg-white border border-gray-200 hover:border-${c.color}-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md`}>
                  <div className="flex items-center gap-4 p-4 rounded-xl">
                    <span className={`font-mono text-sm text-${c.color}-500 bg-${c.color}-50 px-3 py-1.5 rounded-lg font-semibold shrink-0 border border-${c.color}-200`}>{c.cmd}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 shrink-0"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    <span className="text-sm text-gray-500">{c.result}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2" data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-pink-500 bg-pink-50 border border-pink-200 mb-6">Smart Commands</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                Edit with<br /><span className="gradient-text">your voice.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Say &ldquo;new paragraph,&rdquo; &ldquo;delete that,&rdquo; or &ldquo;capitalize the title&rdquo; — NimbusGlide executes voice commands naturally.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Not a clunky command system. Natural language instructions inline with your dictation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
