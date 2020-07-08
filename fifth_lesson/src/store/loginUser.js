export default {
    namespaced: true,//开启匿名空间
    state: {
        data: null,
        isLoading: false,
    },
    mutations: {
        //配置多种异变方式
        //state: 原来状态
        //payload: 负荷 true||false
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        //payload: 负荷 一个数组
        setData(){
            state.data = payload;
        }
    },
}
