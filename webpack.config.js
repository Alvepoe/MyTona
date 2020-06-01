const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const optimize = () => {
    const config = {};

    if (isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
    return config;
};

const chooseFilePattern = ext => isProd ? `[name].[hash].${ext}` : `[name].${ext}`;

function choosePublicPath () {
   return !isProd ? '/' : ''
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: chooseFilePattern('js'),
        publicPath: choosePublicPath()
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    optimization: optimize(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },

            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        publicPath: choosePublicPath()
                    },
                }, "css-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        publicPath: choosePublicPath()
                    },
                }, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: isProd
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: chooseFilePattern('css')
        })
    ]
};