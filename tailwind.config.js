/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        'hero-btn-shadow':'5px 5px 5px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

