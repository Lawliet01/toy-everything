const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    optimization: {
        minimize:false,
    },
    output:{
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[["@babel/plugin-transform-react-jsx",{pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    watch: true,
    devtool: "inline-source-map",
}