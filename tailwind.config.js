/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        'hero-btn-shadow':'5px 5px 5px rgba(0, 0, 0, 0.3)'
      },
      boxShadow:{
        'img-shadow':'-10px -10px 0px rgba(255, 255, 255, 1)'
      }
    },
  },
  plugins: [],
}

