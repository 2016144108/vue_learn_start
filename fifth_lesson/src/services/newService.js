
import axios from "axios";
import { APPCODE } from "./config.js";

export async function getNewsChannels(){//获取所有的新闻类别
    //返回结果
    const resp = await axios.get("http://ali-news.showapi.com/channelList", {//请求地址
        headers: {
            Authorization: `APPCODE ${APPCODE}`,//身份信息
        },
    });
    return resp.data.showapi_res_body.channelList;
}

export async function getNews(channelId, page = 1, limit = 10){//获取所有的新闻信息
    //返回结果
    const resp = await axios.get("http://ali-news.showapi.com/newsList", {//请求地址
        headers: {
            Authorization: `APPCODE ${APPCODE}`,//身份信息
        },
        params:{
            channelId,//类型id
            page,//页码
            maxResult: limit,//每页最大信息个数
            needAllList: false,//关闭显示全部
            needContent: 1,//需要内容
        }
    });
    return resp.data.showapi_res_body.pagebean.contentlist;
}

export async function getNewsList(channelId, page = 1, limit = 10){//获取所有的新闻信息
    //返回结果
    const resp = await axios.get("http://ali-news.showapi.com/newsList", {//请求地址
        headers: {
            Authorization: `APPCODE ${APPCODE}`,//身份信息
        },
        params:{
            channelId,//类型id
            page,//页码
            maxResult: limit,//每页最大信息个数
            needAllList: false,//关闭显示全部
            needContent: 1,//需要内容
        }
    });
    return resp.data.showapi_res_body.pagebean;
}
