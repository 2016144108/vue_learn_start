<template>
    <div style="width: 1080px;margin: 70px auto 0;">
        <NewsList :news="newsinfo"/>
    </div>
</template>

<script>
    // import CenterContainer from "../components/container/CenterContainer.vue"
    import {getNews} from "../services/newService"
    import NewsList from "../components/news/NewsList"

    export default {
        name: "ChannelNews",
        components: {
            /*CenterContainer,*/
            NewsList,
        },
        data() {
            return {
                newsinfo: null,
            };
        },
        async created() {
            const route = this.$route;
            this.newsinfo = await getNews(route.params.id);
            console.log(this.newsinfo);
        },
    }
</script>

<style scoped>

</style>
