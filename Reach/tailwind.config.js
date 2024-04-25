/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF6B00",
          450: "#FE8C00",
          400: "#FF7714",
          300: "#FF9244",
          200: "#FFC295",
          100: "#FFE3CE",
        },
        secondary: {
          500: "#E5C173",
          400: "#ECCF91",
          300: "#F0D9A6",
          200: "#F6E7C6",
          100: "#F5EFE1",
        },
        neutral: {
          500: "#4F4E59",
          400: "#83818E",
          300: "#C7C5CD",
          200: "#E6E5EA",
          100: "#F4F3F5",
        },
        info: {
          500: "#33A9FF",
          400: "#7ABEF2",
          300: "#9BCFF6",
          200: "#BCE0FB",
          100: "#DEF1FF",
        },
        success: {
          600: "#6FCF97",
          500: "#5ED792",
          400: "#75DEA2",
          300: "#97E7B9",
          200: "#B4EFCD",
          100: "#D9F6E5",
        },
        warning: {
          500: "#EBBA28",
          400: "#F2C746",
          300: "#F6D369",
          200: "#FCE399",
          100: "#FFF4D2",
        },
        danger: {
          600: "#CD3227",
          500: "#D94949",
          400: "#E26060",
          300: "#EB8C8C",
          200: "#EFA8A8",
          100: "#F9E3E3",
        },
        technical: "#535474",
        textColor: "#141417",
        white: "#FFFFFF",
        gray3: "#828282",
        borderColor: "#D0D5DD",
      },
    },
  },
  plugins: [],
};
