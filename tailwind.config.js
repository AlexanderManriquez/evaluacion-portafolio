/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#38BDF8',
        textPrimary: '#111827',
        textSecondary: '#919aac',
        bgLight: '#F9FAFB'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}

