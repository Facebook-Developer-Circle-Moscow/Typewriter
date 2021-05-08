const path = require('path');
const webpack = require('webpack');

const PACKAGE = require('../package.json');
const WebManifest = require('../public/favicon/site.webmanifest.json');

const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExcludeAssetsPlugin = require('@ianwalter/exclude-assets-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const Targets = {
  CLIENT: 'client'
};

const getTarget = (target) => {
  switch (target) {
    case Targets.CLIENT:
      return 'web';
  }
};

const getEntry = (target) => {
  switch (target) {
    case Targets.CLIENT:
      return {
        index: './src/client.tsx',
      };
  }
};

module.exports = (target, mode) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const postcss = {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        minimize: isProduction,
        ident: 'postcss',
        plugins: [
          'postcss-flexbugs-fixes',
          'autoprefixer'
        ]
      },
      sourceMap: true
    }
  };

  const css = {
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: true
    }
  };

  const image = {
    loader: ImageMinimizerPlugin.loader,
    options: {
      severityError: 'warning', // Ignore errors on corrupted images
      minimizerOptions: {
        plugins: [
          ['gifsicle', {interlaced: true}],
          ['jpegtran', {progressive: true}],
          ['optipng', {optimizationLevel: 5}],
          ['svgo', {plugins: [{removeViewBox: false}]}],
        ],
      },
    },
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    target: getTarget(target),
    externals: [],
    cache: isDevelopment,
    bail: isProduction,
    devtool: isDevelopment ? 'source-map' : undefined,
    entry: getEntry(target),
    stats: {
      children: false
    },
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      path: path.resolve(__dirname, '../build'),
      publicPath: './',

      filename: '[name].js',
      chunkFilename: '[name].js',

      library: {
        name: PACKAGE.name,
        type: 'umd'
      }
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '../src')
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: [
            'babel-loader',
            'eslint-loader'
          ],
          include: path.resolve(__dirname, '../src')
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            'ts-loader',
            'tslint-loader'
          ],
          include: path.resolve(__dirname, '../src'),
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? require.resolve('style-loader')
                : MiniCssExtractPlugin.loader,
            css,
            postcss
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isDevelopment ? require.resolve('style-loader')
                : MiniCssExtractPlugin.loader,
            css,
            postcss,
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, '../src'),
                  ],
                  minimize: isProduction
                },
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10 * 1024
              }
            },
            image
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true
              }
            },
            image
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
      }),
      new ExcludeAssetsPlugin(),
      new CspHtmlWebpackPlugin({
        'base-uri': '\'self\'',
        'object-src': '\'none\'',
        'script-src': ['\'unsafe-inline\'', '\'self\''],
        'style-src': ['\'unsafe-inline\'', '\'self\'']
      }, {
        devAllowUnsafe: false,
        enabled: true,
        hashingMethod: 'sha256',
      }),
      new webpack.DefinePlugin({
        name: JSON.stringify(PACKAGE.name),
        version: JSON.stringify(PACKAGE.version),
        target: JSON.stringify(target),
        mode: JSON.stringify(mode),
        webmanifest: JSON.stringify(WebManifest),
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new SpriteLoaderPlugin({
        plainSprite: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/images'),
            to: path.resolve(__dirname, '../build/images')
          },
          {
            from: path.resolve(__dirname, '../src/audio'),
            to: path.resolve(__dirname, '../build/audio')
          },
          {
            from: path.resolve(__dirname, '../public/favicon'),
            to: path.resolve(__dirname, '../build/favicon')
          },
          {
            from: path.resolve(__dirname, '../public/robots.txt'),
            to: path.resolve(__dirname, '../build/robots.txt')
          }
        ]
      })
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      }
    },
    performance: {
      hints: isProduction ? 'warning' : false
    }
  };
};