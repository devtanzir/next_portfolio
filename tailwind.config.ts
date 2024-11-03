import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        wave: "water-wave 3s linear infinite",
        loader1: "box1 4s 1s forwards ease-in-out infinite",
        loader2: "box2 4s 1s forwards ease-in-out infinite",
        loader3: "box3 4s 1s forwards ease-in-out infinite",
      },
      keyframes: {
        "water-wave": {
          "0%": { borderRadius: "56% 44% 70% 30% / 30% 54% 46% 70%" },
          "40%": { borderRadius: "62% 38% 27% 73% / 67% 57% 43% 33%" },
          "70%": { borderRadius: "39% 61% 69% 31% / 67% 79% 21% 33%" },
          "100%": { borderRadius: "56% 44% 70% 30% / 30% 54% 46% 70%" },
        },
        box1: {
          "0%": {
            width: "112px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "25%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "50%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "75%": {
            width: "48px",
            height: "112px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "100%": { width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px", },
        },
        box2: {
          "0%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "25%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "50%": {
            width: "112px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "75%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "100%": { width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px", },
        },
        box3: {
          "0%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "25%": {
            width: "48px",
            height: "112px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "50%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "75%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "100%": { width: "112px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px", },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
      dropShadow: {
        "4xl": "0 5px 3px rgb(102, 247, 255)",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
export default config;
