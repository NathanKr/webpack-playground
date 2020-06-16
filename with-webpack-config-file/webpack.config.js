const path = require('path')

module.exports = {
    entry: "./src/js/app.js",
    output : {
        // here the path must be absolute
        path:path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    }
}