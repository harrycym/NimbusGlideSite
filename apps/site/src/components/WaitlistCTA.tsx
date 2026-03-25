"use client";

import { useState } from "react";

export default function WaitlistCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

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
              Join thousands already on the waitlist. Be the first to experience dictation that actually understands you.
            </p>

            <form onSubmit={handleSubmit} className="mb-7">
              <div className="flex gap-2.5 max-w-[480px] mx-auto flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  disabled={submitted}
                  className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 text-base outline-none transition-all focus:border-indigo-400 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] disabled:opacity-60"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_2px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all shrink-0"
                >
                  {submitted ? "You're In!" : "Join Waitlist"}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime. Launching Q3 2026.</p>
            </form>

            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <div className="flex">
                {["A", "M", "K", "R", "T"].map((letter, i) => (
                  <div
                    key={letter}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[0.7rem] font-bold border-2 border-white ${i > 0 ? "-ml-2" : ""}`}
                    style={{
                      background: [
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        "linear-gradient(135deg, #06b6d4, #3b82f6)",
                        "linear-gradient(135deg, #10b981, #059669)",
                        "linear-gradient(135deg, #f59e0b, #ef4444)",
                        "linear-gradient(135deg, #ec4899, #f43f5e)",
                      ][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span>Join <strong>2,847</strong> others on the waitlist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
