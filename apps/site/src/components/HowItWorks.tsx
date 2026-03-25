"use client";

const STEPS = [
  {
    num: "01",
    title: "Speak naturally",
    desc: "No special cadence needed. Talk like you normally would — fast, slow, with pauses, with ums. NimbusGlide handles it all.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
    ),
  },
  {
    num: "02",
    title: 'Say "NimbusGlide" to switch',
    desc: "Trigger the wake word at any point. Tell it the format you want — email, AI prompt, notes, code — and it instantly restructures your output.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    num: "03",
    title: "Get polished output",
    desc: "Perfectly formatted text ready to paste into emails, docs, code editors, or anywhere. Grammar, punctuation, and structure — all handled.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-gray-50" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">How It Works</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Three steps to<br /><span className="gradient-text">effortless dictation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative text-center" data-animate="fade-up" data-delay={i * 150}>
              <div className="text-[4rem] font-black leading-none bg-gradient-to-b from-gray-200 to-gray-100 bg-clip-text text-transparent mb-6">
                {step.num}
              </div>
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-6 text-indigo-500 transition-all duration-400 hover:border-indigo-400 hover:shadow-[0_0_60px_rgba(99,102,241,0.15)] hover:scale-105">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-[120px] -right-5 w-10 h-0.5 bg-gray-200 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
