const path = require("path");

module.exports = {
  lintOnSave: false, // 关闭所有eslint检查
  // 当前配置会和vue的webpack合并
  configureWebpack: {
    resolve: {
      alias: {
        // 配置路径别名(可以简写路径)
        "@views": path.resolve(__dirname, "src/views"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
  // 改了配置，一定要重启才能生效
  devServer: {
    proxy: {
      "/api/wy": {
        target: "http://localhost:3010",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          "^/api/wy": "",
        },
      },
      "/api": {
        target: "http://tph.cool/",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          "^/api": "",
        },
      },
    },
  },
};
