/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', // Add your entry files
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
