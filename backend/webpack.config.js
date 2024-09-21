// INFO: Used for github action. 
// TODO: Need to fix (not working ATM)

const path = require('path');

module.exports = {
    entry: './src/server.ts', // entry point to our file
    module: {
        rules:[
            {
                test: '/\.ts$/', // match files
                use: 'ts-loader',
                exclude: '/node-modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] // resolve these extensions
    },
    output: {
        filename: 'bundle.js', // output file name (default is main.js)
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development', // dev mode (env type)
}