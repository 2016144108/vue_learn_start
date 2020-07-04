<template>
    <div class="model_container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Model"
    }
</script>

<style scoped>
    .model_container{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        left: 0;
        top: 0;
    }
</style>
