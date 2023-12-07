const webpack = require('./webpack');
const webpackOptions = require('./webpack.config');
const compiler = webpack(webpackOptions);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(stats)
})