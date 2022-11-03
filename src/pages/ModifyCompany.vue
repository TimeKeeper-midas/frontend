<template>
  <v-form>
    <h1>기업정보 수정</h1>

    <v-text-field
      v-model="message1"
      label="기업이름"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="message2"
      label="담당자 이메일"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="message3"
      label="관리자 계정 이메일"
      outlined
    ></v-text-field>

    <v-btn color="primary" block>완료</v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message1: "midas",
      message2: "recruit@midasit.com",
      message3: "leedohyeon0502@gmail.com"
    };
  },
};
</script>

<style></style>
