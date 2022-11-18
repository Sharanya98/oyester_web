<template>
  <v-app>
    <v-app-bar app elevation="0">
      <v-toolbar-title>Groww</v-toolbar-title>
    </v-app-bar>
    <SideBar />  

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar
  },

  data() {
    return {
      
    };
  },
};
</script>
