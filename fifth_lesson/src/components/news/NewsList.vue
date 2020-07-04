<template>
    <div class="news_list">
        <div v-for="item in news" :key="news.id" class="item">
            <div v-if="item.havePic" class="news_pic">
                <img @click="go(item.link)" :src="item.imageurls[0].url" alt="">
            </div>
            <div v-if="!item.havePic" class="news_pic">
                <img @click="go(item.link)" :src="imgurl" alt="">
            </div>
            <h2 @click="go(item.link)">{{item.title}}</h2>
            <div class="span_item">
                <span>{{item.channelName}}</span>
                <span>来源：{{item.source}}</span>
                <span>发布日期{{item.pubDate}}</span>
                </div>
            <p>{{item.content}}</p>
            <hr style="width: 1080px;margin: 0 auto;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data(){
            return{
                imgurl: require("../../assets/logo.png"),
            };
        },
        props: {
            news: {
                type: Array,
                default: ()=>[],
            },
        },
        methods: {
            go(link){
                window.location.href=link;
            }
        }
    }
</script>

<style scoped>
    .item{
        height: 165px;
        margin-bottom: 20px;
        overflow: hidden;
        position: relative;
    }
    .news_pic{
        width: 200px;
        height: 140px;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 10px;
    }
    .news_pic img{
        width: 100%;
        cursor: pointer;
    }
    h2{
        position: absolute;
        height: 30px;
        overflow: hidden;
        left: 230px;
        top: -20px;
        width: 850px;
        color: cornflowerblue;
        cursor: pointer;
    }
    span{
        font-size: 14px;
        color: grey;
        margin-right: 20px;
    }
    .span_item{
        position: absolute;
        left: 230px;
        top: 32px;
    }
    p{
        position: absolute;
        left: 230px;
        top: 42px;
        width: 850px;
    }
    hr{
        position: absolute;
        bottom: 0px;
    }
</style>
