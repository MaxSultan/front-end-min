const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'front-end-min.js',
        library: {
            name: 'front-end-min',
            type: 'umd',
        },
    },
};