/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", // Includes all HTML and JS files in the public folder
    "./src/**/*.{html,js,css}", // Includes all CSS, JS, and HTML files in the src folder
  ],
  theme: {       
    extend: {
      colors: { // Extended colors
        primary: '#FF6363', // Custom primary color
        secondary: {
          100: '#E2E205',
          200: '#888883',
        }
      },
      fontFamily: { // Extended font family
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}

// This Tailwind CSS config file was created to add custom properties such as colors and fonts.
// A Tailwind CSS config file is built on the terminal with `npx tailwindcss init` or `npx tailwindcss init --full`.
// Once the new config Tailwind file is created, you have to add the path to your template files in the content section.