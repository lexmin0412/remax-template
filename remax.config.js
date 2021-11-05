const less = require('@remax/plugin-less')

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
	plugins: [
		// 支持less
    less({
      lessOptions: {
        globalVars: {
          'primary-color': '"#4569d4"',
        },
      },
    }),
  ],
	configWebpack({ config, webpack, addCSSRule }) {
		config.output.publicPath('/remax-template/')
  },
};
