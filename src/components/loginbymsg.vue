<template>
    <div class="container-login">
        <div class="lowin">
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                        <el-form :model="ruleform" :rules="rules" ref="ruleform">
                            <div class="lowin-group">
                                <el-form-item prop="phoneoremail" class="text-content"><p>用户名</p>
                                    <el-input type="text" v-model="ruleform.phoneoremail" placeholder="请输入手机号" autofocus='off' class="input-user"></el-input>
                                </el-form-item>
                            </div>
                            <div class="lowin-group password-group">
                                
                                <el-form-item prop='vcode' class="text-content">验证码
                                    <div class="b-flex">
                                        <el-input type="text" v-model="ruleform.vcode" placeholder="请输入验证码" class="input-vcode"/>
                                        <button class="vcode-btn ">获取验证码</button>
                                    </div>
                                </el-form-item>

                            </div>
                            <button class="lowin-btn login-btn" @click="loginEvent"> 
                                登录
                            </button>
                            <div class="text-foot">
                                现在还没有账户？<router-link to="/register" class="register-link">注册</router-link>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        var mreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        var ereg= /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        var checkaccont = (rule, value, cb) => {
            if(!value){
                cb(new Error('用户名不能为空'));
            }
            setTimeout(()=>{
                if(!mreg.test(value)){
                    cb(new Error('请输入正确的格式'))
                }else{
                    cb();
                }
            },1000);
        }

        return{
            ruleform: {
                phoneoremail: '',
                password: '',
                vcode: ''
            },
            rules: {
                phoneoremail:[{required: true, validator: checkaccont, trigger: 'blur'}]
            }
        }
    },
    created(){

    },
    methods:{
        getvcode(){
            
        },

        /**
         * @description 登录事件
         */
        loginEvent() {
            // 假设ajax请求成功
            if (true) {
                alert('登录成功')
                this.$router.push('/home')
            } else {
                alert('登录失败')
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../style/common.scss';
    @import '../style/login.scss';
</style>