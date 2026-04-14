/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{vue,js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        atom: {
          navy: "#181d26",
          blue: "#1b61c9",
          "blue-mid": "#254fad",
          accent: "#00D4FF",
          "accent-dim": "#0891B2",
          success: "#006400",
          surface: "#ffffff",
          "surface-soft": "#f8fafc",
          "surface-dark": "#0A0E17",
          border: "#e0e2e6",
          "text-weak": "rgba(4,14,32,0.69)",
          spotlight: "rgba(249,252,255,0.97)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Haas",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Inter", "Haas Groot Disp", "Haas", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-hero": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "section": ["clamp(1.875rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "sub": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        "body": ["1rem", { lineHeight: "1.55", letterSpacing: "0.008em" }],
      },
      borderRadius: {
        btn: "12px",
        card: "16px",
        section: "24px",
        lg3: "32px",
      },
      boxShadow: {
        "atom-sm": "rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px",
        "atom-soft": "rgba(15,48,106,0.05) 0px 0px 20px",
        "atom-lg": "rgba(27,97,201,0.18) 0px 24px 48px -12px, rgba(15,48,106,0.08) 0px 4px 12px",
        "atom-glow": "0 0 40px rgba(0,212,255,0.25), 0 20px 50px -15px rgba(27,97,201,0.35)",
      },
      letterSpacing: {
        tight2: "-0.02em",
        body: "0.008em",
        label: "0.1em",
      },
      maxWidth: {
        prose2: "68ch",
      },
      keyframes: {
        "atom-gradient": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "atom-gradient": "atom-gradient 8s ease infinite",
      },
    },
  },
  plugins: [],
};
