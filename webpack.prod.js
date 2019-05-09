 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 module.exports = merge(common, {
     mode: 'production',
     plugins: [
         new CleanWebpackPlugin(), //清空dist
         new HtmlWebpackPlugin({ template: './src/public/index.html' }), //加载首页,生成index.html
         new VueLoaderPlugin() //vue 文件加载器最新用法
     ],
 });