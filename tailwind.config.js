const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',

      white: '#fff',
    },
    fontFamily: {
      main: ['', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xl: { max: '1450px' },
      lg: { max: '1350px' },
      md: { max: '990px' },
      sm: { max: '760px' },
      xs: { max: '550px' },
      xxs: { max: '350px' },
    },
    extend: {
      fontSize: {
        '2lg': '1.375rem',
        xxs: '0.625rem',
      },
      spacing: {
        5.5: '1.375rem',
        4.5: '1.125rem',
      },
      padding: {},
      borderRadius: {},
      boxShadow: {},
      zIndex: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities }) => {
      const utilities = [
        {
          '.flex-center': {
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
          },
        },
        {
          '.flex-y-center': {
            display: 'flex',
            'align-items': 'center',
          },
        },
        {
          '.flex-x-center': {
            display: 'flex',
            'justify-content': 'center',
          },
        },
      ]
      addUtilities(utilities)
    }),
  ],
}
