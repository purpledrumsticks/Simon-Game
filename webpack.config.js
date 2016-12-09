var path = require('path');
module.exports = {
    entry: './src/script.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
          test: path.join(__dirname, 'src'),
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          }
        }]
    }
};
