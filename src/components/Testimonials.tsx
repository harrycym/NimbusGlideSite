"use client";

const STAR = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const REVIEWS = [
  {
    text: "I dictated an entire research paper while walking my dog. The accuracy on medical terminology was genuinely shocking. Nothing else comes close.",
    name: "Dr. Sarah Reyes",
    role: "Neurologist, Johns Hopkins",
    initials: "SR",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    text: "The wake word feature is a game-changer. I was dictating notes, said 'NimbusGlide, draft this as an email,' and it just... reformatted everything instantly. WhisperFlow can't touch this.",
    name: "Marcus Liu",
    role: "Product Lead, Stripe",
    initials: "ML",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    text: "As someone with RSI, dictation isn't optional for me — it's essential. NimbusGlide gave me back the ability to write at the speed of thought. The mode switching is pure magic.",
    name: "Jamie Kowalski",
    role: "Staff Engineer, Vercel",
    initials: "JK",
    gradient: "from-amber-500 to-red-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">Early Feedback</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            What beta testers<br /><span className="gradient-text">are saying.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="glow-card glow-border p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-400 hover-lift"
              data-animate="fade-up"
              data-delay={i * 100}
            >
              <div className="flex gap-0.5 mb-4">{Array(5).fill(null).map((_, j) => <span key={j}>{STAR}</span>)}</div>
              <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
