/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        BlackText: "#262626",
        WhiteBack: "#F2F2F2",
        GrayBorder: "#8C7E79",
        Cream: "#F2D8A7",
        Bronze: "#F28F6B",
      },

      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
