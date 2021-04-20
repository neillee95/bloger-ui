module.exports = {

  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }

};
