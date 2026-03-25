"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.04] py-2.5 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-10">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-gray-900 tracking-tight">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="url(#lg1)" opacity="0.15"/>
              <path d="M8 15.5C8 15.5 10 12 13 12C16 12 16 16 16 16C16 16 16 12 19 12C22 12 24 15.5 24 15.5" stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 18C10 18 12 21 16 21C20 21 22 18 22 18" stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="14" stroke="url(#lg1)" strokeWidth="1.5" opacity="0.4"/>
              <defs><linearGradient id="lg1" x1="2" y1="2" x2="30" y2="30"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs>
            </svg>
            <span className="tracking-[-0.02em]">NimbusGlide</span>
          </a>

          <div className="hidden md:flex gap-8">
            {["Features", "How It Works", "Demo", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <a href="#waitlist" className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all">
              Sign In
            </a>
            <a href="#waitlist" className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_2px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all">
              Download for {isMac ? "Mac" : "Windows"}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col gap-[5px] p-1"
            aria-label="Menu"
          >
            <span className={`w-[22px] h-0.5 bg-gray-700 rounded-full transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-[22px] h-0.5 bg-gray-700 rounded-full transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-[22px] h-0.5 bg-gray-700 rounded-full transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white/98 backdrop-blur-xl p-6 flex flex-col gap-4 z-40 border-b border-gray-200 md:hidden transition-all duration-300 ${
          mobileOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2.5 opacity-0 pointer-events-none"
        }`}
      >
        {["Features", "How It Works", "Demo", "Pricing"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-gray-700 py-2"
          >
            {item}
          </a>
        ))}
        <a href="#waitlist" onClick={() => setMobileOpen(false)} className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-2">
          Download for {isMac ? "Mac" : "Windows"}
        </a>
      </div>
    </>
  );
}
