var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

 
var config = {
    entry: {
	home:'./private/index.jsx'
    },
    output: {
        path: './public',        
        filename: 'bundle.js'
    },
  module: {
    loaders: [
	{
		test : /\.jsx$/,
		loader: "babel-loader",
		exclude:/node_modules/,
    	},
	{
		test: /\.json$/,
		loader: 'json-loader'
       },
	{
		test: /\.scss$/, 
		loader: ExtractTextPlugin.extract('css!sass')
	},
	{
		test: /\.(mp4|ogg|svg|eot|ttf|woff|woff2|jpg|png)$/,
		loader: 'file-loader'
	}
  ]
  },
 
plugins: [
        new ExtractTextPlugin("[name].css")
    ],
      resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		alias: {
           			 react: __dirname + '/node_modules/react'
       		 	}	
	}
};
 
module.exports = config;
