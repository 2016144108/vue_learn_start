// vue的跨域配置
const vueConfig = {
  devServer: {
    // 当前地址
    port: 8080,
    // 针对开发服务器的配置
    proxy: {
      '/api': {//当请求路径以api开头时，开发服务器需要代理到http://study.yuanjin.tech=>http://study.yuanjin.tech/api/user/login
        target: 'http://study.yuanjin.tech',
      }
    }
  },
};

module.exports = vueConfig
