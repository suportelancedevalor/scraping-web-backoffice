const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/home': {
        target: 'https://9wf1jnv947.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        pathRewrite: { '^/home': '/home' },
      },
    },
  },
};