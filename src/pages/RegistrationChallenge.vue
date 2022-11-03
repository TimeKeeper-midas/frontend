<template>
  <v-form>
    <h1 class="text-h4 mb-4">생체 정보 등록 ^^</h1>

    <v-text-field
      v-model="message4"
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
      message4: "dsffdasfdsa",
    };
  },
  methods: {
    async register() {
      await startRegistration();
    },
  },
};
</script>

<style></style>
