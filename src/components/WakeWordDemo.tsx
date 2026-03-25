"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SCENARIOS = [
  {
    before: "Hey I need you to go to the mall and pick up the package from the front desk and make sure you get there before five because they close early on weekends",
    after: "draft this as an email",
    output: "Dear James,\n\nI hope this message finds you well. Could you please stop by the mall and pick up the package from the front desk? Please make sure to arrive before 5:00 PM, as they close early on weekends.\n\nThank you for your help — I really appreciate it.\n\nSincerely,\nHarry",
  },
  {
    before: "I want to build a website that looks incredible and I need you to one shot this in clean code",
    after: "make this an AI prompt",
    output: "Build a complete, production-ready SaaS landing page using Next.js and Tailwind CSS in a single pass.\n\nRequirements:\n- Hero with bold headline and CTA\n- Scroll-triggered animations\n- Pricing section (3 tiers)\n- Waitlist email capture\n- Fully responsive, clean design",
  },
  {
    before: "So the main takeaway from the meeting was that we need to ship by March and the budget got cut by twenty percent",
    after: "format as meeting notes",
    output: "Meeting Notes\n━━━━━━━━━━━━\n• Deadline: Ship by March\n• Budget: Reduced by 20%\n• Action: Reassess scope to fit new constraints",
  },
];

interface TypedWord {
  text: string;
  purple: boolean;
  isWakeWord: boolean;
}

export default function WakeWordDemo() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [words, setWords] = useState<TypedWord[]>([]);
  const [outputText, setOutputText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "output">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = useCallback(() => {
    timeoutRef.current.forEach(clearTimeout);
    timeoutRef.current = [];
  }, []);

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timeoutRef.current.push(id);
    return id;
  }, []);

  const runScenario = useCallback(
    (sIdx: number) => {
      clearTimeouts();
      setPhase("typing");
      setWords([]);
      setOutputText("");

      const scenario = SCENARIOS[sIdx];
      const beforeWords = scenario.before.split(" ");
      const afterWords = scenario.after.split(" ");

      let delay = 400;

      // Type normal words
      beforeWords.forEach((word) => {
        addTimeout(() => {
          setWords((prev) => [...prev, { text: word, purple: false, isWakeWord: false }]);
        }, delay);
        delay += 70 + Math.random() * 50;
      });

      // Small pause before wake word
      delay += 300;

      // "NimbusGlide," highlighted
      addTimeout(() => {
        setWords((prev) => [...prev, { text: "NimbusGlide,", purple: true, isWakeWord: true }]);
      }, delay);
      delay += 400;

      // Type purple words after wake word
      afterWords.forEach((word) => {
        addTimeout(() => {
          setWords((prev) => [...prev, { text: word, purple: true, isWakeWord: false }]);
        }, delay);
        delay += 70 + Math.random() * 50;
      });

      // Instant output after typing
      delay += 400;
      addTimeout(() => {
        setOutputText(scenario.output);
        setPhase("output");
      }, delay);

      // Hold, then done
      delay += 4000;
      addTimeout(() => {
        setPhase("idle");
      }, delay);
    },
    [addTimeout, clearTimeouts]
  );

  // Auto-play on mount
  useEffect(() => {
    const timer = setTimeout(() => runScenario(0), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeouts();
    };
  }, [runScenario, clearTimeouts]);

  // Auto-cycle scenarios
  useEffect(() => {
    if (phase === "idle" && outputText) {
      const next = (scenarioIdx + 1) % SCENARIOS.length;
      const timer = setTimeout(() => {
        setScenarioIdx(next);
        runScenario(next);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, outputText, scenarioIdx, runScenario]);

  // Waveform bars
  const [waveHeights, setWaveHeights] = useState<number[]>(Array(40).fill(4));
  useEffect(() => {
    let animId: number;
    function tick() {
      setWaveHeights(
        Array(40)
          .fill(0)
          .map((_, i) => {
            const time = Date.now() * 0.003;
            const w1 = Math.sin(time + i * 0.3) * 0.5 + 0.5;
            const w2 = Math.sin(time * 1.5 + i * 0.2) * 0.3 + 0.5;
            return 4 + ((w1 + w2) / 2) * 32;
          })
      );
      animId = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative perspective-[1200px]">
      {/* Main window */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_24px_60px_rgba(0,0,0,0.1),0_0_60px_rgba(99,102,241,0.15)] overflow-hidden transform hover:rotate-0 transition-transform duration-600" style={{ transform: "rotateY(-2deg) rotateX(1deg)" }}>
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[0.82rem] font-semibold text-gray-400">NimbusGlide</span>
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
            Listening
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Waveform */}
          <div className="flex items-center justify-center gap-[3px] h-10 mb-5">
            {waveHeights.map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-indigo-500 to-violet-500 transition-[height] duration-150"
                style={{ height: h, opacity: 0.4 + ((h - 4) / 32) * 0.6 }}
              />
            ))}
          </div>

          {/* Transcription area */}
          <div className="min-h-[60px] border-t border-gray-100 pt-4">
            {words.length > 0 ? (
              <p className="text-base leading-relaxed">
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
              <p className="text-gray-300 text-sm italic">Listening for speech...</p>
            )}
          </div>

          {/* Output — appears instantly */}
          {outputText && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-violet-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  Output
                </div>
                <span className="text-[0.7rem] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">0.2s</span>
              </div>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-3.5">
                <pre className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap font-sans">{outputText}</pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute top-5 -left-10 flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-20 animate-[card-float_6s_ease-in-out_infinite] max-lg:hidden">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">Real-time</div>
          <div className="text-xs text-gray-400">0.3s latency</div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-14 flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-20 animate-[card-float_6s_ease-in-out_infinite_2s] max-lg:hidden">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">Private</div>
          <div className="text-xs text-gray-400">End-to-end encrypted</div>
        </div>
      </div>

      <div className="absolute -bottom-14 left-10 flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-20 animate-[card-float_6s_ease-in-out_infinite_4s] max-lg:hidden">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">Wake Word</div>
          <div className="text-xs text-gray-400">&ldquo;NimbusGlide&rdquo;</div>
        </div>
      </div>

      {/* Scenario indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {SCENARIOS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setScenarioIdx(i); runScenario(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === scenarioIdx ? "bg-indigo-500 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Scenario ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
