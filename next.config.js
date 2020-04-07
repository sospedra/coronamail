const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const isProduction = process.env.NODE_ENV === 'production'
const common = {
  webpack: (config, { buildId }) => {
    config.resolve.modules.push(__dirname)
    config.plugins.push(new Dotenv({ silent: true }))
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(buildId),
      }),
    )

    return config
  },
}

module.exports = isProduction ? common : common
