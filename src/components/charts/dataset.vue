<template>          
    <div class="container el-card">
        <v-filter class="pick"></v-filter>
        <div id="dataset"></div>
    </div>
</template>
        
<script>
import vFilter from '../filter/filter.vue'
import echarts from 'echarts'
export default {
    data () {
        return {
            piedata:[230,367,98,666]
        }
    },
    computed:{
        opt(){
            let dataset_option= {
                //color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                },
                title: {
                    text: '风险统计',
                    top: 15,
                    left: 20,
                    textStyle:{
                        color: '#0D2a60'
                    }
                },
                grid: {
                    left: '5%',
                    right: '50%',
                    top: '18%',
                    bottom: '10%',
                    containLabel: true
                },
                legend: {
                    orient: 'horizontal',
                    x: '65%',
                    y: 310,
                    align:"left",
                    itemGap: 20,
                    data:['严重风险','高危风险','中危风险','低危风险'],
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['Mon', 'Tue', 'Wed', 'Thu'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        type:'bar',
                        barWidth: '50%',
                        data:[10, 52, 200, 334,],
                        color: '#61a0a8'
                    },
                    {
                        type: 'pie',
                        radius: ['30%', '50%'],
                        center: ['75%', '45%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:function(params){
                                    var colorlist = ['#c23531','#d48265','#0D2a60','#91c7ae'];
                                    return colorlist[params.dataIndex]
                                }
                            }
                        },
                        data:[
                            {value:this.piedata[0], name:'严重风险'},
                            {value:this.piedata[1], name:'高危风险'},
                            {value:this.piedata[2], name:'中危风险'},
                            {value:this.piedata[3], name:'低危风险'},
                        ],
                    }
                ]
            }
            return dataset_option
        }
    },
    mounted() {
        const myChart = echarts.init(document.getElementById('dataset'))
        myChart.setOption(this.opt);
        window.addEventListener("resize", function(){myChart.resize();});
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
    #dataset{
        width: 100%;
        height: 420px;
    }
    .pick{
        position: absolute;
        right:8%;
        top: 20px;
        z-index: 99;
    }
}     
</style>
