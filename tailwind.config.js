/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#FCC506",
        primary: "#333333",
        secondary: "#FECB00",
        link: "#57c4e4",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        all: "0px 0px 20px -6px rgba(0,0,0,0.2)",
      },
    },
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
