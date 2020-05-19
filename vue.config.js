module.exports = {
	configureWebpack: {
		module: {
			// rules: [{
			// 	test: /\.(sass|scss)$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader'
			// 		},
			// 		{
			// 			loader: 'css-loader'
			// 		},
			// 		{
			// 			loader: 'sass-loader'
			// 		}
			// 	],
			// 	exclude: [/node_modules/]
			// }],
			// rules: [{
			// 	test: /\.less$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader'
			// 		},
			// 		{
			// 			loader: 'css-loader'
			// 		},
			// 		{
			// 			loader: 'sass-loader'
			// 		}
			// 	]
			// }]
		}
	},
	// chainWebpack: config => {
	// 	config.module
	// 		.rule('sass')
	// 		.test(/\.(sass|scss)$/)
	// 		.use('sass-loader')
	// 		.loader('sass-loader')
	// 			.end()
	// 		.use('css-loader')
	// 		.loader('css-loader')
	// 			.end()
	// 		.use('style-loader')
	// 		.loader('style-loader')
	// 			.end()
	// }
}