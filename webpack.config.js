const path = require('path');

module.exports = {
    entry: [
        './node_modules/regenerator-runtime/runtime.js',
        './lib/__components/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    }
};