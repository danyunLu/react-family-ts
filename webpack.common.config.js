//通用配置
const path = require('path');
const webpack = require('webpack');
// const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
//const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    /*入口*/
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],//提取公共库
    },

    /*输出到dist文件夹，输出文件名字为bundle.js 优化点：缓存*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        },{ 
            test: /\.tsx?$/, 
            loader: ["awesome-typescript-loader"]
        },{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    devServer: {
        //hot:true, //模块热替换 等同命令 --hot
        port: 8088,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    /**
     * 文件路径优化 
     */
    resolve: {
        extensions: [".ts", ".tsx", ".js","json"]
    },
    plugins: [
        //
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        //公共库缓存
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        //new CheckerPlugin()
    ],
    devtool: "inline-source-map"
};