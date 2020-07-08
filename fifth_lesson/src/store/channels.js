import {getNewsChannels} from '../services/newService'

export default {
    namespaced: true,//开启匿名空间
    state: {
        data: [],
        isLoading: false,
    },
    mutations: {//不存在副作用操作
        //配置多种异变方式
        //state: 原来状态
        //payload: 负荷 true||false
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        //payload: 负荷 一个数组
        setData(state, payload){
            state.data = payload;
        }
    },
    actions: {//专门副作用处理
        async fetchDatas(context){
            /*在vuex中提交mutation是数据变化的唯一原因*/
            context.commit("setIsLoading",true);//提交
            const resp = await getNewsChannels();
            context.commit("setData",resp);//提交
            context.commit("setIsLoading",false);//提交
        }
    }
}
