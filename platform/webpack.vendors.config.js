const path = require('path');

module.exports = {
    entry: {
        'vendors': path.join(process.cwd(), './src/vendors.ts')
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};