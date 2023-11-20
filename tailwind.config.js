/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        cor01: "#385937"
      },
      colors: {
        "cor-destaque": "#2fbf2a",
        "cor-primaria": "#385937",
        "cor-secundaria": "#2a332a",
        "dark-grey": "#333333",
        "intermediate-grey": "#7a7a7a",
        "border-grey": "#bcbcbc",
        "light-grey": "#dedede",
        white: "#f7f7f7",
        green: "#3fa33d",
        "app-red": "#e94b35"
      }
    }
  },
  plugins: []
};
