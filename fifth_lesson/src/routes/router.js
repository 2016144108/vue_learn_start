import Vue from 'vue'
import VueRouter from "vue-router"
import router_config from "./router_config"
import store from '../store/store'

/*import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Error from "../views/404.vue";*/

//导入vue路由
//npm i vue-router
Vue.config.productionTip = false
//1.安装路由
Vue.use(VueRouter)
//2.创建路由对象
const router = new VueRouter(router_config)
router.beforeEach((to, from, next)=>{
    if(to.meta.auth){//当是受保护界面时处理方式
        if(store.state.loginUser.isLoading){
            next({name: 'auth', query: {returnurl: to.fullpath}});//带着需要跳转的页面进入加载页
        }else if(store.state.loginUser.data){
            next();//直接进入
        }else{
            next({name: 'login'});//被拦下来
        }
    }else{
        next();
    }
    /*console.log('to:',to);//to转向的页面
    console.log('from:',from);//来自的页面
    next();//跳转函数*/
})
/*const router = new VueRouter({
    //配置
    mode: "history",//路由模式
    /!*routes: [//路径匹配一般方式
        {
            path: "/",
            component: Index,
        },
        {
            path: "/Login",
            component: Login,
        },
        {
            path: "/Register",
            component: Register,
        },
        {
            path: "/404",
            component: Error,
        },
        {
            path: "/Index",
            component: Index,
        },
    ],*!/
    routes: [//路径匹配页面懒加载动态导入
        {
            path: "/",
            component: ()=>import("../views/Index"),
        },
        {
            path: "/Login",
            component: ()=>import("../views/Login"),
        },
        {
            path: "/Register",
            component: ()=>import("../views/Register"),
        },
        {
            path: "/Index",
            component: ()=>import("../views/Index"),
        },
        {
            path: "/ChannelNews/:id",
            component: ()=>import("../views/ChannelNews"),
        },
        {
            path: "/!*",
            component: ()=>import("../views/404"),
        },
    ],
})*/

//默认导出
export default router;

/*路由模式：
hash: 路径来自于地址栏中#后面的值，这种模式兼用型比较好
history: 路径来自于真实地址路径，旧浏览器不兼容
adstract: 路径来自于内存*/

