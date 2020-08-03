const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')

    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugins({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js"
        })
    ]
}