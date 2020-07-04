<template>
    <div class="item">
        <!--模板中的某个位置无法确定内容-->
        <!--使用插槽
        <slot></slot>
        在使用模板的地方加上需要放进去的内容-->
        <!--<Loading/>-->
        <slot></slot>
    </div>
</template>

<script>
    import Loading from "../Load/Loading.vue"

    export default {
        name: "CenterContainer",
        components: {
            Loading,
        }
    }
</script>

<style scoped>
    .item{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
