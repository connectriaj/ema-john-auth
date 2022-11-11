/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#92dae5",

          secondary: "#ef2bcb",

          accent: "#1e9e42",

          neutral: "#1E1F2A",

          "base-100": "#3D434D",

          info: "#1779E8",

          success: "#13AE5E",

          warning: "#F1C45B",

          error: "#EA4A2E",
        },
      },
    ],
  },
  plugins: [],
};
