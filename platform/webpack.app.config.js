const path = require('path');
const serveStatic = require('serve-static');
const finalHandler = require('finalhandler');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': path.join(process.cwd(), './src/main.ts')
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
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
    },
    externals: [
        function (context, request, callback) {
            if (/^@angular/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunksSortMode: 'manual',
            chunks: []
        }),
    ],
    devServer: {
        before(app) {
            const serveExtensionStatic = serveStatic(path.join(process.cwd(), '../extension/dist'));
            const serverPlatformStatic = serveStatic(path.join(process.cwd(), 'dist'));
            app.use((req, res, next) => {
                if (req.url.includes('/a.module.js')) {
                    serveExtensionStatic(req, res, finalHandler(req, res));
                } else if (req.url.includes('vendors.bundle.js')) {
                    serverPlatformStatic(req, res, finalHandler(req, res));
                } else {
                    next();
                }
            });
        }
    }
};