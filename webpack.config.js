var path    = require('path');
var webpack = require('webpack');

var BUILD_DIR  = path.resolve(__dirname, 'build/');
var SOURCE_DIR = path.resolve(__dirname, 'src/');
var TEST_DIR = path.resolve(__dirname, '__test__/');

module.exports = {
	entry:'./src/app.js',
	output:{
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
      extensions: ['.js', '.jsx']
    },
	module:{
		loaders:[
			{
		      test: /[^\.spec].jsx?$|\.jsx?$/,
		      exclude: /node_modules/,
		      include:[SOURCE_DIR, TEST_DIR],
		      loader: 'babel-loader',
		      query: {
		        presets: ['react', 'es2015']
		     	}
		     }
		]
	}
};