import nodeExternals from 'webpack-node-externals'

export default
{
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/index.js',
  output:
  {
    filename: '../index.js'
  },
  module:
  {
    rules:
    [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
