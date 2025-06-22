/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "20%, 90%": { opacity: "0" },
          "18%, 92%": { opacity: "0.5" },
          "98%, 12%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        fade_5: {
          "0%": { transform: "translateX(-1000px)", opacity: "1" },
          "1%, 10%, 19%": { transform: "translateX(0px)", opacity: "1" },
          "20%": { transform: "translateX(1000px)", opacity: "1" },
          "21%, 80%": { transform: "translateX(2000px)", opacity: "0" },
          "80%, 100%": { transform: "translateX(-2000px)", opacity: "0" },
        },
      },
      animation: {
        "fade-image": "fade 20s linear infinite",
        "waving-hand": "wave 2s linear infinite",
        "fade-5": "fade_5 60s linear infinite",
      },

      animationDelay: {
        5000: "5000ms",
        2500: "2500ms",
        7500: "7500ms",
        2000: "2000ms",
        4000: "4000ms",
        6000: "6000ms",
        8000: "8000ms",
        10000: "10000ms",
        12000: "12000ms",
        15000: "15000ms",
        16000: "16000ms",
        12: "12000ms",
        24: "24000ms",
        36: "36000ms",
        48: "48000ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".delay-2000": { "animation-delay": "2000ms" },
        ".delay-2500": { "animation-delay": "2500ms" },
        ".delay-4000": { "animation-delay": "4000ms" },
        ".delay-5000": { "animation-delay": "5000ms" },
        ".delay-6000": { "animation-delay": "6000ms" },
        ".delay-7500": { "animation-delay": "7500ms" },
        ".delay-8000": { "animation-delay": "8000ms" },
        ".delay-10000": { "animation-delay": "10000ms" },
        ".delay-12000": { "animation-delay": "12000ms" },
        ".delay-15000": { "animation-delay": "15000ms" },
        ".delay-16000": { "animation-delay": "16000ms" },
        ".delay-12": { "animation-delay": "12000ms" },
        ".delay-24": { "animation-delay": "24000ms" },
        ".delay-36": { "animation-delay": "36000ms" },
        ".delay-48": { "animation-delay": "48000ms" },
      });
    },
  ],
};
