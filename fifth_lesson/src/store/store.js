import Vue from 'vue'
import vuex from "vuex"
import store_config from "./store_config"

//导入vuex
//npm i vuex

Vue.config.productionTip = false
//1.安装路由
Vue.use(vuex)
//2.创建路由对象
const store = new vuex.Store(store_config)

//默认导出
export default store;

/*vuex的核心概念
1、数据的变动
必须提交commit一个mutation
在vuex中提交mutation是数据变化的唯一原因
注意的是在mutation中不能出现副作用操作，所谓副作用操作就是改动或使用外部数据，ajax,其他异步行为*/


