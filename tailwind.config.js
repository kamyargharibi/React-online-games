/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1e293b", // Slate-800
          light: "#f8fafc", // Slate-50
        },
        secondry: {
          dark: "#334155", // Slate-700
          light: "#cbd5e1", // Slate-300
        },
        link: {
          blue: "#2563eb", // Blue-600
        },
        light: {
          gray40: "#9ca3af", // Gray-400
          gray30: "#d1d5db", // Gray-300
          gray20: "#e5e7eb", // Gray-200
          gray10: "#f3f4f6", // Gray-100
          slate60: "#475569", // Slate-600
        },
      },
      fontFamily: {
        body: ["Vazirmatn RD"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-rtl")],
};
