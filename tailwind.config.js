module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-color': '#0A192F',
        //ColorPalette
        'light-color': '#CCD6F6',
        'muted-light': '#979BA6',
        'main-color': '#5A5A65',
        'accent-color': '#3FE08E',
        'secondary-color': '#0FE967',
      }
    },
    container:{
      padding:{
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl':'1rem'
      },
      center: true,
    },
    fontFamily: {
      sans: [
        '"Exo 2"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['"Open Sans"','ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Roboto Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
