const path  = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = {
	// 可以多个入口
	entry: {
		app: "./src/index.js"
	},
	//追踪错误和警告,dev
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
       rules: [
	       {
	         test: /\.css$/,
	         use: [
	           'style-loader',
	           'css-loader'
	         ]
	       },
	       {
	         test: /\.(png|svg|jpg|gif)$/,
	         use: [
	           'file-loader',
	         ]
	       }

     ]
    },
    plugins:[
    	// 清理插件
    	new CleanWebpackPlugin(['dist']),
    	//模板html插件
    	new HtmlWebpackPlugin({
    		title: "Output Management"
    	})

    ],
    // 自动更新出口文件
    output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};