<template>
  <div id="app">
    <div v-if="show" style="width: 1080px;margin: 0 auto;">
      <Banner :banners="banners"/><!--轮播图组件-->
    </div>
<!--    <button @click="show=!show">隐藏banner</button>-->
    <div style="width: 1080px;margin: 20px auto 0;">
      <NewsChannel @change="handlechange"/>
      <hr style="width: 1080px;margin: 0 auto;">
    </div>
  </div>
</template>

<script>
import Banner from "./components/banner/Banner.vue"
import NewsChannel from "./components/news/NewsChannel"
import banner_1 from "./assets/079e29d5d2f84a268aaa0b3be1ef0700.jpg"
import banner_2 from "./assets/building.jpg"
import banner_3 from "./assets/food.jpg"

export default {
  name: 'App',
  components: {
    Banner,
    NewsChannel,
  },
  data() {
    return{
      banners: [
        {
          url: banner_1,
          // import banner_3 from "./assets/food.jpg"
          // url: require(./assets/food.jpg)
        },
        {
          url: banner_2,
        },
        {
          url: banner_3,
        },
      ],
      show: true,
    };
  },
  methods:{
    handlechange(id){//组件使用者处理了
      console.log("处理了"+id);
    }
  }
}
</script>

<style>
  button{
    width: 100px;
    height: 30px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
</style>
