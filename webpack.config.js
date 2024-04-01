var path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
var ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                // test: /\.tsx?$/,
                test: /\.(ts|tsx)$/,
                use: ['babel-loader', 'eslint-loader', 'ts-loader'],
                // use: 'babel-loader'
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    rules: {
                        indent: ['error', 4]
                        // indent: ["error", { "allowIndentationTabs": true }]
                    }
                }
            },

            //  {
            //     enforce: 'pre',
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         rules: {
            //             indent: ['error', 4]
            //             // indent: ["error", { "allowIndentationTabs": true }]
            //         }
            //     }
            //   },
            //   {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //   },
            //   {
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     loader: 'ts-loader',
            //   },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ESLintPlugin(),
        //   new HtmlWebpackPlugin({
        //     template: './public/index.html'
        //   })
    ]
};
