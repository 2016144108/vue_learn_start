<template>
    <div class="news_types">
        <div v-for="item in showChannels" :key="item.channelId" class="item"><span class="name" :class="{active: item.channelId === channelId}" @click="switchTo(item.channelId)">{{item.name}}</span></div>
        <a href="" @click.prevent="isCollapse=!isCollapse">{{isCollapse ? '展开' : '折叠'}}</a>
    </div>
</template>

<script>
    import {getNewsChannels} from "@/services/newService.js";//两级以及两级以上匿名导入方式
    import {mapState} from 'vuex'
    let result = mapState("channels",['data','isLoading']);

    export default {
        name: "NewsChannel",
        data(){
            return{
                /*channels: [],//类型数据*/
                isCollapse: true,//折叠状态
                channelId: "5572a108b3cdc86cf39001cd",//选中ID
            };
        },
        async created() {//获取数据
            /*const resp=await getNewsChannels();
            this.channels=resp;
            console.log(this.channels,this.isCollapse);*/
            if(this.data.length > 0){
                this.channelId=this.data[0].channelId;
            }
        },
        computed: {
            ...mapState("channels",['data','isLoading']),
            showChannels(){
                if(this.isCollapse){//折叠状态
                    return this.data.slice(0,8);//只显示前8位数据
                }else{//展开状态
                    return this.data;
                }
            },
        },
        methods:{
            switchTo(id){//切换id
                this.channelId=id;
                console.log(id);
                //我知道类型id被切换了，但我不知道要干嘛
                //触发一个事件让组件使用者去处理
                this.$emit("change",this.channelId)
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .name{
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid grey;
        float: left;
        margin-left: 15px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .active{
        background-color: grey;
        color: white;
        cursor: pointer;
    }
    a{
        height: 40px;
        line-height: 40px;
        color: cornflowerblue;
        text-decoration: none;
        margin-left: 20px;
    }
</style>
