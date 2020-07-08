<template>
    <div class="header">
        <div class="header_container">
            <div class="container">
                <div class="logo">
                    <a href="">
                        <img src="../../assets/logo.png" alt="">
                    </a>
                </div>
                <ul>
                    <!--<router-link to="/">首页</router-link>声明式导航-->
                    <!--<router-link :to="{name: 'home'}">首页</router-link>声明式导航-->
                    <li><router-link :to="{name: 'index'}">首页</router-link></li>
                    <!--<li><router-link :to="{
                        name: 'channelnews',
                    }">{{isLoading}}</router-link></li>&lt;!&ndash;获取vuex仓库数据&ndash;&gt;-->
                    <li v-for="item in data.slice(0,5)" :key="item.channelId"><router-link :to="{
                        name: 'channelnews',
                        params: {
                        id: item.channelId,
                        }
                    }">{{item.name}}</router-link></li>
                </ul>
                <div class="user">
                    <span><router-link :to="{name: 'login'}">登录</router-link></span>
                    <span><router-link :to="{name: 'register'}">注册</router-link></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /*import {getNewsChannels} from '../../services/newService';*/
    import {mapState} from 'vuex'
    let result = mapState("channels",['data','isLoading']);
    /*console.log(result);*/

    export default {
        name: "Header",
        /*data(){
            return{
                id: "index",
            };
        },*/
        /*async created() {
            const resp=await getNewsChannels();
            this.newschannels=resp;
        }*/
        /*computed: {//获取仓库数据
            isLoading(){
                return this.$store.state.channels.isLoading;
            },
            channels(){
                return this.$store.state.channels.data;
            },
        }*/
        computed: {
            ...mapState("channels",['data','isLoading']),
            /*fun(){
                return 12;
            },*/
        },
        methods: {
            change(channelId){
                this.id = channelId;
                if(channelId === ''){
                    this.id = 'index';
                }
            },
        }
        /*created() {
            this.$store.dispatch("channels/fetchDatas");
        },*/
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .header{
        height: 60px;
    }
    .header_container{
        width: 100%;
        height: 60px;
        background-color: black;
        position: fixed;
        left: 0;
        top: 0;
    }
    .logo{
        width: 40px;
        height: 40px;
        overflow: hidden;
    }
    .logo a img{
        height: 100%;
    }
    .container{
        position: relative;
    }
    .container .logo{
        position: absolute;
        top: 10px;
        left: 220px;
    }
    ul{
        position: absolute;
        top: 0;
        left: 300px;
        width: 1000px;
        height: 60px;
    }
    ul li{
        float: left;
        width: 100px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        font-size: 14px;
    }
    ul li a{
        text-decoration: none;
        width: 100px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: white;
    }
    /*ul li .router-link-exact-active{*/
    /*    width: 100px;*/
    /*    text-align: center;*/
    /*    height: 60px;*/
    /*    line-height: 60px;*/
    /*    color: white;*/
    /*    background-color: mediumseagreen;*/
    /*}*/
    ul li:hover{
        background-color: mediumseagreen;
    }
    .router-link-exact-active.router-link-active{
        float: left;
        width: 100px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        font-size: 14px;
        background-color: mediumseagreen;
    }
    .user{
        position: absolute;
        right: 120px;
        top: 0;
        height: 60px;
        width: 200px;
    }
    .user span{
        float: left;
        color: white;
        height: 60px;
        line-height: 60px;
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
