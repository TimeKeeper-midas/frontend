<template>
  <v-form @submit.prevent="register">
    <h1 class="text-h4 mb-4">생체 정보 등록 ^^</h1>

    <v-text-field v-model="email" label="계정 이메일" outlined></v-text-field>

    <v-btn color="primary" block>등록해줘! ^^</v-btn>
  </v-form>
</template>

<script lang="ts">
import { startRegistration } from "@simplewebauthn/browser";
import { useMutation } from "@urql/vue";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async register() {
      await startRegistration(
        JSON.parse(
          (
            await this.registrationMutation.executeMutation({
              email: this.email,
            })
          ).data.startRegistrationChallenge
        )
      );
    },
  },
  setup() {
    const registrationMutation = useMutation(`mutation ($email: String!) {
  startRegistrationChallenge(email: $email)
}`);

    return { registrationMutation };
  },
};
</script>

<style></style>
