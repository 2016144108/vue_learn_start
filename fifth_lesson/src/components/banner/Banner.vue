<!--轮播图组件-->
<template>
    <div class="banner_container" @mouseenter="autostop" @mouseleave="autostart"><!--移入停止，移出轮播-->
        <ul class="images" :style="{
        width: banners.length * 100+'%',
        marginLeft: -index*100+'%',
        }"><!--书写动态css样式-->
            <li v-for="(item, i) in banners" :key="i">
                <img style="width: 100%" :src="item.url" alt="">
            </li>
        </ul>
        <ul class="dots">
            <li v-for="(item, i) in banners" :key="i" :class="{active: i === index}" @click="index = i"></li>
        </ul><!--根据动态索引赋值class名-->
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props: {
            banners: {//配置属性
                type: Array,//配置属性类型
                required: true,//必须传递该属性
            }
        },
        created(){//组件创建
          this.autostart();
        },
        /*beforeCreate(){//组件挂起
            console.log("组件挂起");
            console.log(this.index);
        },
        updated(){//组件更新
            console.log("组件更新");
            console.log(this.index);
        },
        destroyed(){//组件销毁
            this.autostop();
            console.log("组件销毁");
        },*/
        data(){
            return{
                index: 0,//配置索引
                timer: null,//配置时间器
            };
        },
        methods: {
            autostart(){//自动切换
                if(this.timer){
                    return;
                }
                this.timer = setInterval(()=>{
                    this.index= ( this.index + 1) % this.banners.length;
                    console.log("轮播");
                },2000)
            },
            autostop(){//自动停止
                clearInterval(this.timer);
                this.timer = null;
                console.log("停止");
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
    .images li{
        float: left;
        width: 1080px;
    }
    .banner_container{
        overflow: hidden;
        position: relative;
    }
    .dots li{
        width: 10px;
        height: 10px;
        background-color: black;
        border-radius: 50%;
        float: left;
        margin-left: 5px;
        opacity: 0.3;
        cursor: pointer;
    }
    .dots .active{
        opacity: 1;
    }
    .dots{
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
</style>
