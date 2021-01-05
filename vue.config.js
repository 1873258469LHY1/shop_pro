// const path = require("path");

<<<<<<< HEAD
// module.exports = {
//     // lintOnSave: false, // 关闭所有eslint检查
//     // 当前配置会和vue的webpack合并
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 // 配置路径别名(可以简写路径)
//                 "@views": path.resolve(__dirname, "src/views"),
//                 "@assets": path.resolve(__dirname, "src/assets"),
//                 "@comps": path.resolve(__dirname, "src/components"),
//                 "@store": path.resolve(__dirname, "src/store"),
//                 "@utils": path.resolve(__dirname, "src/utils"),
//                 "@api": path.resolve(__dirname, "src/api"),
//             },
//         },
//     },
//     // 改了配置，一定要重启才能生效
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://182.92.128.115",
//                 changeOrigin: true, // 允许跨域
//                 // pathRewrite: { // 重写路径
//                 //   "^/api": "",
//                 // },
//             },
//         },
//     },
// };
=======
module.exports = {
  lintOnSave: false,
  // lintOnSave: false, // 关闭所有eslint检查
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
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true, // 允许跨域
        // pathRewrite: { // 重写路径
        //   "^/api": "",
        // },
      },
    },
  },
};
>>>>>>> 85d3323e2b37a53b629e52d71f4677bd2e3e9ca4
