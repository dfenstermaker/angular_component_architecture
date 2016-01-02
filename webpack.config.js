var webpack            = require('webpack'),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    HtmlWebpackPlugin  = require('html-webpack-plugin'),
    PrefetchPlugin     = webpack.PrefetchPlugin,
    npmRoot            = __dirname + "/node_modules";

module.exports = {
  entry: {
    vendors: [
      'angular',
      'lodash',
      'angular-ui-router',
      'angular-material',
      'angular-messages',
      'angular-aria',
      'angular-animate',
      'angular-material-icons'
    ],
    index: ['./src/index.js'],
    styles: [
      './src/main.scss',
      npmRoot + '/angular-material/angular-material.min.css',
      npmRoot + '/angular-material-icons/angular-material-icons.css'
    ]
  },

  output: {
    path: __dirname + "/target/webroot",
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /[\/]angular\.js$/,
      loader: "exports?angular"
    }, {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: "babel?cacheDirectory=true&presets=es2015"
    }, {
      test: /\.html$/,
      exclude: [/node_modules/],
      loader: "html"
    }, {
      test: /main\.scss$/,
      // Query parameters are passed to node-sass
      loader: "style!css!sass?outputStyle=expanded"
    },

      { test: /\.css$/, loader: "style!css" },
      { test: /\.svg$/, loader: "raw" }
    ],

    noParse: [
    ]
  },

  port: 9000,

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css'],
    modulesDirectories: ['bower_components', 'node_modules', 'src'],
    alias: {
      module: 'module.js'
    }
  },

  devtool: "source-map",

  plugins: [
    new PrefetchPlugin('angular'),
    new PrefetchPlugin('lodash'),
    new PrefetchPlugin('module'),
    new webpack.optimize.DedupePlugin(),
    new CommonsChunkPlugin("vendors", "vendors.[hash].js"),
    new HtmlWebpackPlugin({
      title: 'Components',
      template: 'index.html',
      inject: true
    })
  ]
}
