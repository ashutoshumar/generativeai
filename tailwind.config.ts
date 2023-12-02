/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     extend: {
      colors: {
        "neutral-background-2": "#2d2d2d",
        "text-disabled": "#707070",
        "borders-default": "#494949",
        "text-normal": "#cbcbcb",
        "text-muted": "#999",
        "text-headings": "#f8f8f8",
        "primary-orange": "#fea013",
        gray: "#111",
        "primary-orange-muted": "#69563a",
      },
      spacing: {},
      fontFamily: {
        heading2: "Poppins",
        "font-awesome-6-free": "'Font Awesome 6 Free'",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xs: "12px",
        inherit: "inherit",
      },
    },
  },
  plugins: [],
}