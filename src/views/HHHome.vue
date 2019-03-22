<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import vHead from './HeadBar/HeadBar.vue';
    import vSidebar from './SideBar/SideBar.vue';
    import bus from './bus.js';
    export default {
        data(){
            return {
                tagsList: [],
                collapse: false
            }
        },
        components:{
            vHead, vSidebar,
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
        }
    }
</script>
<style lang="scss">
.wrapper{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .content-box{
        position: absolute;
        left: 166px;
        right: 0;
        top: 70px;
        bottom: 0;
        transition: left .3s ease-in-out;
        background-color: #f0f0f0;
        height: 100%;
        overflow: hidden;
        .content{
            width: auto;
            height: 100%;
            box-sizing: border-box;
        }
}
.content-collapse{
    left: 65px;
}
.clear{ clear: both;}
}
</style>
