const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
  devServer: {
  contentBase: path.join(__dirname, './dist'),
  hot: true,
  compress: true,
  historyApiFallback: true,
  port: 3000,
},
  entry: {
    app: [
      "@babel/polyfill",
      './src/index',
    ]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
  //     {
  //       test: /\.scss$/,
  //       use: ExtractTextPlugin.extract({
  //         fallback: "style-loader",
  //         use: [
  //           {
  //             loader: 'css-loader',
  //             options:{
  //               modules: true,
  //               sourseMap: true,
  //               importLoaders:2,
  //               localIdentName: '[name]__[local]__[hash:base64:5]'
  //              }
  //             },
  //             "sass-loader"
  //          ]
  //         })
  //   },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',

        // Could also be write as follow:
        // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        use: [
            {
                loader: 'css-loader',
                query: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 2,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            'sass-loader'
        ]
    }),
  },
  {
    test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
},
  ]
},
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src') ],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      actions: path.resolve(__dirname, 'src/actions'),
      containers: path.resolve(__dirname, 'src/containers'),
     }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "index.html"
    }),
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
  ]
}