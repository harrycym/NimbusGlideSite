"use client";

import { useState, useRef } from "react";

const EXAMPLES = [
  {
    label: "Email",
    before: "hey team just wanted to let you know the project deadline got moved to next friday so make sure the budget numbers are finalized before then and oh yeah don't forget we have a meeting on wednesday",
    after: "draft this as an email",
    output: "Hi team,\n\nQuick update — the project deadline has been moved to next Friday. Please make sure all budget numbers are finalized before then.\n\nAlso, a reminder that we have a meeting this Wednesday.\n\nBest regards",
  },
  {
    label: "Medical",
    before: "patient presents with a three day history of progressive dyspnea um oxygen saturation is ninety two percent on room air bilateral crackles noted on auscultation uh chest x ray shows bilateral infiltrates",
    after: "format as a clinical note",
    output: "CLINICAL NOTE\n\nCC: Progressive dyspnea x3 days\n\nVitals: SpO2 92% on RA\n\nExam: Bilateral crackles on auscultation\n\nImaging: CXR — bilateral infiltrates\n\nAssessment: Findings consistent with community-acquired pneumonia",
  },
  {
    label: "AI Prompt",
    before: "i want to build a website that looks incredible and i need you to one shot this in clean code make it a landing page for a saas product with animations and a waitlist",
    after: "make this an AI prompt",
    output: "Build a complete, production-ready SaaS landing page in a single pass using Next.js and Tailwind CSS.\n\nRequirements:\n- Hero section with bold headline, subtitle, and CTA button\n- Smooth scroll-triggered animations (fade-up on viewport entry)\n- Feature grid with icon cards and hover effects\n- Pricing section with 3 tiers (Free, Pro, Enterprise)\n- Waitlist email capture form with success state\n- Fully responsive (mobile-first)\n- Clean, minimal design with strategic color accents\n- No external dependencies beyond Next.js and Tailwind\n\nOutput the complete code in one shot. Do not split into multiple files unless necessary.",
  },
  {
    label: "Legal",
    before: "the defendant failed to deliver the goods by march fifteenth and as a result our client suffered damages totaling approximately two hundred thousand dollars this is a clear breach of contract under section four",
    after: "format as a legal brief paragraph",
    output: "The Defendant failed to deliver the goods by the agreed-upon date of March 15, constituting a material breach of the Agreement under Section 4. As a direct and proximate result of this breach, Plaintiff has suffered damages in the amount of approximately $200,000. Plaintiff respectfully requests that the Court enter judgment in its favor for the full amount of damages incurred.",
  },
  {
    label: "Meeting Notes",
    before: "okay so we need to ship by march the budget got cut by twenty percent sarah is taking over the design team and we need to hire two more engineers by end of quarter",
    after: "format as meeting notes",
    output: "MEETING NOTES\n━━━━━━━━━━━━━\n• Deadline: Ship by March\n• Budget: Reduced by 20%\n• Team: Sarah taking over design\n• Hiring: 2 additional engineers needed by EOQ\n\nAction Items:\n- Reassess scope to fit reduced budget\n- Post engineering roles ASAP",
  },
  {
    label: "Slack",
    before: "the deploy is blocked because staging is down we're waiting on devops to fix it should be back up in about an hour",
    after: "make this a Slack message",
    output: "🚨 Deploy blocked — staging is currently down. DevOps is on it, ETA ~1 hour. Will update when it's back up.",
  },
  {
    label: "Tweet",
    before: "we just launched a feature that lets you dictate in over fifty languages and switch between them mid sentence nothing else on the market can do this",
    after: "turn this into a tweet",
    output: "Just shipped: dictate in 50+ languages and switch between them mid-sentence. No other tool can do this. 🎙️🌍",
  },
  {
    label: "Code Comment",
    before: "this function checks if the user has permission to access the resource and if they dont it throws an unauthorized error and logs the attempt to the audit trail",
    after: "write this as a code comment",
    output: "// Validates user permissions for the requested resource.\n// Throws UnauthorizedError if access is denied.\n// All failed access attempts are logged to the audit trail.",
  },
  {
    label: "Bug Report",
    before: "when you click the submit button on the checkout page nothing happens the console shows a four twenty two error it only happens when the cart has more than ten items and i think it started after last thursdays deploy",
    after: "format as a bug report",
    output: "🐛 Bug Report\n\nTitle: Checkout submit button unresponsive with 10+ cart items\n\nSteps to Reproduce:\n1. Add more than 10 items to cart\n2. Proceed to checkout\n3. Click \"Submit\"\n\nExpected: Order submits successfully\nActual: Nothing happens; console shows 422 error\n\nRegression: Started after Thursday's deploy\nSeverity: High — blocks purchases",
  },
  {
    label: "Text to Mom",
    before: "hey im going to be late for dinner i have a meeting that runs until seven also do you need me to pick up anything from the store on the way home",
    after: "make this a text to my mom",
    output: "Hey Mom! Going to be a little late for dinner — I have a meeting until 7. Do you need me to pick anything up from the store on my way home? 💛",
  },
  {
    label: "Cover Letter",
    before: "i have five years of experience in fintech i led the launch of a payments platform that processed over two billion in transactions and im really passionate about developer tools",
    after: "draft as a cover letter opening",
    output: "Dear Hiring Manager,\n\nWith five years of experience in fintech and a track record of building products at scale, I'm excited to apply for this role. Most recently, I led the launch of a payments platform that processed over $2B in transactions — an experience that deepened my passion for building exceptional developer tools.",
  },
  {
    label: "Recipe",
    before: "take two chicken breasts season them with salt pepper garlic powder and paprika sear them in a hot pan for about four minutes each side then finish in the oven at three seventy five for fifteen minutes and let them rest for five",
    after: "format as a recipe",
    output: "Pan-Seared Chicken Breast\n\nIngredients:\n• 2 chicken breasts\n• Salt, pepper, garlic powder, paprika\n\nInstructions:\n1. Season chicken with salt, pepper, garlic powder, and paprika\n2. Sear in a hot pan — 4 minutes per side\n3. Transfer to oven at 375°F for 15 minutes\n4. Rest for 5 minutes before serving",
  },
];

interface TypedWord {
  text: string;
  purple: boolean;
  isWakeWord: boolean;
}

export default function InteractiveDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [words, setWords] = useState<TypedWord[]>([]);
  const [outputText, setOutputText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "processing" | "output">("idle");
  const [micActive, setMicActive] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearAll() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setWords([]);
    setOutputText("");
    setPhase("idle");
    setMicActive(false);
  }

  function addTimeout(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
  }

  function runDemo() {
    if (phase !== "idle") return;
    clearAll();
    setPhase("typing");
    setMicActive(true);

    const ex = EXAMPLES[activeIdx];
    const beforeWords = ex.before.split(" ");
    const afterWords = ex.after.split(" ");
    let delay = 200;

    // Type normal words
    beforeWords.forEach((word) => {
      addTimeout(() => {
        setWords((prev) => [...prev, { text: word, purple: false, isWakeWord: false }]);
      }, delay);
      delay += 65 + Math.random() * 55;
    });

    // Pause before wake word
    delay += 350;

    // "NimbusGlide," highlighted
    addTimeout(() => {
      setWords((prev) => [...prev, { text: "NimbusGlide,", purple: true, isWakeWord: true }]);
    }, delay);
    delay += 450;

    // Purple words after
    afterWords.forEach((word) => {
      addTimeout(() => {
        setWords((prev) => [...prev, { text: word, purple: true, isWakeWord: false }]);
      }, delay);
      delay += 65 + Math.random() * 55;
    });

    // Brief pause, then slam the output instantly
    delay += 400;
    addTimeout(() => {
      setMicActive(false);
      setOutputText(ex.output);
      setPhase("output");
    }, delay);

    // Done
    delay += 4000;
    addTimeout(() => {
      setPhase("idle");
    }, delay);
  }

  return (
    <section className="py-28" id="demo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">See It In Action</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Experience the<br /><span className="gradient-text">magic yourself.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">Click the microphone to see how a single wake word changes everything.</p>
        </div>

        <div className="max-w-[700px] mx-auto" data-animate="fade-up" data-delay="150">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Dictation label */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Live Dictation
              </div>

              {/* Typed dictation text */}
              <div className="text-[1.05rem] leading-[1.85] min-h-[80px]">
                {words.length > 0 ? (
                  <p>
                    {words.map((w, i) => (
                      <span key={i}>
                        {i > 0 && " "}
                        {w.isWakeWord ? (
                          <span className="font-bold text-violet-600 bg-violet-100 px-1.5 py-0.5 rounded-md">
                            {w.text}
                          </span>
                        ) : w.purple ? (
                          <span className="text-violet-600 font-medium">{w.text}</span>
                        ) : (
                          <span className="text-gray-600">{w.text}</span>
                        )}
                      </span>
                    ))}
                    {phase === "typing" && (
                      <span className="inline-block w-0.5 h-5 bg-violet-500 ml-1 align-text-bottom cursor-blink" />
                    )}
                  </p>
                ) : (
                  <p className="italic text-gray-300">Click the mic to start...</p>
                )}
              </div>

              {/* Output result — appears instantly */}
              {(phase === "output" || (phase === "idle" && outputText)) && outputText && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      NimbusGlide Output
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">0.2s</span>
                      <span className="text-xs text-gray-400 font-medium">50% faster than competitors</span>
                    </div>
                  </div>
                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
                    <pre className="text-[0.95rem] leading-relaxed text-gray-800 whitespace-pre-wrap font-sans">{outputText}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              onClick={runDemo}
              disabled={phase !== "idle"}
              className={`w-[72px] h-[72px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_4px_24px_rgba(99,102,241,0.4)] disabled:opacity-70 disabled:cursor-not-allowed ${micActive ? "animate-[mic-pulse_1.5s_ease-in-out_infinite]" : ""}`}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </button>
            <span className="text-sm text-gray-400">Click to simulate dictation</span>
            <div className="flex flex-wrap justify-center gap-2">
              {EXAMPLES.map((ex, i) => (
                <button
                  key={ex.label}
                  onClick={() => { setActiveIdx(i); clearAll(); }}
                  className={`px-3.5 py-1.5 rounded-full text-[0.8rem] font-semibold border transition-all ${
                    i === activeIdx
                      ? "bg-indigo-500/[0.08] border-indigo-500/20 text-indigo-500"
                      : "bg-gray-50 border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-500"
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
