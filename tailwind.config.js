/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rhytm: "#767B91",
        "nice-yellow": "#fca311",
        "nice-blue": "#003049",
        "mac-yellow": "#FFBD44",
        "mac-red": "#FF605C",
        "mac-green": "#00CA4E",
        "beige-g": "#E1C699",
        "dark-grey": "#333333",
      },

    },
  },
  plugins: [],
};
