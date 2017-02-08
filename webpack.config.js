var webpack = require("webpack");
var path = require("path");
 

 
var config = {
  entry:['./private/index.jsx'],
  output: {
    path:'./public',
    filename: "bundle.js",
    publicPath:'/'	
  },
  module: {
    loaders: [
	{
	test : /\.jsx$/,
        loader: "babel-loader",
	exclude:/node_modules/,
    }

]
  },
      resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	}
};
 
module.exports = config;
