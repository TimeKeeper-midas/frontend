<template>
  <v-form>
    <h1 class="text-h4 mb-4">생체 정보 등록 ^^</h1>

    <v-text-field
      v-model="email"
      label="계정 이메일"
      outlined
    ></v-text-field>

    <v-btn color="primary" block @click="register">등록해줘! ^^</v-btn>
  </v-form>
</template>

<script lang="ts">
import { startRegistration } from "@simplewebauthn/browser";

export default {
  data() {
    return {
      email: "dsffdasfdsa",
    };
  },
  methods: {
    async register() {
      await startRegistration(this.regi);
    },
  },
};
</script>

<style></style>
