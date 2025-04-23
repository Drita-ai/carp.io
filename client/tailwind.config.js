import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx,js}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        glitchColor: {
          '0%': { clip: 'rect(0, 9999px, 0, 0)' },
          '10%': { clip: 'rect(0, 9999px, 100%, 0)' },
          '20%': { clip: 'rect(0, 9999px, 0, 0)' },
          '30%': { clip: 'rect(30%, 9999px, 60%, 0)' },
          '40%': { clip: 'rect(10%, 9999px, 50%, 0)' },
          '50%': { clip: 'rect(60%, 9999px, 100%, 0)' },
          '60%': { clip: 'rect(20%, 9999px, 60%, 0)' },
          '70%': { clip: 'rect(40%, 9999px, 90%, 0)' },
          '80%': { clip: 'rect(10%, 9999px, 50%, 0)' },
          '90%': { clip: 'rect(0, 9999px, 100%, 0)' },
          '100%': { clip: 'rect(0, 9999px, 0, 0)' },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out 3",
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 1.5s ease-out forwards",
        glitch: 'glitch 1s infinite linear',
        glitchColor: 'glitchColor 2s infinite steps(2, end)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
