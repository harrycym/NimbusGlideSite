"use client";

const steps = [
  {
    label: "Step 1",
    labelColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
    title: "Speak naturally",
    description:
      "Talk like you normally would — fast, slow, with pauses, with ums. No special cadence. NimbusGlide handles it all.",
    iconColor: "text-indigo-400",
    borderGradient: "from-indigo-500/20 via-transparent to-violet-500/20",
    borderGradientHover: "group-hover:from-indigo-500/50 group-hover:via-indigo-500/10 group-hover:to-violet-500/50",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#grad-indigo)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </svg>
    ),
  },
  {
    label: "Step 2",
    labelColor: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    title: "Say \u201cNimbusGlide\u201d",
    description:
      "Trigger the wake word and tell it the format — email, AI prompt, notes, code. It instantly restructures your output.",
    iconColor: "text-violet-400",
    borderGradient: "from-violet-500/20 via-transparent to-fuchsia-500/20",
    borderGradientHover: "group-hover:from-violet-500/50 group-hover:via-violet-500/10 group-hover:to-fuchsia-500/50",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#grad-violet)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Step 3",
    labelColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    title: "Get polished output",
    description:
      "Perfectly formatted text in 0.2 seconds. Ready to paste into emails, docs, code editors, or anywhere.",
    iconColor: "text-cyan-400",
    borderGradient: "from-cyan-500/20 via-transparent to-blue-500/20",
    borderGradientHover: "group-hover:from-cyan-500/50 group-hover:via-cyan-500/10 group-hover:to-blue-500/50",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#grad-cyan)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 relative overflow-hidden" id="how-it-works">
      {/* Dark background with subtle radial gradients */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-[640px] mx-auto mb-20" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-6">
            How It Works
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-white mb-5">
            Three steps to
            <br />
            <span className="gradient-text">effortless dictation.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting gradient line between steps */}
          <div className="absolute top-[72px] left-[16.66%] right-[16.66%] h-px hidden md:block">
            <div className="w-full h-full bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-cyan-500/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 blur-sm" />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative"
              data-animate="fade-up"
              data-delay={i * 150}
            >
              {/* Gradient border wrapper */}
              <div
                className={`relative rounded-2xl p-px bg-gradient-to-r ${step.borderGradient} ${step.borderGradientHover} transition-all duration-500`}
              >
                {/* Hover glow effect behind the card */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/5 group-hover:to-cyan-500/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Card content */}
                <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur border border-white/[0.08] p-8 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Animated shimmer overlay on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* Icon — bare SVG with gradient stroke */}
                  <div className="relative z-10 mb-6">{step.icon}</div>

                  {/* Step label pill */}
                  <span
                    className={`relative z-10 inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${step.labelColor}`}
                  >
                    {step.label}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
