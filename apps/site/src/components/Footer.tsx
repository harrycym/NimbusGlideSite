export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-gray-900 tracking-tight mb-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="url(#lgf)" opacity="0.15"/>
                <path d="M8 15.5C8 15.5 10 12 13 12C16 12 16 16 16 16C16 16 16 12 19 12C22 12 24 15.5 24 15.5" stroke="url(#lgf)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 18C10 18 12 21 16 21C20 21 22 18 22 18" stroke="url(#lgf)" strokeWidth="2" strokeLinecap="round"/>
                <defs><linearGradient id="lgf" x1="2" y1="2" x2="30" y2="30"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs>
              </svg>
              NimbusGlide
            </a>
            <p className="text-sm text-gray-400">AI dictation that thinks.</p>
          </div>

          {[
            { title: "Product", links: [["Features", "#features"], ["Pricing", "#pricing"], ["Demo", "#demo"], ["API", "#"]] },
            { title: "Company", links: [["About", "#"], ["Blog", "#"], ["Careers", "#"], ["Press", "#"], ["Contact", "mailto:admin@nimbusglide.ai"]] },
            { title: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["Security", "#"]] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">{col.title}</h4>
              {col.links.map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-gray-500 py-1 hover:text-indigo-500 transition-colors">{label}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-100 gap-4">
          <p className="text-xs text-gray-400">&copy; 2026 NimbusGlide, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Twitter/X */}
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
