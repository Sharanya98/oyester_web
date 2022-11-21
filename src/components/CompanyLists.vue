<template>
  <v-container class="main">
    <template>
      <v-data-table :headers="headers" :items="value" class="elevation-1">
        <template v-slot:[`item.Agent`]="{ item }">
          <v-btn
            color="primary"
            @click="callAgentfunc(item.Agent.id)"
            value
            text
            :display="callAgent"
            >{{ item.Agent.id }}</v-btn
          >
        </template>
      </v-data-table>
    </template>
    <template>
      <AgentLists    :setvalue="setValue" />
    </template>  
  </v-container>
</template>     
 
<script>
import { ref } from "vue";
import AgentLists from "./AgentLists.vue";

export default {
  props: ["data"],
  components: {
    AgentLists,
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
    
    const callAgent = ref(false); 
    const setValue = null;

    console.log("==>", value);

    return { headers, value, callAgent, setValue };
  },
  methods: {
    callAgentfunc(btnvalue) {
      this.callAgent = !this.callAgent;
      console.log("value", btnvalue);
      this.setValue = btnvalue;
    },
  },
};
</script>

<style>
.layout {
  display: flex;
}
</style>