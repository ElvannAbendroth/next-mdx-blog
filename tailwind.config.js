/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      foreground: colors.gray[800],
      background: colors.white,
      pre: colors.gray[800],
      black: colors.black,
      muted: { DEFAULT: colors.gray[500], foreground: colors.white, hover: colors.gray[400] },
      white: colors.white,
      gray: colors.slate,
      primary: { DEFAULT: colors.indigo[700], foreground: colors.white, hover: colors.indigo[500] },
      secondary: { DEFAULT: colors.pink[500], foreground: colors.white },
    },

    extend: {
      maxWidth: {
        layout: '64rem',
        content: '48rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
