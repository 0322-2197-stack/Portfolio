/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17120f",
        ember: "#d97706",
        moss: "#2f5f48",
        fog: "#ece7df"
      },
      boxShadow: {
        card: "0 18px 40px -22px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
