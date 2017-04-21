const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,               // type of file to transform
      loader: 'babel-loader',      // what loaders to use
      exclude: /node_modules/      // don't transform these files
    }, {
      test: /\.css$/,
      use: [ // if multiple loaders:
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
		      options: {
            module: true,
            localIdentName: '[name]__[local]--[hash:base64:5]', // default '[hash:base64]'
          },
        },
      ],
    }],
  },
};
