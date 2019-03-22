<template>
	<div>
		<el-row class="container">
			<el-col :span="24" class="header">
				<el-col class="logo" :span="5" :class="isCollapse?'logo-collapse-width':'logo-width'">
					{{sysName}}
				</el-col>
				<el-col :span="1">
					<div class="tools" @click.prevent="collapse">
						<i class="fa fa-align-justify"></i>
					</div>
				</el-col>
				<el-col :span="13">
					<div class="hearNavBar">
						<el-menu :default-active="activeIndex" class="el-menu-demo" 
						background-color="#20a0ff" text-color="#fff" active-text-color="#ffd04b"
						mode="horizontal" @select="handleSelectHearNavBar">
							<el-menu-item index="1+">首页</el-menu-item>
						</el-menu>
					</div>
				</el-col>
				<el-col :span="5" class="userinfo">
					<el-dropdown trigger="hover">
						<span class="el-dropdown-link userinfo-inner">{{username}}</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>我的消息</el-dropdown-item>
							<el-dropdown-item>设置</el-dropdown-item>
							<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-col>
			<div>
        <el-col :span="24" class="main">
          <!-- 侧边菜单 -->
          <aside class="aside">
            <el-menu :default-active="$route.path" class="el-menu" @open="handleopen"
            @close="handleclose" @select="handleselect" :collapse="isCollapse">
              <!-- <el-menu-item index="1">
                <span>首页</span>
              </el-menu-item> -->
              <template>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-view"></i>
                    <span>资产大盘</span>
                  </template>
                  <el-menu-item index="2-1">资产列表</el-menu-item>
                  <el-menu-item index="2-2">资产透视</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">风险管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-edit-outline"></i>
                  <span slot="title">任务管理</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-document"></i>
                  <span slot="title">报告管理</span>
                </el-menu-item>
                <el-submenu index="6">
                  <template>
                    <i class="el-icon-document"></i><span slot="title">系统设置</span>
                  </template>
                  <el-menu-item index="6-1">用户信息</el-menu-item>
                  <el-menu-item index="6-2">通用设置</el-menu-item>
                </el-submenu>
              </template>
            </el-menu>
          </aside>
          <section class="content-container">
            <div class="grid-content bg-purple-light">
              <el-col class="breadcrumb-container" :span="24">
                <el-breadcrumb class="breadcrumb-inner">
                  <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                    {{item.name}}
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </el-col>
              <el-col :span="24" class="content-wrapper">
                <transition name="fade" mode="out-in">
                  <router-view></router-view>
                </transition>
              </el-col>
            </div>
          </section>
        </el-col>
      </div>
		</el-row>
	</div>
</template>

<script>
//import mock from "@/mock/index.js";
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      sysName: "",
      username: "Michelle",
      logo: "",
      activeIndex: '1+'
    };
  },
  created(){
    //console.log(this.$route)
  },
  methods: {
    handleopen() {
      console.log('handleopen');
    },
    handleclose() {
      console.log('handleclose');
    },
    handleselect(a, b) {
      console.log('handleselect');
    },
    handleSelectHearNavBar(key, keyPath) {
      console.log(key, keyPath)
    },
    //折叠导航栏
    collapse(){
      this.isCollapse = !this.isCollapse;
    },
    //退出登录
    logout(){
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.sysName = "风险感知平台";
    //this.logo = require("@/assets/logo.png");
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      //this.userAvatar = require("@/assets/user.png");
    }
  }
};
</script>

<style lang="scss">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 30px;
      float: right;
      .userinfo-inner {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
      }
    }
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 0px;
      padding-right: 0px;
      border-color: rgba(238, 241, 146, 0.5);
      border-right-width: 1px;
      border-right-style: solid;
      background: #20a0ff;
      text-align: center;
    }
    .logo-width {
      width: 210px;
    }
    .logo-collapse-width {
      width: 65px;
    }
    .tools {
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      width: 40px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .hearNavBar {
      background: #20a0ff;
      padding: 0px 0px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 29px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;  
    bottom: 0px;
    overflow: hidden;
    height: 817px;
    aside {
      flex: 0 0 210px;
      width: 210px;
      font-size: 16px;
      ul:first-child{
        padding-top: 30px;
      }
      .el-menu {
        height: 100%;
        background-color: #eef1f6;
		.el-submenu{
			.el-menu-item{
        padding-left: 80px!important;
			}
		}
	  }
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // overflow-y: scroll;
      padding: 0px;
      .breadcrumb-container {
        height: 28px;
        background: #fff;
        border-color: rgba(38, 86, 114, 0.2);
        border-bottom-width: 1px;
        border-bottom-style: solid;
        background: rgba(99, 138, 161, 0.2);
        .breadcrumb-inner {
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 5px;
          text-align: left;
          font-size: 18px;
          width: 100%;
          height: 100%;
          float: left;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
       }
     }
   }
}
</style>
