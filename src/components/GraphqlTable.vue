<template>
  <v-data-table
    class="elevation-1"
    dense
    filterable
    multi-sort
    show-select
    :headers="headers"
    :items="desserts"
    :items-per-page="15"
  ></v-data-table>
</template>
<script lang="ts">
import { useQuery } from "@urql/vue";

export default {
  props: {
    query: String,
    headers: Array,
  },
  mounted() {
    return {
      data: useQuery({
        query: this.query,
      }).data,
    };
  },
};
</script>
