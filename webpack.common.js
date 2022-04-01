const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
            ucomponment: path.join(__dirname, 'src/componment/'), 
            ulocale: path.join(__dirname, 'src/locale/'), 
            ustyle: path.join(__dirname, 'src/style/'), 
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.less$/i,
                use: [
                      MiniCssExtractPlugin.loader,
                      'css-loader',
                      'less-loader',
                ],
            },
        ],
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
};
