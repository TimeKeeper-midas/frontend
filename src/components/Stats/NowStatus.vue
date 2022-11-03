<template>

    <div>
        <div class="card">
            <div class="content1">
                <span>{{status.companyName}} 출근 현황</span><br/>
                {{status.allWorker}}명의 사원중<br/>
                {{status.nowWorker}}명이 출근했어요.
            </div>
        </div>
    </div>

</template>
<script>
export default {
  props: {
    status: {
      companyName: String,
      allWorker: Number,
      nowWorker: Number,
    },
  },
};
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

