<template>
  <div>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="logo">风险感知平台</div>
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
          text-color="#434343" active-text-color="#20a0ff" unique-opened router>
          <template v-for="item in items">
              <template v-if="item.subs">
                  <el-submenu :index="item.index" :key="item.index">
                      <template slot="title">
                          <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                      </template>
                      <template v-for="subItem in item.subs">
                          <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                              <template slot="title">{{ subItem.title }}</template>
                              <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                  {{ threeItem.title }}
                              </el-menu-item>
                          </el-submenu>
                          <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                              {{ subItem.title }}
                          </el-menu-item>
                      </template>
                  </el-submenu>
              </template>
              <template v-else>
                  <el-menu-item :index="item.index" :key="item.index">
                      <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                  </el-menu-item>
              </template>
          </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
//import bus from '../common/bus';
export default {
  data() {
    return {
      collapse: true,
      fullscreen: false,
      name: 'Michelle',
      message: 2,
      items: [
        {
          icon: 'el-icon-location-outline',
          index: '1',
          title: '系统首页'
        },
        {
          icon: 'el-icon-view',
          index: '2',
          title: '资产大盘',
          subs: [
            {index:'2-1', title:'资产列表'},
            {index:'2-2', title:'资产透视'}
          ]
        },
        {
            icon: 'el-icon-warning',
            index: '3',
            title: '风险管理'
        },
        {
            icon: 'el-icon-news',
            index: '4',
            title: '任务管理',
        },
        {
            icon: 'el-icon-tickets',
            index: '5',
            title: '报告管理'
        },
        {
            icon: 'el-icon-setting',
            index: '6',
            title: '系统设置',
            subs: [
                {index: 'drag',title: '用户信息'},
                {index: 'dialog',title: '通用设置'}
            ]
        },
      ],
      activeIndex:'1'
    }
  },
    computed:{
        username(){
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        },
        onRoutes(){
                return this.$route.path.replace('/','');
            }
    },
    created(){
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    },
    methods:{
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if(command == 'loginout'){
                localStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage(){
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen(){
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted(){
        if(document.body.clientWidth < 1500){
            this.collapseChage();
        }
    }
}
</script>
<style scoped lang="scss">
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    background-color: #0D2A60;
}
.collapse-btn{
    float: left;
    padding: 0 5px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo{
    float: left;
    width:170px;
    line-height: 70px;
}
.header-right{
    float: right;
    padding-right: 50px;
}
.header-user-con{
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell, .btn-fullscreen{
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge{
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell{
    color: #fff;
}
.user-name{
    margin-left: 14px;
}
.el-dropdown-link{
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item{
    text-align: center;
}
/* 侧边栏 */
.sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
    overflow-y: scroll;
    height: 888px;
    ul{
      text-align: left;
      padding-top: 20px;
      .el-submenu{
        .el-menu-item{
          min-width: 150px;
          padding: 0 0 0 50px!important;
        }
      }
    }
}
.sidebar::-webkit-scrollbar{
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse){
    width: 165px;
}
.sidebar > ul {
    height:100%;
}
</style>