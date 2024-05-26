/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      inset: {
        '-10': '-1rem',
      },
      colors:{
        'search':'rgb(35,35,53) ',
        'button':'rgb(49,48,45)',
        'hover-button':'rgb(37,36,34)',
        'bg-text':'rgb(20,20,21)',
        'btn':'rgb(18,184,84)'
      },
    },
  },
  plugins: [],
}

