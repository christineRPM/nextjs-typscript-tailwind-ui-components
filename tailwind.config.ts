import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        turquoise: {
          DEFAULT: '#40E0D0',
          light: '#AFEEEE',
        },
        azure: '#F0FFFF',
        aquamarine: {
          DEFAULT: '#7FFFD4',
          light: '#BFFFEF',
        },
        rose: {
          DEFAULT: '#FF007F',
          light: '#FFB7D5',
        },
        light_blue: '#ADD8E6',
        // Adding explicit shades for the colors used in the dropdown demo
        red: {
          DEFAULT: '#FF0000',
          100: '#FFF5F5',
          200: '#FED7D7',
          300: '#FEB2B2',
        },
        blue: {
          DEFAULT: '#0000FF',
          100: '#EBF8FF',
          200: '#BEE3F8',
          300: '#90CDF4',
        },
        green: {
          DEFAULT: '#00FF00',
          100: '#F0FFF4',
          200: '#C6F6D5',
          300: '#9AE6B4',
        },
        yellow: {
          DEFAULT: '#FFFF00',
          100: '#FFFFF0',
          200: '#FEFCBF',
          300: '#FAF089',
        },
        purple: {
          DEFAULT: '#800080',
          100: '#FAF5FF',
          200: '#E9D8FD',
          300: '#D6BCFA',
        },
      },
    },
  },
  plugins: [],
};

export default config;