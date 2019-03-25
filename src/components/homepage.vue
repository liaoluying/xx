<template>
  <div class="page_warrp">
          <div class="left">
              <v-guage></v-guage>
          </div>
  </div>
</template>

<script>
import vGuage from './charts/guage.vue'
export default {
    components:{
        vGuage
    }
}
</script>


<style scoped lang="scss">
.page_warrp{
    height: 100%;
}
</style>
