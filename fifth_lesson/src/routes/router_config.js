const router_config={
    mode: "history",//路由模式
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
            path: "/*",
            component: ()=>import("../views/404"),
        },
    ]
}

export default router_config;
