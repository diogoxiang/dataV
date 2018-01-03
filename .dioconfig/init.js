module.exports = {
  rules: {}, // eslint's rules
  updateList: [
    // 需要更新的文件
    "src/router/index.js",
    "src/service/http.js",
    "src/views/login",
    "src/views/portal",
    "src/App.vue",
    "src/main.js",
    "src/main.scss",
    "static",
    ".gitignore",
    "package.json",
    "tpl.html",
    ".eslintrc.js",
    // 升级模板时，将会强制更新本文件
    "!.babelrc" // 前缀为 '!' ，代表将会被删除
  ],
  _meta: {
    // 请勿删除
    type: "M", // 模板类型
    version: "1.0.11" // 模板的版本
  },
  webpack: {
    // 支持配置 webpack
  }
};
