const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",

    output:{
        clean: true
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
            }  
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            //filename: 'index.html',
            // template es el archivo que agarrar para automatizarlo
            template: './src/index.html',
            
        }),
        new MiniCssExtractPlugin({
            //filename: '[name].css',
            filename: 'nuevo-estilo.css', // cachedel archivo
            //ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets/", to: "assets/"}
            ],
        })
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



