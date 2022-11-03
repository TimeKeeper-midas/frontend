<template>
    <div>
        <v-card
            color="#8FA3FF"
            dark
          > 
            
            <v-card-title class="text-h6 dark">
                {{status.companyName}} 출근 현황
            </v-card-title>
          </v-card>
          <br/>
          <v-card
            color="#8FA3FF"
            dark
          > 
            <v-card-title class="text-h6 dark">
                {{status.allWorker}}명의 사원중
            </v-card-title>

            <v-card-text class="text-h6 dark">{{status.nowWorker}} 명이 출근했어요.</v-card-text>
          </v-card>
    </div>
</template>
<script>
export default {
    props:{
        status:{
            companyName:String,
            allWorker:Number,
            nowWorker:Number
        }
    }
}
</script>
<style lang="css">
    .dark{
        color:#fff;
    }
    .title{
        font-size: 14px;
    }
    .space{
        margin-top: 15px;
    }
</style>