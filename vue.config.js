const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/dev/auction': {
        target: 'https://9wf1jnv947.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        pathRewrite: { '^/dev/auction': '/dev/auction' },
      },
    },
  },
};