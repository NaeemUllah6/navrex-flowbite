/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite-react/lib/**/*.{js,ts}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#eff6ff",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        10: "#F8ECDE",
        20: "#F4E0C9",
        30: "#EED0AD",
        40: "#E9C192",
        51: "#E3B177",
        base: "#DEA25C",
        60: "#B9874D",
        70: "#946C3D",
        80: "#6F512E",
        90: "#4A361F",
        100: "#2C2012",
      },
      secondary: {
        10: "#E4F0E9",
        20: "#D2E6DB",
        30: "#BBD9C8",
        40: "#A5CCB6",
        50: "#8EC0A4",
        base: "#78B392",
        60: "#64957A",
        70: "#507761",
        80: "#3C5A49",
        90: "#283C31",
        100: "#18241D",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
