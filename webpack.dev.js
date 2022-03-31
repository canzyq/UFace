const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
		clean: true,
   },
   module: {
     rules:[
	     {
	        test: /\.(sa|sc|c)ss$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader",
	          "postcss-loader",
	          "sass-loader",
	        ],
	      },
		 ],
   },
   plugins: [
     new MiniCssExtractPlugin({
       filename: "[name].css",
       chunkFilename: "[id].css",
     }),
   ],
});
