var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': './src/main'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
      //new UglifyJsPlugin({
      //    // beautify: true, //debug
      //    // mangle: false, //debug
      //    // dead_code: false, //debug
      //    // unused: false, //debug
      //    // deadCode: false, //debug
      //    // compress: {
      //    //   screw_ie8: true,
      //    //   keep_fnames: true,
      //    //   drop_debugger: false,
      //    //   dead_code: false,
      //    //   unused: false
      //    // }, // debug
      //    // comments: true, //debug


      //    //beautify: false, //prod
      //    //mangle: {
      //    //    screw_ie8: true,
      //    //    keep_fnames: true
      //    //}, //prod
      //    //compress: {
      //    //    screw_ie8: true
      //    //}, //prod
      //    //comments: false //prod
      //})
    ]
};
