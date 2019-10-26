export default
{
  entry: './src/client/index.js',
  output:
  {
    filename: './bundle.js'
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
            name: './index.html',
          }
        }
      }
    ]
  }
}
