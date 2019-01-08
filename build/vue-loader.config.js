const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
	return {
		preserveWhitepace: true, //识别空格
		extractcss: !isDev,   //css单独打包
		cssModules: {
			localIdentName: isDev ? '[path]-[name]-[hash:base64:5]': '[hash:base64:5]',
			camelCase: true  //驼峰命名
		},
	}
}

    //hotReload: false, 根据环境变量生成
	  // loaders: {
	  // 	'docs': docsLoader,
	  // },
	  // preLoader: {
	  // 	js: 
	  // },
	  // postLoader{}