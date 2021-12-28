module.exports = {
  dev: {
    '/salesplus': {
      target: 'https://mtest.aia.com.cn', // 代理接口
      changeOrigin: true,
      pathRewrite: {'^/salesplus': '/salesplus'},
    },
  },
};
