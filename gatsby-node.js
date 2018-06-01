const path = require('path')

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.json'],
    },
  })
  return config
}
