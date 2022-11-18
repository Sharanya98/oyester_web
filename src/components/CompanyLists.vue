<template>
  <v-container class="main">
    <template>
      <v-data-table :headers="headers" :items="value" class="elevation-1">
        <template v-slot:[`item.Agent`]="{ item }">
          <v-btn color="primary" @click.stop="display = !display" text>{{
            item.Agent.id 
          }}</v-btn>
        </template>
      </v-data-table>
    </template>
    <template>
      <v-navigation-drawer 
      v-model="display" 
      absolute temporary right
     
      >
        <v-list > 
          <v-list-item >
            <v-list-item-title>Agent Details</v-list-item-title>           
          </v-list-item>
          <v-list-item >
            <v-list-item-title>ID</v-list-item-title>
            <v-list-item-subtitle>001</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>name</v-list-item-title>
            <v-list-item-subtitle>sharanuay</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>email</v-list-item-title>
            <v-list-item-subtitle>Shar@abc.com</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
            <v-list-item-subtitle>080-332-6555</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Department</v-list-item-title>
            <v-list-item-subtitle>Finance</v-list-item-subtitle>
          </v-list-item> 
        </v-list>
      </v-navigation-drawer>
    </template>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const headers = ref([
      { text: "ID", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Location", value: "Location" },
      { text: "Industry", value: "Industry" },
      { text: "Agent", value: "Agent" },
    ]);
    const value = props.data;
    const display = ref(null);
    console.log("==>",value)
    const showDetail = () => {
      console.log("btn");
      this.display = true;
    };
    return { headers, value, display, showDetail };
  }, 
};
</script>

<style>
.layout {
  display: flex;
}
</style>