/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pale-violet': 'hsl(276, 100%, 81%)',
        'moderate-violet': 'hsl(276, 55%, 52%)',
        'light-moderate-violet': 'hsla(276, 41%, 93%, 1)',
        'desaturated-dark-violet': 'hsl(271, 15%, 43%)',
        'grayish-blue': 'hsl(206, 6%, 79%)',
        'very-dark-desaturated-violet': 'hsl(271, 36%, 24%)',
        'dark-grayish-violet': 'hsl(270, 7%, 64%)',
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'not-quite-white': 'hsla(0, 0%, 98%, 1)',
        'light-grayish-violet': 'hsl(270, 20%, 96%)',
        'very-light-magenta': 'hsl(289, 100%, 72%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        base: '62.5%',
        xs: ['0.8rem',{
          lineHeight: '0.9rem',
        }],
        sm: ['0.8rem',{
          lineHeight: '1.1rem',
        }],
        md: ['0.9rem',{
          lineHeight: '1.1rem',
          letterSpacing: '-0.07px'
        }],
        lg: ['1.1rem',{
          lineHeight: '1.3rem',
        }],
      },
      spacing: {
        '1r': '.1rem',
        '2r': '.2rem',
        '3r': '.3rem',
        '4r': '.4rem',
        '5r': '.5rem',
        '6r': '.6rem',
        '7r': '.7rem',
        '7r5': '.75rem',
        '8r': '.8rem',
        '9r': '.9rem',
        '10r': '1rem',
        '11r': '1.1rem',
        '12r': '1.2rem',
        '13r': '1.3rem',
        '14r': '1.4rem',
        '15r': '1.5rem',
        '16r': '1.6rem',
        '17r': '1.7rem',
        '18r': '1.8rem',
        '19r': '1.9rem',
        '20r': '2rem',
        '30r': '3rem',
        '40r': '4rem',
        '50r': '5rem',
        '60r': '6rem',
        '70r': '7rem',
        '80r': '8rem',
        '90r': '9rem',
        '100r': '10rem',
        '110r': '11rem',
        '120r': '12rem',
        '130r': '13rem',
        '140r': '14rem',
        '150r': '15rem',
        '160r': '16rem',
      },
    },
  },
  plugins: [],
}
