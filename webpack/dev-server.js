module.exports = () => ({
  devServer: {
    contentBase: '/public',
    hot: true,
    compress: true,
    port: 5000,
    open: true,
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
);
