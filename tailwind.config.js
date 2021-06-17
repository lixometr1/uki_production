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
      orange: {
        DEFAULT: '#FF3434',
        500: '#CB1D26',
      },
      grey: {
        500: '#CDCDCD',
        dark: '#020202',
      },
      bg: '#020202',
      white: '#fff',
    },
    fontSize: {
      // x16 0.125 - 2px
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      34: '2.125rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      46: '2.875rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      54: '3.375rem',
      56: '3.5rem',
      58: '3.625rem',
      60: '3.75rem',
      62: '3.875rem',
      64: '4rem',
      66: '4.125rem',
      68: '4.25rem',
      70: '4.375rem',
      72: '4.5rem',
      74: '4.625rem',
      76: '4.75rem',
      78: '4.875rem',
      80: '5rem',
      82: '5.125rem',
      84: '5.25rem',
      86: '5.375rem',
      88: '5.5rem',
      90: '5.625rem',
      92: '5.75rem',
      94: '5.875rem',
      96: '6rem',
      98: '6.125rem',
    },
    fontFamily: {
      main: ['Gilroy', ...defaultTheme.fontFamily.sans],
      second: ['Cormorant', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xl: { max: '1550px' },
      lg: { max: '1350px' },
      md: { max: '992px' },
      sm: { max: '760px' },
      xs: { max: '550px' },
      xxs: { max: '350px' },
    },
    extend: {
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
