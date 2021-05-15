const htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin= require("vue-loader/lib/plugin")
module.exports = {
    entry: "./main.js",
	devServer:{
		historyApiFallback:true
	},
    output: {
        path:__dirname,
        filename:"bundle.js"
    },
    resolve:{
       alias:{
           "vue":"vue/dist/vue.js"
       }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:"url-loader"
            },{
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:"url-loader"
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:"index.html"
       }),
       new VueLoaderPlugin()
    ]
}