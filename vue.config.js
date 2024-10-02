const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/dev/auction": {
        target: "https://9wf1jnv947.execute-api.us-east-1.amazonaws.com",
        pathRewrite: { "^/dev/auction": "/dev/auction" },
        changeOrigin: true,
      },
    },
  },
});
