module.exports = {
entry: "./main.js",
output: {
path: '/Users/RF048808/Desktop/myapp/React/ReactApp/CernerCare',
filename: "index.html",
publicPath: '/'
},
devServer: {
inline: false,
//contentBase: "./dist",
},
module: {
loaders: [
{
test: /\.jsx?$/,
exclude:/(node_modules|bower_components)/,
loader: 'babel-loader',
query: {
presets: ['es2015', 'react']
}
}
]
}

};
