const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'main.ts'),
    output: {
        path: path.resolve(__dirname, '../website-dist'),
        filename: "bundle.js"
    }
}
