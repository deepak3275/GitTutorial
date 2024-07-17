// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // The path you want to proxy
    createProxyMiddleware({
      target: 'https://course-api.com', // The target server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api from the URL when sending to the target
      },
    })
  );
};
