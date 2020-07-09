<template>
   <CenterContainer>
       <RegForm/>
   </CenterContainer>
</template>

<script>
    import CenterContainer from "../components/container/CenterContainer.vue"
    import RegForm from "../components/user/RegForm"

    export default {
        name: "Register",
        components: {
            CenterContainer,
            RegForm,
        }
    }
</script>

<style scoped>

</style>
