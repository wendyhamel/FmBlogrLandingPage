/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['Overpass', 'sans-serif'],
      'heading': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '3.5xl': '2.05rem',
      },
      colors: {
        'light-red' : 'hsl(356, 100%, 66%)', //cta text
        'red' : 'hsl(355, 100%, 74%)', //cta hover background
        'dark-blue' : 'hsl(208, 49%, 24%)', //headings
        'gray-blue' : 'hsl(240, 2%, 79%)', //footer text
        'dark-gray-blue' : 'hsl(207, 13%, 34%)', //body copy
        'dark-black-blue' : 'hsl(240, 10%, 16%)', //footer background

        'red-gradient-start' : 'hsl(13, 100%, 72%)', //intro/cta mobile nav
        'red-gradient-end' : 'hsl(353, 100%, 62%)',

        'blue-gradient-start' : 'hsl(237, 17%, 21%)', //body
        'blue-gradient-end' : 'hsl(237, 23%, 32%)',
      }
    },
  },
  plugins: [],
}

