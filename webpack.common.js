 const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 const webpack = require('webpack');
 //解析、编译速度优化
 const os = require('os');
 const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
 const HappyPack = require('happypack');
 const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
 const createHappyPlugin = (id, loaders) => new HappyPack({
     id: id,
     loaders: loaders,
     threadPool: happyThreadPool,
     verbose: process.env.HAPPY_VERBOSE === '1' // make happy more verbose with HAPPY_VERBOSE=1
 });
 module.exports = {
       entry: {
          app: './src/main.js'
       },
     resolve: {
         mainFields: ['main'], // 只采用main字段作为入口文件描述字段，减少搜索步骤
     },
     plugins: [
            // new CleanWebpackPlugin(), //清空dist
              new HtmlWebpackPlugin({ template: './src/public/index.html' }) //加载首页,生成index.html
             ,new VueLoaderPlugin() //vue 文件加载器最新用法
             ,createHappyPlugin('happy-babel', [{
                 loader: 'babel-loader',
                 options: {
                     babelrc: true,
                     cacheDirectory: true // 启用缓存
                 }
             }])
             ,createHappyPlugin('happy-css', ['css-loader', 'vue-style-loader'])
             ,new HappyPack({
                 loaders: [{
                     path: 'vue-loader',
                     query: {
                         loaders: {
                             less: 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
                         }
                     }
                 }]
             })
       ],
       output: {
             //filename: '[name].bundle.[hash].js'
             filename: '[name].bundle.js'
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
          },
           minimizer: [
               new ParallelUglifyPlugin({ // 多进程压缩,实现并发编译，提升压缩速度
                   cacheDir: '.cache/',
                   uglifyJS: {
                       output: {
                           comments: false,
                           beautify: false
                       },
                       compress: {
                           warnings: false,
                           drop_console: true,
                           collapse_vars: true,
                           reduce_vars: true
                       }
                   }
               }),
           ]
        },
       module: {
           noParse: /jquery|lodash/,// 忽略未采用模块化的文件，因此jquery或lodash将不会被下面的loaders解析
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