<template>
    <div style="width: 1080px;margin: 70px auto 0;">
        <NewsList :news="newsinfo"/>
        <page style="margin: 0 auto" :page="page" :total="500" :limit="10" :paneNumber="10" @pagechange="handleChange"/>
    </div>
</template>

<script>
    // import CenterContainer from "../components/container/CenterContainer.vue"
    import {getNews} from "../services/newService"
    import NewsList from "../components/news/NewsList"
    import Page from "../components/news/Page"

    export default {
        name: "ChannelNews",
        components: {
            /*CenterContainer,*/
            NewsList,
            Page,
        },
        data() {
            return {
                newsinfo: null,
                page: 1,
            };
        },
        async created() {
            const route = this.$route;
            this.newsinfo = await getNews(route.params.id);
            console.log(this.newsinfo);
        },
        methods: {
            handleChange(newpage){
                this.page = newpage;
                console.log(this.page);
            }
        }
    }
</script>

<style scoped>

</style>
