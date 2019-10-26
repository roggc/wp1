export default
{
  entry: './src/client/index.js',
  output:
  {
    filename: '../dist-client/bundle.js'
  },
  module:
  {
    rules:
    [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use:
        {
          loader: 'file-loader',
          options:
          {
            name: '../dist-client/index.html',
          }
        }
      }
    ]
  }
}
