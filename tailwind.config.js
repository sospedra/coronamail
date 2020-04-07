module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        mono: ['Monaco', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
