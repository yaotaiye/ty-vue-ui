 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
module.exports = merge(common, {
        entry: {
            app: './src/ty.vue.js'
        },
        output: {
            filename: '[name].min.js'
            ,path: path.resolve(__dirname, 'dist')
            //  ,library: 'jquery' //暴露一个全局变量jquery，在程序中便可以使用require('jquery')或者 import jquery from 'jquery'
            ,libraryTarget: 'umd'//在 AMD 或 CommonJS require 之后可访问
            //  ,chunkFilename: '[name].bundle.js' //动态加载包命名格式
        },
       mode: 'production',


 });