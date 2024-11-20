/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider1': "url('../images/slider1.jpg')",
        'slider2': "url('../images/slider2.jpg')",
        'slider3': "url('../images/slider3.jpg')",
        'slider4': "url('../images/slider4.jpg')",
        'slider5': "url('../images/slider5.jpg')",
        'slider6': "url('../images/slider6.jpg')",
        'slider7': "url('../images/1.jpg')",
        'slider8': "url('../images/2.jpg')",
        'slider9': "url('../images/slider7.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

