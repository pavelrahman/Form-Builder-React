const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                //adding css to project. first css-loader convert css into js then style-loader will take that js and inject it into the dom. 
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            // {
            //     //Implementing css modules 
            //     test: /\.css$/i,
            //     use: [
            //             "style-loader",
            //             {
            //                 loader: "css-loader",
            //                 options: {
            //                     importLoaders: 1,
            //                     modules: true,
            //                 },
            //             }
            //     ],
            // },
        ]
    }
}