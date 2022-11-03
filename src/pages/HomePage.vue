<template>
  <v-form>
    <h1 class="text-h2">기업정보 수정</h1>

    <v-text-field
      v-model="message4"
      label="기업이름"
      outlined
      clearable
    ></v-text-field>
    <v-text-field
      v-model="message4"
      label="담당자 이메일"
      outlined
      clearable
    ></v-text-field>
    <v-text-field
      v-model="message4"
      label="관리자 계정 이메일"
      outlined
      clearable
    ></v-text-field>

    <v-btn color="primary" block>완료</v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message4: "dsffdasfdsa",
    };
  },
};
</script>

<style></style>
