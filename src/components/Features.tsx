"use client";

const FEATURES = [
  {
    title: 'Wake Word Mode Switching',
    desc: 'Say "NimbusGlide" followed by any instruction to instantly change output format. Email, AI prompt, meeting notes, code comment — mid-conversation, zero friction. No competitor offers this.',
    gradient: "from-indigo-500 to-violet-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
    ),
    tags: ["Wake Word", "Mode Switch", "Zero Friction"],
    large: true,
  },
  {
    title: "Context-Aware AI",
    desc: 'Knows "Dr." before a name is a title, not an abbreviation. Knows when "read" is past tense. Gets homophones right the first time.',
    gradient: "from-cyan-500 to-blue-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    title: "50+ Languages",
    desc: "Switch between languages mid-sentence. Detects and adapts in real-time, with support for dialects and accents.",
    gradient: "from-amber-500 to-red-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/><path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/></svg>
    ),
  },
  {
    title: "Privacy First",
    desc: "On-device processing for sensitive content. Your words never leave your machine unless you want them to. Zero data retention.",
    gradient: "from-emerald-500 to-teal-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
  {
    title: "Real-Time Streaming",
    desc: "See your words appear as you speak with sub-300ms latency. No waiting, no buffering. Just flow.",
    gradient: "from-violet-500 to-fuchsia-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
  },
  {
    title: "Smart Commands",
    desc: 'Say "new paragraph," "delete that," or "capitalize the title" — NimbusGlide executes voice commands naturally.',
    gradient: "from-pink-500 to-rose-500",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-28" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">Features</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Dictation,<br /><span className="gradient-text">reimagined.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Not another speech-to-text tool. NimbusGlide understands context, switches output modes on command, and adapts to how you speak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl border border-gray-100 p-9 transition-all duration-400 hover:border-indigo-500/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden ${
                f.large ? "md:col-span-2 lg:col-span-3 bg-gray-50 grid lg:grid-cols-2 gap-10 items-center" : "bg-white"
              }`}
              data-animate="fade-up"
              data-delay={i * 80}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-violet-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {f.large ? (
                <>
                  {/* Large card — visual side */}
                  <div className="relative z-10 flex items-center justify-center py-8">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full border border-indigo-500/15 animate-[spin-slow_25s_linear_infinite]" />
                      <div className="absolute inset-[12.5%] rounded-full border border-violet-500/15 animate-[spin-slow_18s_linear_infinite_reverse]" />
                      <div className="absolute inset-[25%] rounded-full border border-cyan-500/15 animate-[spin-slow_15s_linear_infinite]" />
                      {/* Core */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                      </div>
                      {/* Mode labels orbiting */}
                      <div className="absolute -top-2 -right-4 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-600 animate-[card-float_4s_ease-in-out_infinite]">Email</div>
                      <div className="absolute -bottom-2 -left-6 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-xs font-semibold text-violet-600 animate-[card-float_4s_ease-in-out_infinite_1.5s]">AI Prompt</div>
                      <div className="absolute top-1/2 -right-12 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-600 animate-[card-float_4s_ease-in-out_infinite_3s]">Notes</div>
                    </div>
                  </div>
                  {/* Large card — text side */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{f.title}</h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {f.tags?.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold text-indigo-500 bg-indigo-500/[0.08]">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-white border border-gray-200">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">vs WhisperFlow</p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 line-through">Manual mode toggle</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        <span className="text-sm font-semibold text-indigo-600">Voice-activated, instant</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
