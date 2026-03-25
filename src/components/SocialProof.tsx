"use client";

const LOGOS = [
  { name: "Notion",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/69b278e72764b15a5312517c_notion-lumon.svg" },
  { name: "Amazon",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/6834ba4ae4bfda8858fae910_Amazon_logo%201.svg" },
  { name: "NVIDIA",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68850e2cf5f493b2bb7e7cfc_nvidia-v4.svg" },
  { name: "Vercel",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68cd489e5cc5b3b63d17259a_vercel-logo1.svg" },
  { name: "Replit",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68d282cf6db9e65365e93c86_replit-lumen-v2.svg" },
  { name: "Warp",           url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/690a52550f741606c7e2c77a_warp-lumen.svg" },
  { name: "Rivian",         url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/696006ee1cc34cfd31c5a197_rivian-lumon.svg" },
  { name: "Substack",       url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f0aaace6817d9ec9c5117_substack-lumon.svg" },
  { name: "Clay",           url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/690a5985b1c1332c33a609a8_clay-lumen2.svg" },
  { name: "Mercury",        url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f1210efd813db213a4714_mercury-lumon.svg" },
  { name: "Groupon",        url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/689f1376ce57025556d25a77_groupon-lumon-v3.svg" },
  { name: "Lovable",        url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/68875c8ba8908e8964583de6_lovable-v2.svg" },
  { name: "Menlo Ventures", url: "https://cdn.prod.website-files.com/682fa12727f78b943ed45584/6885091bff23fbbaead4d68f_menlo%20(2).svg" },
  { name: "Intercom",       url: "https://www.granola.ai/customerLogos/intercom.svg" },
  { name: "Ramp",           url: "https://www.granola.ai/customerLogos/ramp.svg" },
  { name: "Linear",         url: "https://www.granola.ai/customerLogos/linear.svg" },
  { name: "Brex",           url: "https://www.granola.ai/customerLogos/brex.svg" },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-t border-b border-gray-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.12em] mb-10"
          data-animate="fade-up"
        >
          Trusted by professionals at
        </p>
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          data-animate="fade-up"
          data-delay="100"
        >
          <div className="flex animate-[marquee_45s_linear_infinite] items-center">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 mx-10 opacity-50 hover:opacity-80 transition-opacity"
                title={logo.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.url}
                  alt={logo.name}
                  height={28}
                  style={{
                    height: "28px",
                    width: "auto",
                    maxWidth: "120px",
                    filter: "brightness(0)",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
