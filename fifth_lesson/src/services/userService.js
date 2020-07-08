import axios from 'axios'
import {async} from "q";

const loginApi = "/api/user/login",
      checkApi = "/api/user/whoami",
      regApi = 'api/user/reg'

export async function login(params){//用户登录
    const resp = await axios.post(
        loginApi,
        params,
    );
    const token = resp.headers.authorization;//获取用户信息令牌
    if(token){
        console.log(token);
        localStorage.setItem("token", token);//本地保存令牌
    }
    //console.log(token);
    return resp;
}

export async function whoami(){//使用令牌换取用户信息
    const token = localStorage.getItem("token");
    if(!token){
        return null;
    }
    const resp = await axios.get(checkApi, {
        headers: {
            authorization: `bearer ${token}`,
        },
    });
    return resp.data.data;
}

export function logout(){//用户注销
    localStorage.removeItem("token");
}

export async function  reg(params) {
    const resp = await axios.post(
        regApi,
        params,
    );
    return resp.data;
}
