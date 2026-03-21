/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E9",
        parchment: "#EDE7DB",
        linen: "#E8E0D0",
        espresso: "#2A1810",
        brown: "#3D2518",
        walnut: "#5C3A28",
        caramel: "#9B7340",
        gold: "#C4973B",
        brightGold: "#D4A843",
        roseGold: "#C9A87C",
        rose: "#C4727F",
        fig: "#7B4B3A",
        date: "#8B6914",
        carrot: "#D4802A",
        white: "#FFFDF9",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Outfit", "sans-serif"],
      },
      keyframes: {
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(1.3)", transformOrigin: "top" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        ripple: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(0.9)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
      },
      animation: {
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        spotlight: "spotlight 2s ease 0.15s 1 forwards",
        meteor: "meteor 5s linear infinite",
      },
      borderColor: {
        border: "hsl(var(--border, 0 0% 90%))",
      },
    },
  },
  plugins: [],
};
