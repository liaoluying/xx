<template>          
    <div class="container el-card">
        <v-filter class="riskpick" @cdatelist="getdate"></v-filter>
        <div id="riskrange"></div>
    </div>
</template>
        
<script>
import echarts from 'echarts'
import vFilter from '../filter/filter.vue'
export default {
    data () {
        return {
            score:[],
            pdatelist:[]
        }
    },
    created(){    
    },
    methods:{
        getdate(data){
            //this.pdatelist.push(datelist);
            console.log(data)
        }
    },
    computed:{
        opt(){
            let risk_option= {
                title: {
                    text: '安全评分趋势',
                    top: 15,
                    left: 20,
                    textStyle:{
                        color: '#0D2a60'
                    }
                },
                grid: {
                    left: '5%',
                    //right: '50%',
                    top: '22%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [82, 32, 90, 57, 69, 70, 66],
                    type: 'line',
                    color: '#61a0a8'
                }]
            }
            return risk_option
        }
    },
    mounted() {
        const myChart = echarts.init(document.getElementById('riskrange'))
        myChart.setOption(this.opt);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
    },
    components: {
       vFilter 
    }
}
</script>
        
<style scoped lang='scss'>
.container{
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: relative;
    &:hover{box-shadow: 0px 2px 5px 1px rgb(206, 203, 203);}
    #riskrange{
        width: 100%;
        height: 300px;
    }
    .riskpick{
        position: absolute;
        right:8%;
        top: 15px;
        z-index: 99;
    }
}     
</style>