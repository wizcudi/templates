/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        'max-nine-hundred': {'max': '910px'},
        'max-seven-hundred': {'max': '767.5px'},
        'max-six-hundred': {'max': '600px'},
        'max-five-hundred': {'max': '500px'},
        'max-four-hundred': {'max': '400px'},
        'max-three-hundred': {'max': '350px'},
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Webkit browsers (Chrome, Safari, etc.) */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari */
          },
        },
      });
    },
  ],
}

