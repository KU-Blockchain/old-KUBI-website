const path = require('path');

devtool: 'source-map'


module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
        {
            test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
            enforce: 'pre',
            exclude: [/node_modules\/(?!(web3)\/).*/, /web3\/dist\/web3.min.js/],
            use: ['source-map-loader'],
        },
     ],
    },
  ignoreWarnings: [/Failed to parse source map/],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};