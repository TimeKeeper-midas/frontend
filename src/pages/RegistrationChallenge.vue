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
import swal from "sweetalert";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async register() {
      const email = this.email;

      const attestation = JSON.stringify(
        await startRegistration(
          JSON.parse(
            (
              await this.startRegistrationMutation.executeMutation({
                email,
              })
            ).data.startRegistrationChallenge
          )
        )
      );

      window.localStorage.setItem(
        "token",
        (
          await this.finishRegistrationMutation.executeMutation({
            email,
            attestation,
          })
        ).data.finishRegistrationChallenge
      );

      await swal("^^", "생체 정보를 등록하였습니다.");
    },
  },
  setup() {
    const startRegistrationMutation = useMutation(`mutation ($email: String!) {
  startRegistrationChallenge(email: $email)
}`);

    const finishRegistrationMutation =
      useMutation(`mutation FinishRegistrationChallenge($email: String!, $attestation: String!) {
  finishRegistrationChallenge(email: $email, attestation: $attestation)
}`);

    return { startRegistrationMutation, finishRegistrationMutation };
  },
};
</script>

<style></style>
