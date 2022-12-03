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

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar
  },

  
});
</script>
