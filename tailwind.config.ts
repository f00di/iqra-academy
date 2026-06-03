import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2E59",
          blue: "#145DA0",
          sky: "#EAF4FF",
          gold: "#D6A329",
          goldSoft: "#FFF3CC",
          grey: "#F5F7FA",
          ink: "#1F2937"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 46, 89, 0.12)",
        card: "0 12px 30px rgba(15, 76, 129, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
