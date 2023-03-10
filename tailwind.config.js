/** @type {import('tailwindcss').Config} */
const tailwindColors = require("./node_modules/tailwindcss/colors");
const colorSafeList = [];

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];

const myColors = {
  lime: {},
  sky: {},
  orange: {},
};

for (const colorName in myColors) {
  if (deprecated.includes(colorName)) {
    continue;
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const pallette = tailwindColors[colorName];

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`);
        colorSafeList.push(`bg-${colorName}-${shade}`);
        colorSafeList.push(`from-${colorName}-${shade}`);
        colorSafeList.push(`from-${colorName}-${shade}/30`);
        colorSafeList.push(`from-${colorName}-${shade}/50`);
        colorSafeList.push(`from-${colorName}-${shade}/70`);
        colorSafeList.push(`via-${colorName}-${shade}/30`);
        colorSafeList.push(`to-${colorName}-${shade}/30`);
        colorSafeList.push(`border-${colorName}-${shade}`);
        colorSafeList.push(`outline-${colorName}-${shade}`);
      }
    });
  }
}

module.exports = {
  safelist: colorSafeList,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./_pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
