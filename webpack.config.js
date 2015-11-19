var webpack = require('webpack');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: './dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test: /\.(js|jsx|babel)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
        // loader: 'babel',
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }]
  }
}
