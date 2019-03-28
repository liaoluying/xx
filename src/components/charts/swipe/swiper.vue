<template>
    <div>
        <div :auto="4000" class="mint-swipe">
            <div v-for="item in lunbotulist" :key="item.url" class="mint-swipe-item">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </div>
        </div>
    </div>    
</template>

<script>

export default {
    props:['lunbotulist' ,'isfull']
}
</script>

<style lang="scss">
    .mint-swipe{
        text-align: center;
        height: 200px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: blue;
            }
            &:nth-child(3){
                background-color: green;
            }

            img{
                width: 100%;
                height: 100%;
            }
        }
        .full{
            width: 100%;
        }
    }
</style>