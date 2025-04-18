import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  prefix: "",
  flyonui: {
    themes: ["light", "dark"],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/hero/hero-bg.jpeg')",
        "Promotion-bg": "url(/background/bg-shoes.jpg)",
        "subHero-bg": "url(/background/bg-shoes-slide.jpeg)",
      },
      colors: {
        primary: "#84BA86",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("flyonui"),
    require("flyonui/plugin"),
  ],
} satisfies Config

export default config
