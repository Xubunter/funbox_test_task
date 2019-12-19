const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (webpackEnv) => {
  const isEnvProduction = webpackEnv === 'production';
  
  return {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
      publicPath: isEnvProduction ? '/funbox_test_task/' : '/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [ 'babel-loader', 'pug-as-jsx-loader' ]
        },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader?name=./src/fonts/[name].[ext]'
            },
          ]
        },
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    devServer: {
      contentBase: './public'
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            
            template: './public/index.html',
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      // new HtmlWebpackPlugin({
      //     template: require('./public/index.html'),
      //     inject: false,
      //     appMountId: 'app',
      //   })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
};

module.exports = (env, argv) => {
  const cfg = config(argv.mode)
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    cfg.output.filename = '[name].[hash].js';
  }

  return cfg;
};