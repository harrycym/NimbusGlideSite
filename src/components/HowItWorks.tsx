"use client";

export default function HowItWorks() {
  return (
    <section className="py-28 relative overflow-hidden" id="how-it-works">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[640px] mx-auto mb-20" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-6">How It Works</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-white mb-5">
            Three steps to<br /><span className="gradient-text">effortless dictation.</span>
          </h2>
        </div>

        {/* Steps as a horizontal timeline */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-indigo-500/40 hidden md:block" />

          {/* Step 1 */}
          <div className="relative text-center px-6" data-animate="fade-up">
            <div className="relative z-10 w-[104px] h-[104px] rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(99,102,241,0.3)]">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
              </svg>
            </div>
            <span className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Step 1</span>
            <h3 className="text-xl font-bold text-white mb-3">Speak naturally</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">
              Talk like you normally would — fast, slow, with pauses, with ums. No special cadence. NimbusGlide handles it all.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center px-6 mt-12 md:mt-0" data-animate="fade-up" data-delay="150">
            <div className="relative z-10 w-[104px] h-[104px] rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="inline-block text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Step 2</span>
            <h3 className="text-xl font-bold text-white mb-3">Say &ldquo;NimbusGlide&rdquo;</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">
              Trigger the wake word and tell it the format — email, AI prompt, notes, code. It instantly restructures your output.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center px-6 mt-12 md:mt-0" data-animate="fade-up" data-delay="300">
            <div className="relative z-10 w-[104px] h-[104px] rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <span className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Step 3</span>
            <h3 className="text-xl font-bold text-white mb-3">Get polished output</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">
              Perfectly formatted text in 0.2 seconds. Ready to paste into emails, docs, code editors, or anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
