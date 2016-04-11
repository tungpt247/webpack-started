const path           = require('path')
const webpack        = require('webpack')
const merge          = require('webpack-merge')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const env            = process.env.WEBPACK_ENV

const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', 'jsx']
  }
}

if (env === 'start') {
  module.exports = merge(config, {
    watch: true
  })
}

if (env === 'build') {
  const plugins = {
    plugins: [
      new UglifyJsPlugin({ minimize: true })
    ]
  }
  module.exports = merge(config, { plugins })
}
