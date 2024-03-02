/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'img-auth': "url('/images/marisol-benitez-QvkAQTNj4zk-unsplash.jpg')",
        'img-cover': "url('/images/cover-image.jpg')",
        'img-all-products': "url('/images/thomas-le-pRJhn4MbsMM-unsplash.jpg')"
      },
      spacing: {
        128: '32rem'
      }
    }
  },
  plugins: []
}
