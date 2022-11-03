<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Midas</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            link
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "a" },
        { title: "Photos", icon: "mdi-image", link: "a" },
        { title: "About", icon: "mdi-help-box", link: "a" },
      ],
    };
  },
};

</script>
