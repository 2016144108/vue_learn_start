import Vue from 'vue'
import App from './App.vue'
//import {AppCode} from "./services/config.js";
// import "./services/newService.js"
import {getNewsChannels} from "./services/newService.js";
import {getNews} from "./services/newService";

Vue.config.productionTip = false

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

new Vue({
  render: h => h(App)
}).$mount('#app')