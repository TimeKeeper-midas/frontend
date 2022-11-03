<template>
    <div>
        <NowStatus v-bind:status="status"></NowStatus>
        <AverageAttendance v-bind:averageAttend="averageAttend"></AverageAttendance>
        <AverageWorkTime v-bind:averageWorkTime="averageWorkTime"></AverageWorkTime>
    </div>
</template>
<script lang="ts">
import NowStatus from '../components/Stats/NowStatus.vue';
import AverageAttendance from '../components/Stats/AverageAttendance.vue';
import AverageWorkTime from '../components/Stats/AverageWorkTime.vue';
export default {
    name:"Status",
    components:{NowStatus,AverageAttendance,AverageWorkTime},
    data() {
        return {
            //회사명, 회사원 수, 지금 출근중인 회사원
            status:{companyName:"마이다스 IT",allWorker:999,nowWorker:10},
            //회사명, 회사원 수, 지금 출근중인 회사원
            averageAttend:{companyName:"마이다스 IT",average:"8시 32분"},
            //회사명 , 평균 근무 시간
            averageWorkTime:{companyName:"마이다스 IT",average:"7시간 54분"}
        }
    },
}
</script>

<style></style>
