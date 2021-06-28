const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: [path.resolve(__dirname, './index.jsx')],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                },
            }
        }
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
        alias: {
            "@root": path.resolve(__dirname, './'),
            "@assets": path.resolve(__dirname, 'assets/'),
            "@pages": path.resolve(__dirname, 'pages/'),
            "@components": path.resolve(__dirname, 'components/'),
        }
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3001,
        historyApiFallback: true,
        hot: true,
    },
};