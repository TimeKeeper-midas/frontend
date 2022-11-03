<template>
    <div>
        <div class="card">
            <div class="content1">
                <span>{{averageWorkTime.companyName}} 평균 근무시간</span><br/>
                {{averageWorkTime.average}} 근무해요<br/>
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props:{
        averageWorkTime:{
            companyName:String,
            average:String,
        }
    }
}
</script>
<style lang="css">
    .card{
        width: 300px;
        height: auto;
        border-radius: 16px;
        background: #e0e0e0;
        box-shadow:  20px 20px 57px #bcbcbc,
             -20px -20px 57px #ffffff;
        margin: 30px auto 15px auto;
    }
    .content1{
        font-family: "Noto sans kr", sans-serif;
        padding: 24px;
        font-size: 22px;
        font-weight:600;
    }
    .content1 span {
        font-size: 18px;
    }
</style>