const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
   mode: 'production',
   output: {
	   path: path.resolve(__dirname, 'dist'),
	   filename: '[name].[contenthash].js',
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
       filename: "[name].[contenthash].css",
       chunkFilename: "[id].[contenthash].css",
     }),
   ],
   optimization: {
		 moduleIds: 'deterministic',
     minimizer: [
       new CssMinimizerPlugin(),
     ],
		 splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
  },
});
