<template>
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color=""
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
</template>

<script>
import bus from '../bus.js'
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                icon: 'el-icon-location-outline',
                index: 'homepage',
                title: '系统首页'
                },
                {
                icon: 'el-icon-view',
                index: '2',
                title: '资产大盘',
                subs: [{index:'assetlist', title:'资产列表'},{index:'assetsspotlight', title:'资产透视'}]
                },
                {
                    icon: 'el-icon-warning',
                    index: 'risk',
                    title: '风险管理'
                },
                {
                    icon: 'el-icon-news',
                    index: 'task',
                    title: '任务管理',
                },
                {
                    icon: 'el-icon-tickets',
                    index: 'report',
                    title: '报告管理'
                },
                {
                    icon: 'el-icon-setting',
                    index: '6',
                    title: '系统设置',
                    subs: [
                        {index: 'userinfo',title: '用户信息'},
                        {index: 'settings',title: '通用设置'}
                    ]
                },
            ],
        }
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    created(){
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    }
}
</script>

<style lang="scss">
.sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
    overflow-y: scroll;
    height: 100%;
    ul:first-child{
      text-align: left;
      padding-top: 20px;
      .el-submenu{
        .el-menu-item{
          min-width: 150px;
          padding: 0 0 0 60px!important;
        }
      }
    }
    .el-menu-item.is-active{
        color: #fff!important;
        background-color: #0D2a60;
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
