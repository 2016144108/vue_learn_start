import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import store from './store/store.js'
//import {AppCode} from "./services/config.js";
// import "./services/newService.js"
import {getNewsChannels} from "./services/newService.js";
import {getNews} from "./services/newService";
/*import { login, whoami, logout, reg} from './services/userService'*/

Vue.config.productionTip = false

/*async function test(){
  /!*logout();*!///注销
  const resp_1 = await login({
    loginId: "user",
    loginPwd: "123123"
  });
  console.log(resp_1);//登录
  const resp_2 = await whoami();
  console.log(resp_2);//获取
  let loginId = "geya", loginPwd = "geya", nickname = "geya";
  const resp_3 = await reg({
      loginId,
      loginPwd,
      nickname,
      });//注册
  console.log(resp_3);
}
test();*/

/*
//第一种使用方式
getNewsChannels().then(resp=>{
  console.log(resp);
});
*/

/*//第二种使用方式
async function getResp() {
  const resp=await getNewsChannels();
  console.log(resp);
}
getResp();*/

/*getNews("5572a108b3cdc86cf39001cd").then(resp=>{
  console.log(resp);
});*/
store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoami");

new Vue({
  router,//配置路由到vue实例中
  store,//配置vuex到vue实例中
  render: h => h(App)
}).$mount('#app')
