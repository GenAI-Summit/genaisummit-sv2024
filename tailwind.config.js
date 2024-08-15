/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxWidth: "1280px",
      },
      fontFamily: {
        monaspace_krypton: ["MonaspaceKrypton"],
        monaspace_neon: ["MonaspaceNeon"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        color1: "#FF11E7",
        color2: "#3971FF",
        color3: "#EFFF00",
        color4: "#15FFEE",
        color5: "#15C1FF",
        color6: "#1F2935",
        color7: "#8B949E",
        color8: "#F3F3F3",
        color9: "#161B22",
        color10: "#924CF5",
        color11: "#F0F0F0",
        color12: "#A0A0A0",
        color13: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
