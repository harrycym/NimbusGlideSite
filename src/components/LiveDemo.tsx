"use client";

import { useState, useRef, useCallback } from "react";

const WORKER_URL = "https://nimbusglide-api.harry-cym-2c0.workers.dev";

type DemoState = "idle" | "recording" | "processing" | "done" | "error";

export default function LiveDemo() {
  const [state, setState] = useState<DemoState>("idle");
  const [transcript, setTranscript] = useState("");
  const [polished, setPolished] = useState("");
  const [wakeDetected, setWakeDetected] = useState(false);
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startRecording = useCallback(async () => {
    try {
      setTranscript("");
      setPolished("");
      setError("");
      setSeconds(0);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);

        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (blob.size < 1000) {
          setState("idle");
          return;
        }
        await sendToWorker(blob);
      };

      mediaRecorder.start(250);
      setState("recording");

      // Timer
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s >= 29) {
            stopRecording();
            return 30;
          }
          return s + 1;
        });
      }, 1000);

      // Auto-stop at 30s
      setTimeout(() => stopRecording(), 30000);
    } catch {
      setError("Microphone access denied. Please allow mic access and try again.");
      setState("error");
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setState("processing");
    }
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const sendToWorker = async (blob: Blob) => {
    setState("processing");
    try {
      const formData = new FormData();
      formData.append("file", blob, "recording.webm");

      const resp = await fetch(`${WORKER_URL}/demo`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await resp.json();

      if (!resp.ok) {
        setError(data.error || "Something went wrong");
        setState("error");
        return;
      }

      setTranscript(data.transcript || "");
      setPolished(data.polished || "");
      setWakeDetected(data.wakeWordDetected || false);
      setState("done");
    } catch {
      setError("Failed to connect. Please try again.");
      setState("error");
    }
  };

  const reset = () => {
    setState("idle");
    setTranscript("");
    setPolished("");
    setWakeDetected(false);
    setError("");
    setSeconds(0);
  };

  return (
    <section className="py-28 bg-gray-50" id="try-it">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/[0.08] mb-5">
            Try It Live
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-[-0.03em] text-gray-900 mb-5">
            Try it with your<br />
            <span className="gradient-text">own voice.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Hit record, say anything, and watch NimbusGlide&apos;s AI clean it up in real-time. No sign-up required.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto" data-animate="fade-up" data-delay="150">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="p-8 md:p-10">

              {/* Recording / idle state */}
              {(state === "idle" || state === "recording") && (
                <div className="text-center">
                  <button
                    onClick={state === "idle" ? startRecording : stopRecording}
                    className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all ${
                      state === "recording"
                        ? "bg-red-500 shadow-[0_0_0_0_rgba(239,68,68,0.4)] animate-[mic-pulse_1.5s_ease-in-out_infinite] hover:bg-red-600"
                        : "bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-[0_4px_24px_rgba(99,102,241,0.4)] hover:scale-105"
                    }`}
                  >
                    {state === "recording" ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    )}
                  </button>
                  <p className="mt-4 text-sm text-gray-400">
                    {state === "recording" ? (
                      <>
                        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-[pulse-dot_1s_ease-in-out_infinite]" />
                        Recording... {seconds}s / 30s — <button onClick={stopRecording} className="text-indigo-500 font-semibold hover:underline">tap to stop</button>
                      </>
                    ) : (
                      "Tap to record (30s max, 5 tries per hour)"
                    )}
                  </p>
                </div>
              )}

              {/* Processing */}
              {state === "processing" && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 border-3 border-gray-200 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-sm text-gray-500 font-medium">Processing your voice...</p>
                </div>
              )}

              {/* Results */}
              {state === "done" && (
                <div className="space-y-6">
                  {/* Raw transcript */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                      What you said
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed italic">{transcript}</p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  {/* Polished output */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-500 mb-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      NimbusGlide Output
                      {wakeDetected && (
                        <span className="ml-2 px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-600 text-[0.7rem] font-bold normal-case tracking-normal">Wake word detected</span>
                      )}
                    </div>
                    <p className="text-base text-gray-800 leading-relaxed font-medium whitespace-pre-wrap">{polished}</p>
                  </div>

                  <button
                    onClick={reset}
                    className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold text-indigo-500 border border-indigo-200 hover:bg-indigo-50 transition-all mx-auto block"
                  >
                    Try again
                  </button>
                </div>
              )}

              {/* Error */}
              {state === "error" && (
                <div className="text-center py-6">
                  <p className="text-sm text-red-500 mb-4">{error}</p>
                  <button
                    onClick={reset}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-indigo-500 border border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
