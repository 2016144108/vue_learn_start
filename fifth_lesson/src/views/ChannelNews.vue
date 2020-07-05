<template>
    <div style="width: 1080px;margin: 70px auto 0;">
        <div class="title">
            <h1 style="color: grey;">{{channelName}}</h1>
            <hr>
        </div>
        <div v-show="isLoading" style="width: 1080px;margin: 20px auto 0;">
            <Loading/>
        </div>
        <NewsList v-show="!isLoading" :news="newsinfo"/>
        <page v-show="!isLoading" style="margin: 0 auto" :page="page" :total="total" :limit="limit" :paneNumber="paneNumber" @pagechange="handleChange"/>
    </div>
</template>

<script>
    // import CenterContainer from "../components/container/CenterContainer.vue"
    import {getNewsList} from "../services/newService"
    import {getNewsChannels} from "../services/newService"
    import NewsList from "../components/news/NewsList"
    import Page from "../components/news/Page"
    import Loading from "../components/Load/Loading"

    export default {
        name: "ChannelNews",
        components: {
            /*CenterContainer,*/
            NewsList,
            Page,
            Loading,
        },
        data() {
            return {
                newsinfo: null,
                channelName: null,
                total: 500,
                limit: 10,
                paneNumber: 10,
                isLoading: false,
                /*page: 1,*/
            };
        },
        computed: {
            page: {
                get(){
                    return +this.$route.query.page || 1;
                },
                set(){
                }
            },
        },
        /*async created() {
            this.setNews();
            this.setNewsChannel();
        },*/
        methods: {
            handleChange(newpage){
                this.page = newpage;
                this.$router.push({//点击页码路由地址获取到相应的页码
                    query: {
                        page: newpage,
                    },
                });
                this.setNews();
            },
            async setNewsChannel(){//设置频道
                const channels =await getNewsChannels();
                const channel = channels.find(
                    (item) => item.channelId === this.$route.params.id
                );
                this.channelName = channel.name;
            },
            async setNews(){//设置新闻数据
                this.isLoading = true;
                const resp =await getNewsList(this.$route.params.id, this.page, this.limit);
                this.total=resp.allNum;
                this.newsinfo=resp.contentlist;
                console.log(this.newsinfo);
                this.isLoading = !this.isLoading;
            }
        },
        watch: {//监听id变化
            "$route.params.id": {
                immediate: true,//开始的变化也要监听到
                handler(){//处理
                    /*this.page = 1;*/
                    this.setNewsChannel();
                    this.setNews();
                },
            },
        },
    }
</script>

<style scoped>

</style>
