/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf_reg: "SF_Regular",
        sf_med: "SF_Medium",
        sf_bold: "SF_Bold",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      container: {
        padding: "1rem",
      },
      screens: {
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1180px",
        "2xl": "1350px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
