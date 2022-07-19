/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      colors: {
        "primary-1": "hsl(176, 50%, 47%)",
        "primary-2": "hsl(176, 72%, 28%)",
        "secondary-1": "hsl(0, 0%, 48%)",
        "secondary-2": "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
