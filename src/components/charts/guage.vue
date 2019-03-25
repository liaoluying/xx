<template>          
    <div class="container">
        <span></span>
        <div id="gauge"></div>
    </div>
</template>
        
<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            score:[0],
        }
    },
    computed:{
        opt(){
            let guage_option= {
                tooltip: {formatter: "{a} ：{b}"},
                toolbox: {
                    show: true,
                },
                series: [
                    {
                        name: '安全系数',
                        type: 'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        splitNumber: 1,
                        axisLine: {
                            lineStyle: {
                                width: 25,
                                color: [[0.2, '#c23531'], [0.8, '#0D2a60'], [1, '#91c7ae']]
                            }
                        },
                        axisTick: {
                            length: 25,
                            splitNumber: 10,
                        },
                        splitLine: {
                            show: false
                        },
                        pointer:{
                            length: '20%',
                            width: 2
                        },
                        detail: {
                            fontSize: 75,
                            offsetCenter: [0, '-38%'],
                            formatter:'{value}'
                        },
                        data: [{value: this.score}]
                    }
                ]
            }
            return guage_option
        }
    },
    mounted() {
        const myChart = echarts.init(document.getElementById('gauge'))
        myChart.setOption(this.opt);
    }
}
</script>
        
<style scoped lang='scss'>
.container{
    background-color: #fff;
    #gauge{
        width: 400px;
        height: 400px;
    }
}    
</style>
