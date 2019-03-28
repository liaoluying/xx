<template>          
    <div class="container el-card">
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
                title:{
                    how:true,
                    text: '安全评分',
                    top: 5,
                    left: 20,
                    textStyle:{
                        color: '#0D2a60'
                    }
                },
                series: [
                    {
                        name: '安全系数',
                        type: 'gauge',
                        center:['50%','80%'],
                        startAngle: 180,
                        radius: "120%",
                        endAngle: 0,
                        splitNumber: 1,
                        axisLine: {
                            lineStyle: {
                                width: 25,
                                color: [[0.2, '#c23531'], [0.8, '#d48265'], [1, '#91c7ae']]
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
        window.addEventListener("resize", function () {
          myChart.resize();
        });
    }
}
</script>
        
<style scoped lang='scss'>
.container{
    background-color: #fff;
    width: 100%;
    height: 100%;
    &:hover{box-shadow: 0px 2px 5px 1px rgb(206, 203, 203);}
    span{
        display: block;
        text-align: left;
        font-size: 20px;
        padding: 10px 0 0 20px;
        color: #0D2a60;
    }
    #gauge{
        width: 100%;
        height: 200px;
       
    }
}    
</style>
