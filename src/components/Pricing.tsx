"use client";

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
);

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "Perfect for trying out NimbusGlide",
    features: ["60 minutes / month", "5 languages", "Basic formatting", "Browser extension"],
    cta: "Get Started",
    href: "#waitlist",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    desc: "For professionals who live by their voice",
    features: ["Unlimited dictation", "50+ languages", "Custom vocabulary", "Wake word mode switching", "All integrations", "Priority support"],
    cta: "Join Waitlist",
    href: "#waitlist",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams and organizations",
    features: ["Everything in Pro", "On-premise deployment", "Custom model training", "SSO & SCIM", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    href: "mailto:admin@nimbusglide.ai",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 bg-gray-50" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">Pricing</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Simple, transparent<br /><span className="gradient-text">pricing.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">Start free. Scale when you&apos;re ready. No hidden fees, ever.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start max-w-[960px] mx-auto">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`glow-card glow-border relative bg-white border rounded-3xl p-10 transition-all duration-400 hover-lift ${
                plan.featured
                  ? "border-indigo-400 shadow-[0_12px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(99,102,241,0.1)] md:scale-[1.02]"
                  : "border-gray-200"
              }`}
              data-animate="fade-up"
              data-delay={i * 100}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[0.75rem] font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-3">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[2.8rem] font-black text-gray-900 tracking-[-0.04em] leading-none">{plan.price}</span>
                {plan.period && <span className="text-base text-gray-400 font-medium">{plan.period}</span>}
              </div>
              <p className="text-sm text-gray-500 mb-8">{plan.desc}</p>

              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center w-full py-3 rounded-full text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_2px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:-translate-y-0.5"
                    : "border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-500/[0.04]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
