/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'Georgia', 'Times New Roman', 'serif'],
        },
        backgroundImage: {
        //   'authBackground': 'url(\'/src/assets/mainbg.jpg\')', -- to change/update
        },
      },
    },
  
    plugins: [
      // Add any Tailwind CSS plugins here
    ],
  }
  