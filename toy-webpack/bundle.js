const Webpack = require("./lib/webpack.js")
const options = require("./webpack.config.js")

const webpack = new Webpack(options)

webpack.run()