"use client";

export default function ContextAware() {
  return (
    <section className="py-28 relative overflow-hidden bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual — before/after */}
          <div className="order-2 lg:order-1 space-y-4" data-animate="fade-up" data-delay="150">
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Other tools</p>
              <p className="text-base text-gray-500">&ldquo;<span className="text-red-500 font-medium line-through">Um</span> the doctor said to <span className="text-red-500 font-medium line-through">reed</span> the results before, <span className="text-red-500 font-medium line-through">uh</span>, the <span className="text-red-500 font-medium line-through">patience</span> arrive&rdquo;</p>
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
  );
}
