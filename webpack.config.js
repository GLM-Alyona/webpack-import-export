    const path = require('path');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
 
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            })
        ],

        devServer: {
            watchFiles: './src',
            port: 8080,
          },
   
    }