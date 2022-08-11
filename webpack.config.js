const path = require('path');



module.exports = {

    // entry: ['./src/index.js', './src/savedInput.js'],

    entry: {

        index: './index.js'

    },

    output: {

        path: path.resolve(__dirname, 'docs'),

        filename: 'index.js'

    },

    mode: 'development'

};