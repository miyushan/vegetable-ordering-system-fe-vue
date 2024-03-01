/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'auth': "url('/images/marisol-benitez-QvkAQTNj4zk-unsplash.jpg')",
        'cover-img': "url('/images/cover-image.jpg')"
      }
    }
  },
  plugins: []
}
