<template>
  <v-container class="main">
    <template>
      <v-data-table :headers="headers" :items="value" class="elevation-1">
        <template v-slot:[`item.Agent`]="{ item }">
          <v-btn
            color="primary"
            @click="agentData(item.Agent.id)"
            text
            outlined
            class="ma-2"
            >{{ item.Agent.id }}</v-btn
          >
        </template>
      </v-data-table> 
    </template>
    <template>
      <v-navigation-drawer v-model="display" width="300" right absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title>Agent Details</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="item in agentDetails" :key="item.id">
          <AgentList :value="item" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer> 
    </template>  
  </v-container>
</template>         
        
<script>
import { ref } from "vue";
import AgentList from "./AgentList.vue";

export default {
  props: ["data"],
  components: {
    AgentList,
  },
  setup(props) {
    const headers = ref([
      { text: "ID", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Location", value: "Location" },
      { text: "Industry", value: "Industry" },
      { text: "Agent", value: "Agent" },
    ]);
    const value = props.data;
    
    const display = ref(false); 
   
    const agentDetails = ref({});   

    return { headers, value, display, agentDetails};
  },
  methods: {
    agentData(btnvalue) {
      this.display = !this.display;  
      const agent = this.value.filter((item) => item.Agent.id == btnvalue);
      this.agentDetails = agent;
    },
  },
};
</script>

<style> 
 
</style>