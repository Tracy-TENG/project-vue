const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV|| 'production',
	target: 'web',
	entry: path.join(__dirname, '../client/index.js'),
	output: {
		filename: 'bundle.【hash:8].js',
		path: path.join(__dirname, '../dist')
	},
	module: {
		rules: [
		  {
		  	test: /\.(vue|js|jsx)$/,
		  	loader: 'eslint-loader',
		  	exclude: /node_modules/,
		  	enforce: 'pre'   //预处理检测下
		  },
		  {
		  	test: /\.vue$/,
		  	loader: 'vue-loader',
		  	options: createVueLoaderOptions(isDev)
		  },
		  {
		  	test: /\.jsx$/,
		  	loader: 'babel-loader',
		  	exclude: /node_modules/
		  },
		  {
		  	test: /\.js$/,
		  	loader: 'babel-loader'
		  },
		  {
		  	test: /\.(gif|jpg|png|svg)$/,
		  	use: [
		  	  {
		  	  	loader: 'url-loader',
		  	  	options: {
		  	  		limit: 1024,
		  	  		name: 'resources/[path][name].[hash:8].[ext]'
		  	  	}
		  	  }
		  	]
		  }
		]
	}
}

module.exports = config
