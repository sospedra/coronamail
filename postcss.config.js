const purgecss =
  process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: ['./components/**/*.tsx', './pages/**/*.tsx'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
      }
    : {}

module.exports = {
  plugins: {
    ...purgecss,
    'postcss-preset-env': {
      browsers: ['last 2 versions', 'ie >= 10'],
      features: {
        'color-mod-function': {
          unresolved: 'warn',
        },
      },
    },
    tailwindcss: {},
  },
}
