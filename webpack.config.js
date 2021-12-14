const path = require('path');


module.experts = {
    entry: './docs/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
};