var webpack = require('webpack');
var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var STYLE_PATH = path.resolve(ROOT_PATH, 'style');

module.exports = {
    devtool: 'source-map',  //方便打包的文件查错，该参数只能用于开发环境，生产环境要换一个参数
    watch: true,
    // watchOptions: {
    //     poll: true
    // },  //实时监听,不能实现hot replace，比较慢
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        // hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style-loader','css-loader','less-loader'],
                include: STYLE_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({  //使用本插件可以不必在每个js文件中require一次jquery
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

    ]
};
