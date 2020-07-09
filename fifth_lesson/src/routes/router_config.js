const router_config={
    mode: "history",//路由模式
    routes: [//路径匹配页面懒加载动态导入
        {
            path: "/",
            name: "index",
            component: ()=>import("../views/Index"),
        },
        {
            path: "/Login",
            name: "login",
            component: ()=>import("../views/Login"),
        },
        {
            path: "/Register",
            name: "register",
            component: ()=>import("../views/Register"),
        },
        {
            path: "/Index",
            name: "index",
            component: ()=>import("../views/Index"),
        },
        {
            path: "/ChannelNews/:id",
            name: "channelnews",
            component: ()=>import("../views/ChannelNews"),
        },
        {
            path: "/Personal",
            name: "personal",
            component: ()=>import("../views/Personal"),
            meta: {//增加保护标识
                auth: true,
            },
        },
        {
            path: "/Person",
            name: "person",
            component: ()=>import("../views/Person"),
            meta: {
                auth: true,
            },
        },
        {
            path: "/Auth",
            name: "auth",
            component: ()=>import("../views/Auth"),
        },
        {
            path: "/*",
            component: ()=>import("../views/404"),
        },
    ]
}

export default router_config;
