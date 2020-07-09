<template>
    <div class="reg_item">
        <form action="" class="reg_container" @submit.prevent="handlerSubmit">
            <div class="form_item"><h1>注册</h1></div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>账号：</label><input @input="isEmpty('loginId','账号不能为空')" v-model="userInfo.loginId" type="text" /></div>
                <div class="error" :style="{visibility: error.loginId? 'visible' : 'hidden',}">{{error.loginId}}</div>
            </div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>密码：</label><input @input="isEmpty('loginPwd','密码不能为空')" v-model="userInfo.loginPwd" type="password" autocomplete="new_password"/></div>
                <div class="error" :style="{visibility: error.loginPwd? 'visible' : 'hidden',}">{{error.loginPwd}}</div>
            </div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>重复密码：</label><input @input="isSame" v-model="userInfo.pwdAgain" type="password" autocomplete="new_password"/></div>
                <div class="error" :style="{visibility: error.pwdAgain? 'visible' : 'hidden',}">{{error.pwdAgain}}</div>
            </div>
            <div class="form_item" style="margin-bottom: 10px;">
                <div class="input"><label>昵称：</label><input @input="isEmpty('nickname','昵称不能为空')" v-model="userInfo.nickname" type="text"/></div>
                <div class="error" :style="{visibility: error.nickname? 'visible' : 'hidden',}">{{error.nickname}}</div>
            </div>
            <div class="form_item">
                <div class="button"><button>注册</button></div>
                <div class="error" :style="{visibility: error.server? 'visible' : 'hidden',}">{{error.server}}</div>
            </div>
        </form>
    </div>
</template>

<script>
    import {reg} from '../../services/userService'

    export default {
        name: "RegForm",
        data(){
            return{
                userInfo: {
                    loginId: "",
                    loginPwd: "",
                    pwdAgain: "",
                    nickname: "",
                },
                error: {
                    loginId: "",
                    loginPwd: "",
                    pwdAgain: "",
                    nickname: "",
                    server: "",
                },
            };
        },
        methods: {
            isEmpty(field, msg){
                if(this.userInfo[field]){
                    this.error[field]='';
                    return true;
                }else{
                    this.error[field]=msg;
                    return false;
                }
            },
            isSame(){
                const resp = this.isEmpty('pwdAgain','密码不能为空');
                if(resp){
                    if(this.userInfo.loginPwd === this.userInfo.pwdAgain){
                        this.error.pwdAgain = '';
                        return true;
                    }else{
                        this.error.pwdAgain = '两次密码不一致';
                        return false;
                    }
                }
                return false;
            },
            async handlerSubmit(){
                if(this.isEmpty('loginId','账号不能为空')&this.isEmpty('loginPwd','密码不能为空')&this.isSame()&this.isEmpty('nickname','昵称不能为空')){
                    const resp = await reg(this.userInfo);
                    console.log(resp);
                    if(resp.code!=0){
                        this.error.server = resp.msg;
                    }else{
                        alert("注册成功");
                        this.$router.push({
                            name: 'login',
                        });
                    }
                }else{
                    console.log(this.userInfo,this.error);
                }
            },
        },
    }
</script>

<style scoped>
    .reg_item{
        width: 350px;
        height: 350px;
        background-color: white;
        border: 1px solid #ababab;
        padding: 10px;
    }
    .reg_item .form_item h1{
        font-size: 30px;
        color: #42b983;
        font-weight: normal;
        margin-top: 0px;
        width: 350px;
        text-align: center;
    }
    .reg_item .form_item label{
        font-size: 14px;
        margin-left: 40px;
    }
    .reg_item .form_item:nth-of-type(4) label{
        font-size: 14px;
        margin-left: 12px;
    }
    .reg_item .form_item input{
        width: 220px;
        height: 20px;
        border: 1px solid grey;
        border-radius: 2px;
    }
    .reg_item .form_item .input{
        margin-bottom: 3px;
    }
    .reg_item .form_item button{
        width: 270px;
        height: 36px;
        margin-left: 40px;
        background-color: #42b983;
        color: white;
        border: 1px solid #42b983;
        border-radius: 2px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .reg_item .form_item .error{
        margin-left: 40px;
        font-size: 12px;
        color: #d80000;
        height: 10px;
    }
    .reg_item .form_item:nth-of-type(6) .error{
        width: 270px;
        text-align: center;
    }
</style>
