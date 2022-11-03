<template>
  <div>
    <NowStatus v-bind:status="status"></NowStatus>
  </div>
</template>
<script lang="ts">
import NowStatus from "../components/Stats/NowStatus.vue";
export default {
  name: "Status",
  components: { NowStatus },
  data() {
    return {
      status: { companyName: "마이다스 IT", allWorker: 999, nowWorker: 10 },
    };
  },
};
</script>

<style></style>
