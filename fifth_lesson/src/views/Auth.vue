<template>
    <center-container>登录验证中。。。</center-container>
</template>

<script>
    import CenterContainer from "../components/container/CenterContainer.vue"
    import {mapState} from 'vuex'

    export default {
        name: "Auth",
        components: {
            CenterContainer,
        },
        computed:{
            ...mapState('loginUser',['data','isLoading']),
        },
        methods: {
            handlerLogin(){
                if(this.isLoading){
                    return;
                }
                if(this.data) {
                    console.log(this.isLoading);
                    if (this.$route.query.returnurl) {
                        this.$router.push({name: this.$route.query.returnurl});
                    }
                }else{
                    this.$router.push({name: 'login'});
                }
            }
        },
        watch: {
            data: {
                immediate: true,
                handler(){
                    this.handlerLogin();
                },
            },
            isLoading: {
                immediate: true,
                handler(){
                    this.handlerLogin();
                },
            }
        }
    }
</script>

<style scoped>

</style>
