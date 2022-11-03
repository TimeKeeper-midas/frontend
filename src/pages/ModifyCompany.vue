<template>
  <v-form @submit.prevent="addCompany">
    <h1>기업 가입</h1>

    <v-text-field
      v-model="displayName"
      label="기업이름"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="primaryEmail"
      label="담당자 이메일"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="adminEmail"
      label="관리자 계정 이메일"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="adminDisplayName"
      label="관리자 성명"
      outlined
    ></v-text-field>

    <v-btn color="primary" block>완료</v-btn>
  </v-form>
</template>

<script lang="ts">
import { useMutation } from "@urql/vue";
import swal from 'sweetalert';
export default {
  data() {
    return {
      displayName: "",
      primaryEmail: "",
      adminEmail: "",
      adminDisplayName: "",
    };
  },
  methods: {
    async addCompany() {
      await this.mutation.executeMutation({
        displayName: this.displayName,
        primaryEmail: this.primaryEmail,
        adminEmail: this.adminEmail,
        adminDisplayName: this.adminDisplayName,
      });

      await swal('등록되었습니다. ^^');

      this.$router.push('/');
    }
  },
  setup() {
    return {
      mutation:
        useMutation(`mutation ($adminEmail: String!, $adminDisplayName: String!, $displayName: String!, $primaryEmail: String!) {
  addCompany(adminEmail: $adminEmail, adminDisplayName: $adminDisplayName, displayName: $displayName, primaryEmail: $primaryEmail) {
    id
  }
}`),
    };
  },
};
</script>

<style></style>
