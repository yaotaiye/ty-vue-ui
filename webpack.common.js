 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 //const vueLoaderConfig=require('vue-loader.conf')
 module.exports = {
       entry: {
          app: './src/main.js'
       },
       plugins: [
             new CleanWebpackPlugin(), //清空dist
             new HtmlWebpackPlugin({ template: './src/public/index.html' }), //加载首页,生成index.html
             new VueLoaderPlugin() //vue 文件加载器最新用法
       ],
       output: {
             filename: '[name].bundle.[hash].js'
            ,path: path.resolve(__dirname, 'dist')
          //  ,library: 'jquery' //暴露一个全局变量jquery，在程序中便可以使用require('jquery')或者 import jquery from 'jquery'
            ,libraryTarget: 'umd'//在 AMD 或 CommonJS require 之后可访问
          //  ,chunkFilename: '[name].bundle.js' //动态加载包命名格式
        },
       externals: { //打包不将jq打包进来，而是在index.html以<script>方式单独引进
         jquery: "jQuery"
      },
       optimization: { //防止重复，提取公共的部分，分离代码
          splitChunks: {
            chunks: 'all'
          }
        },
       module: {
             rules: [
                 {
                     test: /\.css$/,
                     use: [
                         'style-loader',
                         'css-loader'
                     ],
                     exclude: /node_modules/
                 },
                 {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                         'file-loader'
                     ]
                     ,exclude: /node_modules/
                 },
                 {
                     test: /\.(woff|woff2|eot|ttf|otf)$/,
                     use: [
                         'file-loader'
                     ]
                     ,exclude: /node_modules/
                 },
                 {
                     test:/\.less$/,
                     use:[
                         'vue-style-loader', //lang=less,需要vue-style-loader解析
                         'css-loader',
                         'less-loader'
                     ],
                     exclude: /node_modules/
                 },
                 {
                     test:/\.vue$/,
                     loader:'vue-loader',
                     options:{
                         loaders:{
                             'less':[//lang属性对应的名称
                                 'vue-style-loader'//首先给vue的样式loader过滤一遍
                                 , 'css-loader'//css-loader,把css转js
                                 , 'less-loader'//用less编译
                             ]
                         }
                     },
                     exclude: /node_modules/
                 },
                 {
                     test: /\.js$/,
                     use: 'babel-loader',
                     exclude: /node_modules/
                 }
             ]
         },
       resolve:{
         //引入路径是不用写对应的后缀名
         extensions: ['.js', '.vue', '.json'],
         //缩写扩展
         alias:{
             //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
             'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
             //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
             '@': path.resolve(__dirname,'./src'),
         }
      },
 };