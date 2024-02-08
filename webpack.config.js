const path = require('path')

module.exports = {
    entry: './src/js/calendar.js',
    plugins: [],
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'calendar.js',
        path: path.resolve(__dirname, 'docs/assets/js/')
    }
}