/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        purple: {
          400: "#C084FC", // Closer to the design's soft purple
        },
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
