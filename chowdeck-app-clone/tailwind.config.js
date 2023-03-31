
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'bg-body':'#FFF4D4',
      'p-green':'#0C513F',
      'p-orange':'#FFC501',
      's-orange':'#FFC501',
      's-green':'#256353',
      'black':'#000000',
      's-blue':'#99C8FF',
      's-orange-2':'#FFDC65',
      'white':'#ffffff',
      's-black':' #1E1E1E',
      'first-animate': '#02C27F',
    },
    extend: {
      fontFamily: {
        'plus-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
