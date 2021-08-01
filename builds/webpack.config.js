const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../packages/cloud-ui/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
                loader: "url-loader"
            },
            {
                test: /\.(scss|css)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
