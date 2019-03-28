<template>
  <div class="page_warrp">
    <el-row :gutter="20">
        <el-col :span="8"> <v-guage class="guage"> </v-guage></el-col>
        <el-col :span="8"> <v-bar class="bar"></v-bar> </el-col>
        <el-col :span="8">
            <el-card shadow="hover" class="newlist">
                <div slot="header">
                    <span>资讯</span>
                </div>
                <div v-for="o in 6" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="16"> <v-dataset class="dataset"></v-dataset> </el-col>
        <el-col :span="8"> 
            <el-card class="willdo" shadow="hover">
                <div slot="header">
                    <span>待办</span>
                </div>
                <div v-for="o in 6" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card> 
        </el-col>
        <el-col :span="8"> 
            <el-carousel trigger="click" height="200px">
                <el-carousel-item v-for="item in lunbotulist" :key="item.url">
                    <img :src="item.img" alt="" :class="{'full':isfull}">
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </el-row>  
    <el-row :gutter="20">
        <el-col :span="16"> <v-range></v-range> </el-col>
    </el-row>  
              
  </div>
</template>

<script>
import vGuage from './charts/guage.vue'
import vBar from './charts/bar.vue'
import vDataset from './charts/dataset.vue'
import vRange from './charts/riskrange.vue'
export default {
    data(){
        return{
            lunbotulist:[],
        }
    },
    methods:{
        getlunbotu(){
            this.$http.get('xxxxxxxx').then(result => {
                if(result.body.status === 0){
                    result.body.message.forEach(item  => {
                        item.img = item.src
                    });
                    this.lunbotulist = result.body.message;
                }
            })
        },
    },
    components:{
        vGuage,vBar,vDataset,vRange
    }
}
</script>


<style  lang="scss">
.page_warrp{
    height: 100%;
    padding: 10px;
    .el-row{
        margin-bottom: 15px;
        .el-carousel{
            margin-top: 20px;
            .el-carousel__container{
                background-color:#0d2a60;
            }
        }
    }
    .newlist{
        text-align: left;
        height: 200px;
        overflow-y:scroll;
        div{
            span{
                font-size: 19px;
                font-weight: 600;
                color: #0D2a60
            }
        }
        .el-card__header{
            padding: 8px 20px;
        }
        .el-card__body{
            padding-top: 10px;
        }
        .item{
            margin-bottom: 18px;
        }
    }
    .willdo{
        text-align: left;
        height: 200px;
        overflow-y:scroll;
        div{
            span{
                font-size: 19px;
                font-weight: 600;
                color: #0D2a60
            }
        }
        .el-card__header{
            padding: 8px 20px;
        }
        .el-card__body{
            padding-top: 10px;
        }
        .item{
            margin-bottom: 18px;
        }
    }
}

</style>
