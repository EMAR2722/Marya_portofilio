import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "var(--bg)", ink: "var(--ink)", muted: "var(--muted)", card: "var(--card)", line: "var(--line)", accent: "var(--accent)", "dark-section": "var(--dark-section)", "dark-section-text": "var(--dark-section-text)", "dark-section-muted": "var(--dark-section-muted)" },
    fontFamily: { display: ["Fraunces", "Georgia", "serif"], sans: ["Figtree", "system-ui", "sans-serif"], ethiopic: ["Noto Sans Ethiopic", "Nyala", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
