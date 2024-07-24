// tailwind.plugin.js
module.exports = function ({ addBase, config }) {
  addBase({
    "@font-face": {
      fontFamily: "MonaspaceNeon",
      fontWeight: "400",
      fontStyle: "normal",
      src: "url('/fonts/MonaspaceNeon.woff2') format('woff2')",
    },
  });
};
