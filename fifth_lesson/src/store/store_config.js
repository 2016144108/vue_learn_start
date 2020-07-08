import channels from "./channels"
import loginUser from "./loginUser"

const store_config={
    /*state: {//配置仓库数据
        channels: {
            data: [],
            isLoading: false,
        },
        loginUser: {
            data: null,
            isLoading: false,
        }
    }*/
    modules: {
        channels,
        loginUser,
    }
}

export default store_config;
