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
        "hero-bg": `url('https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/hero-bg_vnsryj')`,
        "Promotion-bg": `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/bg-shoes_ypcaqj)`,
        "subHero-bg": `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/bg-shoes-slide_t9dw7n)`,
      },
      colors: {
        primary: "#84BA86",
        primaryPlus: "#7aac7c",

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
