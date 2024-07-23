/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        color1: "#FF9900",
        color2: "#EC7211",
        color3: "#EBEBEB",
        color4: "#B0C4DE",
        color5: "#2C3E50",
        color6: "#B0E0E6",
        color7: "#FAF0E6",
      },
    },
  },
  plugins: [],
};
