 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
module.exports = merge(common, {
       mode: 'development',
       devtool: 'inline-source-map',
       devServer: { //先安装webpack-dev-server,提供简单的 web server，并且具有 live reloading(实时重新加载)功能
       // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        overlay: {
           errors: true // 将webpack编译的错误显示在网页上面
        },
        port: 9000
       }

 });