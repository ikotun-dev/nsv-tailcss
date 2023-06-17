// postcss.config.js

module.exports = {
  plugins: [
    ["tailwindcss", { config: "./tailwind.config.custom.js" }],
    "@nativescript/tailwind",
  ],
};
