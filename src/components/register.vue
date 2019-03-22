<template>
    <div class="container-reg">
        <div class="lowin">
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-register">
                    <div class="lowin-box-inner">
                        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
                            <p>现在就注册您的账户吧！</p>
                            <div class="lowin-group">
                                <el-form-item label prop='phoneoremail' class="text-content"><span style="display:block">用户名</span>
                                    <el-input type="text" v-model="ruleForm2.phoneoremail" placeholder="请输入手机号" class="input-user"/>
                                </el-form-item>
                            </div>
                            <div class="lowin-group">
                                <el-form-item class="text-content" prop='pass'>密码
                                    <el-input type="password" v-model="ruleForm2.pass" placeholder="请输您的密码"/>
                                </el-form-item>

                                <el-form-item class="text-content" prop="checkPass">再次确认
                                    <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请再次输入密码"/>
                                </el-form-item>
                            </div>
                            <button class="lowin-btn">
                                注册
                            </button>
                            <div class="text-foot">
                                已经有账户？<router-link to="/login" class="register-link">登录</router-link>
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
            },500);
        }



        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          phoneoremail: ''
        },
        rules2: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          phoneoremail:[{required: true, validator: checkaccont, trigger: 'blur'}]
        }
      };
    },
}

</script>

<style lang="scss">
    @import '../style/common.scss';
    @import '../style/register.scss';
</style>