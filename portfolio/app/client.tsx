"use client";
import { useEffect, useRef, useState, FormEvent } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const flip = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.theme = next ? "dark" : "light"; } catch (e) {}
  };
  return <button onClick={flip} aria-label="Toggle dark mode" className="rounded-full border border-line px-3 py-1 text-sm hover:border-accent hover:scale-105 transition-all duration-200">{dark ? "Light" : "Dark"}</button>;
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function Track({ title, src, dark, style }: { title: string; src: string; dark?: boolean; style?: React.CSSProperties }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [d, setD] = useState(0);
  const toggle = () => {
    const a = ref.current; if (!a) return;
    if (a.paused) { document.querySelectorAll("audio").forEach((x) => x !== a && x.pause()); a.play(); } else a.pause();
  };
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = ref.current; if (!a || !d) return;
    const r = e.currentTarget.getBoundingClientRect(); a.currentTime = ((e.clientX - r.left) / r.width) * d;
  };
  return (
    <div className={`flex items-center gap-4 rounded-2xl border border-line p-4 hover-lift ${dark ? "bg-[#1A3E32] border-[#2A4E42]" : "bg-card"}`} style={style}>
      <audio ref={ref} src={src} preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onLoadedMetadata={(e) => setD(e.currentTarget.duration)} onTimeUpdate={(e) => setT(e.currentTarget.currentTime)} />
      <button onClick={toggle} aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-lg text-white hover:scale-110 transition-transform duration-200">{playing ? "❚❚" : "▶"}</button>
      <div className="min-w-0 flex-1">
        <p className={`font-ethiopic text-lg font-semibold ${dark ? "text-dark-section-text" : ""}`}>{title}</p>
        <div className="mt-2 flex items-center gap-3">
          <div onClick={seek} className={`h-2 flex-1 cursor-pointer overflow-hidden rounded-full ${dark ? "bg-[#2A4E42]" : "bg-line"}`}>
            <div className="h-full bg-accent transition-all duration-100" style={{ width: d ? `${(t / d) * 100}%` : "0%" }} />
          </div>
          <span className={`w-20 text-right text-xs tabular-nums ${dark ? "text-dark-section-muted" : "text-muted"}`}>{fmt(t)} / {d ? fmt(d) : "0:00"}</span>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!key) { setState("error"); return; }
    setState("sending");
    const fd = new FormData(e.currentTarget);
    fd.append("access_key", key); fd.append("subject", "New message from your portfolio");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const j = await res.json();
      if (j.success) { setState("ok"); e.currentTarget.reset(); } else setState("error");
    } catch { setState("error"); }
  }
  const f = "w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent transition-colors duration-200";
  return (
    <form onSubmit={submit} className="space-y-4">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" aria-label="Your name" className={f} />
        <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={f} />
      </div>
      <textarea name="message" required rows={5} placeholder="How can I help?" aria-label="Message" className={f} />
      <button disabled={state === "sending"} className="rounded-full bg-accent px-6 py-3 font-semibold text-white disabled:opacity-60 hover:bg-amber-600 hover:scale-105 transition-all duration-200">
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      {state === "ok" && <p role="status" className="text-accent fade-in">Message sent. I'll reply to your email soon.</p>}
      {state === "error" && <p role="alert" className="text-red-500 fade-in">Message not sent. Email me directly at maryagetu04@gmail.com.</p>}
    </form>
  );
}
