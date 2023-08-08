/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const themeSwapper = require('tailwindcss-theme-swapper')
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
      white: colors.white,
      gray: colors.slate,
      black: colors.black,
    },

    extend: {
      maxWidth: {
        layout: '64rem',
        content: '48rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {
              foreground: colors.gray[800],
              background: colors.white,
              pre: colors.gray[800],
              muted: { DEFAULT: colors.gray[500], foreground: colors.white, hover: colors.gray[400] },
              input: { DEFAULT: colors.gray[200], foreground: colors.gray[800], hover: colors.gray[100] },
              primary: { DEFAULT: colors.indigo[700], foreground: colors.white, hover: colors.indigo[500] },
              secondary: { DEFAULT: colors.pink[500], foreground: colors.white },
              border: { DEFAULT: colors.gray[200] },
            },
          },
        },
        {
          name: 'dark',
          selectors: ['[data-theme="dark"]'],

          theme: {
            colors: {
              foreground: colors.gray[200],
              background: colors.gray[900],
              pre: colors.gray[800],
              muted: { DEFAULT: colors.gray[400], foreground: colors.black, hover: colors.gray[500] },
              input: { DEFAULT: colors.gray[800], foreground: colors.gray[200], hover: colors.gray[900] },
              primary: { DEFAULT: colors.indigo[500], foreground: colors.white, hover: colors.indigo[600] },
              secondary: { DEFAULT: colors.pink[500], foreground: colors.white },
              border: { DEFAULT: colors.gray[800] },
            },
          },
        },
        {
          name: 'matrix',
          selectors: ['.matrix'],
          theme: {
            colors: {
              primary: '#0f0',
            },
          },
        },
      ],
    }),
  ],
}
