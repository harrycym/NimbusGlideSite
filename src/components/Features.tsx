"use client";

import { useEffect, useState } from "react";

const ORBIT_ITEMS = [
  { label: "Email", bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-600" },
  { label: "AI Prompt", bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600" },
  { label: "Notes", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600" },
  { label: "Slack", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600" },
  { label: "Tweet", bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-600" },
  { label: "Code", bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600" },
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

  const radius = 140;

  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-indigo-500/10" />
      <div className="absolute inset-[15%] rounded-full border border-violet-500/10" />
      <div className="absolute inset-[30%] rounded-full border border-cyan-500/10" />

      {/* Core */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.3)] z-10">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
      </div>

      {/* Orbiting labels */}
      {ORBIT_ITEMS.map((item, i) => {
        const itemAngle = (angle + (i * 360) / ORBIT_ITEMS.length) * (Math.PI / 180);
        const x = Math.cos(itemAngle) * radius;
        const y = Math.sin(itemAngle) * radius;

        return (
          <div
            key={item.label}
            className={`absolute px-3.5 py-1.5 rounded-full ${item.bg} border ${item.border} text-xs font-bold ${item.text} shadow-sm whitespace-nowrap z-20`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-30px",
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
  "Thai", "Indonesian", "Swedish", "Greek", "Czech", "Romanian", "Hungarian", "Hebrew",
  "Danish", "Finnish", "Norwegian", "Ukrainian", "Malay", "Filipino", "Bengali", "Tamil",
  "Swahili", "Catalan", "Croatian", "Slovak", "Lithuanian", "Slovenian", "Latvian", "Estonian",
  "Urdu", "Persian", "Kannada", "Telugu", "Marathi", "Gujarati", "Malayalam", "Burmese",
  "Nepali", "Sinhala", "Afrikaans", "Welsh",
];

export default function Features() {
  return (
    <div id="features">
      {/* ============================================================
          SECTION 1 — Wake Word Mode Switching (the killer feature)
          ============================================================ */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-6">The Killer Feature</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                One wake word.<br /><span className="gradient-text">Infinite formats.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Say <strong className="text-gray-700">&ldquo;NimbusGlide&rdquo;</strong> followed by any instruction to instantly change output format. Email, AI prompt, meeting notes, code comment — mid-conversation, zero friction.
              </p>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                No competitor offers this. WhisperFlow makes you manually toggle modes. With NimbusGlide, your voice is the controller.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {["Wake Word", "Mode Switch", "Zero Friction"].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-500 bg-indigo-500/[0.08]">{tag}</span>
                ))}
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">vs WhisperFlow</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">Manual mode toggle</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  <span className="text-sm font-semibold text-indigo-600">Voice-activated, instant</span>
                </div>
              </div>
            </div>

            {/* Visual — real orbiting modes */}
            <div className="flex items-center justify-center" data-animate="fade-up" data-delay="150">
              <OrbitVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Context-Aware AI
          ============================================================ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual — before/after comparison */}
            <div className="order-2 lg:order-1" data-animate="fade-up" data-delay="150">
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Other tools</p>
                  <p className="text-base text-gray-400">&ldquo;The doctor said to <span className="text-red-400 font-medium line-through">reed</span> the results before the <span className="text-red-400 font-medium line-through">patience</span> arrive&rdquo;</p>
                </div>
                <div className="p-5 rounded-xl bg-violet-50 border border-violet-200 shadow-sm">
                  <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-2">NimbusGlide</p>
                  <p className="text-base text-gray-800">&ldquo;The doctor said to <span className="text-emerald-600 font-semibold">read</span> the results before the <span className="text-emerald-600 font-semibold">patients</span> arrive.&rdquo;</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2" data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-600 bg-cyan-500/[0.08] mb-6">Context-Aware AI</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                It actually<br /><span className="gradient-text">understands you.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                &ldquo;Dr.&rdquo; before a name? That&apos;s a title, not an abbreviation. &ldquo;Read&rdquo; in past context? Got it. &ldquo;Their&rdquo; vs &ldquo;there&rdquo;? Nailed every time.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Our transformer-based engine doesn&apos;t just match sounds to words — it understands meaning, grammar, and intent simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Real-Time Streaming
          ============================================================ */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-600 bg-violet-500/[0.08] mb-6">Real-Time</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                Sub-300ms.<br /><span className="gradient-text">Zero buffering.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Your words appear the instant you speak them. No lag, no loading spinner, no waiting for a chunk to process. Just continuous, fluid text.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-gray-900 tracking-tight">0.3s</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Latency</span>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-gray-900 tracking-tight">50%</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Faster than competitors</span>
                </div>
              </div>
            </div>

            {/* Visual — speed bars */}
            <div className="space-y-4" data-animate="fade-up" data-delay="150">
              <div className="p-5 rounded-xl bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">NimbusGlide</span>
                  <span className="text-xs font-bold text-emerald-600">0.3s</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: "15%" }} />
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-400">WhisperFlow</span>
                  <span className="text-xs font-bold text-gray-400">0.6s</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: "30%" }} />
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-400">Built-in Dictation</span>
                  <span className="text-xs font-bold text-gray-400">1.2s</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Smart Commands
          ============================================================ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual — command examples */}
            <div className="order-2 lg:order-1 space-y-3" data-animate="fade-up" data-delay="150">
              {[
                { cmd: "\"New paragraph\"", result: "Inserts a paragraph break" },
                { cmd: "\"Delete that\"", result: "Removes the last sentence" },
                { cmd: "\"Capitalize the title\"", result: "Reformats to Title Case" },
                { cmd: "\"Undo\"", result: "Reverts the last change" },
                { cmd: "\"Read it back\"", result: "Speaks the text aloud" },
              ].map((c) => (
                <div key={c.cmd} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <span className="font-mono text-sm text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg font-semibold shrink-0">{c.cmd}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 shrink-0"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  <span className="text-sm text-gray-500">{c.result}</span>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2" data-animate="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-pink-600 bg-pink-500/[0.08] mb-6">Smart Commands</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
                Edit with<br /><span className="gradient-text">your voice.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                No keyboard needed. Say &ldquo;new paragraph,&rdquo; &ldquo;delete that,&rdquo; or &ldquo;capitalize the title&rdquo; — NimbusGlide executes voice commands naturally, without breaking your flow.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                It&apos;s not a clunky command system. NimbusGlide understands natural language instructions inline with your dictation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — 50+ Languages & Privacy (combined)
          ============================================================ */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-16" data-animate="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-500/[0.08] mb-6">Global & Secure</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-6">
              50+ languages.<br /><span className="gradient-text">Zero data retained.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Switch between languages mid-sentence — NimbusGlide detects and adapts in real-time. And your words never leave your machine unless you want them to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Languages card */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200" data-animate="fade-up">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/><path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Every language. Every accent.</h3>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                Speak in English, switch to Spanish mid-sentence, throw in some Mandarin — NimbusGlide follows along. Full support for dialects and regional accents.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {LANGUAGES.slice(0, 24).map((lang) => (
                  <span key={lang} className="px-2.5 py-1 rounded-full text-[0.7rem] font-medium text-gray-500 bg-white border border-gray-200">{lang}</span>
                ))}
                <span className="px-2.5 py-1 rounded-full text-[0.7rem] font-bold text-indigo-500 bg-indigo-50 border border-indigo-200">+28 more</span>
              </div>
            </div>

            {/* Privacy card */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200" data-animate="fade-up" data-delay="100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your words. Your device. Period.</h3>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                On-device processing for sensitive content. End-to-end encryption when cloud processing is used. Zero data retention — we don&apos;t store, sell, or train on your dictation. Ever.
              </p>
              <div className="space-y-3">
                {[
                  "On-device processing available",
                  "End-to-end encryption",
                  "Zero data retention",
                  "SOC 2 Type II compliant",
                  "HIPAA ready",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
