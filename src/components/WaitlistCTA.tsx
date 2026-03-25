export default function WaitlistCTA() {
  return (
    <section className="py-28 bg-gray-50" id="waitlist">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="relative rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.1)] overflow-hidden text-center p-12 md:p-20"
          data-animate="fade-up"
        >
          {/* BG orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/[0.08] -top-[100px] -right-[50px] blur-[100px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-500/[0.06] -bottom-[80px] -left-[40px] blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-[560px] mx-auto">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-4">
              Ready to let your voice<br /><span className="gradient-text">do the typing?</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-9">
              Download NimbusGlide and experience dictation that actually understands you.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_2px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download for Free
            </a>
            <p className="text-xs text-gray-400 mt-4">Available for macOS. Windows coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
