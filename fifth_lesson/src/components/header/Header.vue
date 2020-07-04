<template>
    <div class="header">
        <div class="header_container">
            <div class="container">
                <div class="logo">
                    <a href="">
                        <img src="../../assets/logo.png" alt="">
                    </a>
                </div>
                <ul>
                    <li><a href="">首页</a></li>
                    <li><a href="">新闻中心</a></li>
                    <li><a href="">时事报告</a></li>
                    <li><a href="">关于</a></li>
                    <li><a href="">联系我们</a></li>
                </ul>
                <div class="user">
                    <span>登录</span>
                    <span>注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .header{
        height: 60px;
    }
    .header_container{
        width: 100%;
        height: 60px;
        background-color: black;
        position: fixed;
        left: 0;
        top: 0;
    }
    .logo{
        width: 40px;
        height: 40px;
        overflow: hidden;
    }
    .logo a img{
        height: 100%;
    }
    .container{
        position: relative;
    }
    .container .logo{
        position: absolute;
        top: 10px;
        left: 220px;
    }
    ul{
        position: absolute;
        top: 0;
        left: 300px;
        width: 1000px;
        height: 60px;
    }
    ul li{
        float: left;
        width: 100px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        font-size: 14px;
    }
    ul li a{
        text-decoration: none;
        color: white;
    }
    ul li:hover{
        background-color: mediumseagreen;
    }
    .user{
        position: absolute;
        right: 120px;
        top: 0;
        height: 60px;
        width: 200px;
    }
    .user span{
        float: left;
        color: white;
        height: 60px;
        line-height: 60px;
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
