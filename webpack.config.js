module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test:/\.js$/,
                exclude: '/node_modules',
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                loader: ['eslint-loader', 'babel-loader'],
                exclude: '/node_modules'
            }
        ]
    }
}