const path = require('path');

module.exports = {
  entry: './mentee.js', // entry mentee.js is where you will write your JS code

  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // to look for any .js files (excluding ones in the node_modules folder)

        // apply babel transpilation using babel-loader with the @babel/preset-env preset
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
