<template>
   <CenterContainer>
       <LoginForm/>
   </CenterContainer>
</template>

<script>
    import CenterContainer from "../components/container/CenterContainer.vue"
    import LoginForm from '../components/user/LoginForm'

    export default {
        name: "Login",
        components: {
            CenterContainer,
            LoginForm,
        }
    }
</script>

<style scoped>

</style>
