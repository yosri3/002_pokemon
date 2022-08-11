const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/img/[name].[ext]',
                    }
                }]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};