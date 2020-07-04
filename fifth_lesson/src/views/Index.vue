<template>
    <div>
        <div v-if="show" style="width: 1080px;margin: 0 auto;">
          <Banner :banners="banners"/><!--轮播图组件-->
        </div>
        <div style="width: 1080px;margin: 20px auto 0;">
            <NewsChannel @change="handlechange"/>
            <hr style="width: 1080px;margin: 0 auto;">
        </div>
        <div v-show="isLoading" style="width: 1080px;margin: 20px auto 0;">
            <Loading/>
        </div>
        <div v-show="!isLoading" style="width: 1080px;margin: 20px auto 0;">
            <NewsList :news="news"/>
        </div>
    </div>
</template>

<script>
    import Banner from "../components/banner/Banner.vue"
    import NewsChannel from "../components/news/NewsChannel"
    import NewsList from "../components/news/NewsList"
    import Loading from "../components/Load/Loading.vue"
    import banner_1 from "../assets/079e29d5d2f84a268aaa0b3be1ef0700.jpg"
    import banner_2 from "../assets/building.jpg"
    import banner_3 from "../assets/food.jpg"
    import {getNews} from "../services/newService.js"

    export default {
        name: "Index",
        components: {
            Banner,
            NewsChannel,
            NewsList,
            Loading,
        },
        async created() {//获取数据
            const resp=await getNews();
            console.log(resp);
            this.news=resp;
        },
        data() {
            return{
                banners: [
                    {
                        url: banner_1,
                    },
                    {
                        url: banner_2,
                    },
                    {
                        url: banner_3,
                    },
                ],
                show: true,
                news: [],
                isLoading: false,
            };
        },
        methods:{
            async handlechange(id){//组件使用者处理了
                console.log("处理了"+id);
                this.isLoading = true;
                const resp=await getNews(id);
                console.log(resp);
                this.news=resp;
                this.isLoading = !this.isLoading;
            }
        }
    }
</script>

<style scoped>

</style>
