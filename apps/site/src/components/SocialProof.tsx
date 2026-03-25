"use client";

export default function SocialProof() {
  const logos = ["Y Combinator", "a16z", "Sequoia", "Google Ventures", "Greylock", "Benchmark"];

  return (
    <section className="py-14 border-t border-b border-gray-100 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-7" data-animate="fade-up">
          Backed by world-class investors and advisors
        </p>
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
          data-animate="fade-up"
          data-delay="100"
        >
          <div className="flex animate-[marquee_30s_linear_infinite]">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-xl font-bold text-gray-300 whitespace-nowrap tracking-tight hover:text-gray-400 transition-colors shrink-0 mx-8"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
