"use client";

const steps = [
  {
    label: "Step 1",
    labelColor: "bg-indigo-50 text-indigo-500 border-indigo-200",
    title: "Speak naturally",
    description:
      "Talk like you normally would — fast, slow, with pauses, with ums. No special cadence. NimbusGlide handles it all.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#grad-indigo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
      </svg>
    ),
  },
  {
    label: "Step 2",
    labelColor: "bg-violet-50 text-violet-500 border-violet-200",
    title: "Say \u201cNimbusGlide\u201d",
    description:
      "Trigger the wake word and tell it the format — email, AI prompt, notes, code. It instantly restructures your output.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#grad-violet)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#c084fc"/></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Step 3",
    labelColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    title: "Get polished output",
    description:
      "Perfectly formatted text in 0.2 seconds. Ready to paste into emails, docs, code editors, or anywhere.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#grad-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-gray-50" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-20" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 border border-indigo-200 mb-6">How It Works</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Three steps to<br /><span className="gradient-text">effortless dictation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting gradient line */}
          <div className="absolute top-[64px] left-[16.66%] right-[16.66%] h-px hidden md:block">
            <div className="w-full h-full bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300" />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="group relative" data-animate="fade-up" data-delay={i * 150}>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-400 hover:border-indigo-200 hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 relative overflow-hidden">
                {/* Shimmer on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-indigo-500/[0.03] to-transparent pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 mb-6">{step.icon}</div>

                {/* Step pill */}
                <span className={`relative z-10 inline-block text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${step.labelColor}`}>
                  {step.label}
                </span>

                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
