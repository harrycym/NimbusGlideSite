"use client";

import { useState, useRef } from "react";

const EXAMPLES = [
  {
    label: "Email",
    before: "hey team just wanted to let you know the project deadline got moved to next friday so make sure the budget numbers are finalized before then and oh yeah don't forget we have a meeting on wednesday",
    after: "draft this as an email",
  },
  {
    label: "Medical",
    before: "patient presents with a three day history of progressive dyspnea um oxygen saturation is ninety two percent on room air bilateral crackles noted on auscultation uh chest x ray shows bilateral infiltrates",
    after: "format as a clinical note",
  },
  {
    label: "AI Prompt",
    before: "i want a function that takes a list of numbers and returns only the prime ones and it should be in python and handle edge cases like negative numbers and zero",
    after: "make this an AI prompt",
  },
  {
    label: "Legal",
    before: "the defendant failed to deliver the goods by march fifteenth and as a result our client suffered damages totaling approximately two hundred thousand dollars this is a clear breach of contract under section four",
    after: "format as a legal brief paragraph",
  },
  {
    label: "Meeting Notes",
    before: "okay so we need to ship by march the budget got cut by twenty percent sarah is taking over the design team and we need to hire two more engineers by end of quarter",
    after: "format as meeting notes",
  },
  {
    label: "Slack",
    before: "the deploy is blocked because staging is down we're waiting on devops to fix it should be back up in about an hour",
    after: "make this a Slack message",
  },
  {
    label: "Tweet",
    before: "we just launched a feature that lets you dictate in over fifty languages and switch between them mid sentence nothing else on the market can do this",
    after: "turn this into a tweet",
  },
  {
    label: "Code Comment",
    before: "this function checks if the user has permission to access the resource and if they dont it throws an unauthorized error and logs the attempt to the audit trail",
    after: "write this as a code comment",
  },
  {
    label: "Bug Report",
    before: "when you click the submit button on the checkout page nothing happens the console shows a four twenty two error it only happens when the cart has more than ten items and i think it started after last thursdays deploy",
    after: "format as a bug report",
  },
  {
    label: "Text to Mom",
    before: "hey im going to be late for dinner i have a meeting that runs until seven also do you need me to pick up anything from the store on the way home",
    after: "make this a text to my mom",
  },
  {
    label: "Cover Letter",
    before: "i have five years of experience in fintech i led the launch of a payments platform that processed over two billion in transactions and im really passionate about developer tools",
    after: "draft as a cover letter opening",
  },
  {
    label: "Recipe",
    before: "take two chicken breasts season them with salt pepper garlic powder and paprika sear them in a hot pan for about four minutes each side then finish in the oven at three seventy five for fifteen minutes and let them rest for five",
    after: "format as a recipe",
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
  const [isRunning, setIsRunning] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearAll() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setWords([]);
    setMicActive(false);
    setIsRunning(false);
  }

  function addTimeout(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
  }

  function runDemo() {
    if (isRunning) return;
    clearAll();
    setIsRunning(true);
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

    // Hold, then done
    delay += 3500;
    addTimeout(() => {
      setMicActive(false);
      setIsRunning(false);
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
          {/* Single-pane demo card */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden min-h-[240px]">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Live Dictation
              </div>
              <div className="text-[1.05rem] leading-[1.85] min-h-[120px]">
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
                    <span className="inline-block w-0.5 h-5 bg-violet-500 ml-1 align-text-bottom cursor-blink" />
                  </p>
                ) : (
                  <p className="italic text-gray-300">Click the mic to start...</p>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              onClick={runDemo}
              disabled={isRunning}
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
