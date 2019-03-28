<template>
    <div class="filter">
        <el-date-picker
            v-model="pickdate"
            type="daterange"
            value-format="yyyy-MM-dd"
            @change="selectTime"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>

<script>
export default {
  props: {
  },
  data(){
      return{
        pickdate:[],
        datelist:[]
      }
  },
  methods:{
      selectTime(pickdate){
        let astart = pickdate[0].split('-');
        let aend = pickdate[1].split('-');
        let db = new Date();
        db.setUTCFullYear(astart[0],astart[1]-1,astart[2]);
        let de = new Date();
        de.setUTCFullYear(aend[0],aend[1]-1,aend[2]);
        let unixDb = db.getTime();
        let unixDe = de.getTime();
        for (var k = unixDb; k <= unixDe;) {
            const myDate = new Date(parseInt(k));
            const Y = myDate.getFullYear();
            const M = myDate.getMonth()+1;
            const D = myDate.getDate();
            const curDay = Y + '-'+ M + '-' + D;
            k = k + 24 * 60 * 60 * 1000;
            this.datelist.push(curDay);
        }
        this.$parent.$emit('cdatelist',this.datelist)
      },
  }
}
</script>

<style lang="scss">
.filter{
    .el-date-editor--daterange{
        width: 240px;
    }
    .el-range-editor.is-active{
        border-color: #0D2a60;
    }
}
</style>
