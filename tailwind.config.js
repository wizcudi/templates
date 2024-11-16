/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: { 
    extend: {
      colors: {
        // Carol Dentist Colors
        'beige': '#f4f1ec', 
        'brand-orange': '#eb5e21',
        'brand-purple': '#3e3358',

        // Dai Dentist Colors
        'dai-60-percent':"#e5e5e5",
        'dai-30-percent':"#14213d",
        'dai-accent-one':"#fca311",
        'dai-accent-two':"#94d2bd",
        'dai-accent-three':"#f1e3d3",
      },
      screens: {
        'max-nine-hundred': {'max': '910px'},
        'max-nine': {'max': '900px'},
        'max-seven-hundred': {'max': '767.5px'},
        'max-seven': {'max': '700px'},
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

