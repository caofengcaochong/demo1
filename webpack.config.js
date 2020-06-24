var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: path.join(__dirname + '/src/main.js'),
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader: 'url-loader',
                options:{
                    //在新版本的file-loader中esModule默认为true，他们在引入图片路径时，方式不同
                    esModule:false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
        // new MiniCssExtractPlugin({
        //     filename: 'css/bundle.css'
        // })
    ],
    mode: 'development'

}