const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      white: colors.white,
      black: colors.black,
    },
    //   We are gonna completely rewrite the configurations so we cannot use the default tailwind css classes!
    fontSize: {
      xs: ['.75rem', '1rem'],
      sm: ['.875rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.25rem', '2rem'],
      xl: ['2rem', '2.5rem'],
      '2xl': ['3rem', '3.25rem'],
    },
    lineHeight: {
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3.25rem',
    },
    fontWeight: {
      //   'extra-light': 100,
      thin: 200,
      //   light: 300,
      normal: 400,
      //   medium: 500,
      semibold: 600,
      //   bold: 700,
      'extra-bold': 800,
      //   black: 900,
    },
    extend: {
      cursor: {
        copy: 'copy',
        grab: 'grab',
        grabbing: 'grabbing',
      },
      maxWidth: {
        xxs: '16rem',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'active'],
      boxShadow: ['active'],
      visibility: ['group-hover'],
      translate: ['group-hover'],
      brightness: ['hover'],
      zIndex: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
