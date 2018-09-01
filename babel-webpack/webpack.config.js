var path = require('path')
module.exports = {
    entry: "./src/entry.js", //入口路径配置
    output: { //出口配置
        path: __dirname + '/build/js', //输出路径
        filename: "bundle.js" //输出文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }
        }]
    }
};