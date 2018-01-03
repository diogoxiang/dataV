module.exports = {
  mock: false,
  title: "系统名",
  name: "云南恭贺新喜",
  version: "1.0",
  // localStronge 前缀
  HostPrefix: "__yunnan__",
  // 开发
  devPort: 8080,
  //  是否生成. source Map
  productionSourceMap: false,
  // axios time
  timeout: 5000,
  // 后台API地址
  baseURL: "/",
  // 服务配置
  href: "localhost",
  // port: 8080,
  // 是否开启代理, 类似  localhost ==> proxy.target
  isProxy: true,
  // 请求 proxy 代理
  proxy: {
    "/": {
      target: "http://yz2-s-stg.taiheiot.com/",
      changeOrigin: true,
      // rewrite: path => path.replace(/^\/api(\/|\/\w+)?$/, '/api/user'),  // 默认可以批量代理
      logs: true // 开启日志显示
    }
  }
};
