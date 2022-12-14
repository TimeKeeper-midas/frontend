<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Midas</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item
          link
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">로그인해주세요</span>
            </v-card-title>
            <v-card-text v-if="!webauthnAvailable"
              >저희는 당신이 사용하고 계신 브라우저를 싫어합니다. 최신 버전의
              브라우저를 사용해주세요.
            </v-card-text>
            <v-card-actions v-if="webauthnAvailable">
              <v-spacer></v-spacer>
              <v-btn color="disabled" text @click="goToRegister">
                기업 가입
              </v-btn>
              <v-btn color="disabled" text @click="goToRegister">
                처음 로그인이에요
              </v-btn>
              <v-btn color="blue" text @click="login">생체 인증</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {
  browserSupportsWebAuthn,
  startAuthentication,
} from "@simplewebauthn/browser";
import { useMutation, useQuery } from "@urql/vue";

export default {
  data() {
    return {
      webauthnAvailable: browserSupportsWebAuthn(),
      drawer: false,
      group: null,
      items: window.location.pathname.startsWith("/admin/")
        ? [
            { title: "사원 통계", link: "/admin" },
            { title: "사원 관리", link: "/admin/users" },
            { title: "기업 정보", link: "/admin/information" },
          ]
        : [{ title: "근태관리 ^^", link: "/" }],
      dialog: false,
    };
  },
  methods: {
    goToRegister() {
      this.dialog = false;
      this.$router.push("/register");
    },
    async login() {
      const attestation = await startAuthentication(
        JSON.parse(
          this.authQueryData.startAuthenticationChallenge as any
        ) as any
      );

      window.localStorage.setItem(
        "token",
        (
          await this.authMutation.executeMutation({
            attestation: JSON.stringify(attestation),
          })
        ).data.finishAuthenticationChallenge
      );

      this.dialog = false;
    },
  },
  setup() {
    const authQuery = useQuery({
      query: `query {
  startAuthenticationChallenge
}`,
    });

    const authMutation = useMutation(`mutation ($attestation: String!) {
  finishAuthenticationChallenge(attestation: $attestation)
}`);

    return { authQueryData: authQuery.data, authMutation };
  },
  mounted() {
    this.dialog =
      window.localStorage.getItem("token") === null &&
      this.$route.path !== "/register";
  },
};
</script>

<style lang="css">
html,
body {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
