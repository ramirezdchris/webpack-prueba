const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",

    output:{
        clean: true,
        filename: 'main.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                },
                
            },
            {
                test: /\.css$/i,
                exclude: /styles.css/,
                use: ['style-loader', 'css-loader']
            },  
            {
                test: /styles.css/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                },
                ],
            },{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }   
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserPlugin()
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            //filename: 'index.html',
            // template es el archivo que agarrar para automatizarlo
            template: './src/index.html',
            
        }),
        new MiniCssExtractPlugin({
            //filename: '[name].css',
            filename: '[name].[fullhash].css', // cachedel archivo
            //ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets/", to: "assets/"}
            ],
        }),
    ]
}



// Primera Configuracion que hice video 88
/*
module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: falsecls,                  
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]

}
*/



