<template>          
    <div class="container el-card">
        <div id="bar"></div>
    </div>
</template>
        
<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            source:[
                ["资产1",50],
                ["资产2",34],
                ["资产3",56],
                ["资产4",12],
                ["资产5",35],
                ["资产6",67],
            ]
        }
    },
    computed:{
        opt(){
            let bar_option= {
                dataset: {
                    source: [
                        ['amount', 'asset'],
                        [50, '资产1'],
                        [34, '资产2'],
                        [12, '资产4'],
                        [35, '资产5'],
                        [67, '资产6'],
                        [90, '资产8'],
                        [15, '资产9'],
                    ]
                },
                title:{
                    how:true,
                    text: '资产风险',
                    top: 5,
                    left: 20,
                    textStyle:{
                        color: '#0D2a60'
                    }
                },
                grid: {
                    containLabel: true,
                    left: '5%',
                    right: '22%',
                    bottom: '5%',
                    top: '20%'
                },
                xAxis: {name: '风险数量'},
                yAxis: {type: 'category'},
                series: [
                    {
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                color:'#0D2a60'
                            }
                        },
                        encode: {
                            // Map the "amount" column to X axis.
                            x: 'amount',
                            // Map the "product" column to Y axis
                            y: 'asset'
                        }
                    }
                ]
            }
            return bar_option
        }
    },
    mounted() {
        const myChart = echarts.init(document.getElementById('bar'))
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
    #bar{
        width: 100%;
        height: 200px;
       
    }
}     
</style>
