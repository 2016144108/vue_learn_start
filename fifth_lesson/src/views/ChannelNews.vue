<template>
   <CenterContainer>
       频道新闻
   </CenterContainer>
</template>

<script>
    import CenterContainer from "../components/container/CenterContainer.vue"

    export default {
        name: "ChannelNews",
        components: {
            CenterContainer,
        },
        created() {
            console.log(this.$route);
        }
    }
</script>

<style scoped>

</style>
