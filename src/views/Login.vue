<template>
  <div class="section">
    <div class="all">
      <el-tabs v-model="activeName" type="border-card" stretch=true>
        <el-tab-pane label="密码登录" name="plogin" style="height:430px">
          <loginbypsw-box></loginbypsw-box>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="mlogin" style="height:330px">
          <loginbymsg-box></loginbymsg-box>
        </el-tab-pane>
      </el-tabs>
   </div>
  </div>
</template>
			
<script>
  import loginbymsg from '../components/loginbymsg.vue'
  import loginbypsw from '../components/loginbypsw.vue'

  export default {
    data() {
      return {
        activeName:'plogin',
      }
    },
    methods: {
      handleClick(tab, event) {
        this.activeName = tab.name;
      },
      
    },
    components:{
      'loginbymsg-box': loginbymsg,
      'loginbypsw-box': loginbypsw
    },

    created(){
      window.addEventListener('resize',this.getheight);
      this.getheight()
    },
    destroyed(){
      window.removeEventListener('resize',this.getheight)
    },

  }
</script>

<style lang="scss">
.section{
  display: flex;
  justify-content: center;
  align-items:Center;
  padding-top: 200px;
  .all{
    width: 400px;
    text-align: center;
    margin: auto;
  }
}

.el-tabs--border-card {
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08)!important;
  border: none!important;
  .el-tabs__header {
    .el-tabs__item.is-active{
      border-right-color: rgba(32, 160, 255, 1)!important;
    }
  }
  .el-tabs__nav{
    float: right;
  }
  .el-tabs__content{
    height: 100%;
  }
}
</style>


