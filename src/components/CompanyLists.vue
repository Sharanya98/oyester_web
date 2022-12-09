<template> 
  <v-container class="main">                 
    <template>
      <v-data-table :headers="headers" :items="value" class="elevation-1">
        <template v-slot:[`item.Agent`]= "{ item }">
          <v-btn
            color="primary"
            @click="agentData(item.Agent.id)"
            text 
            outlined 
            class="ma-2"   
            >{{ item.Agent.id }}              
            </v-btn> 
        </template>
      </v-data-table>        
    </template>   
    <template>       
      <v-navigation-drawer v-model="display" width="300" right absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title>Agent Details</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="info in agentDetails" :key="info">        
          <AgentList :value="info" />        
        </v-list-item>          
      </v-list>  
    </v-navigation-drawer>  
    </template>   
  </v-container>       
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import AgentList from "./AgentList.vue";
import Headers from "@/types/headers";
import Data from "@/types/data"; 
 
export default defineComponent({  
  props: {
    data :{
      required : true,
      type : Array as PropType<Data[]>  
    } 
  },    
  components: {
    AgentList,  
  }, 
  setup(props) {     
    const headers = ref<Headers[]>([
      { text: "Name", value: "name" },
      { text: "Agent Name", value: "agentName" },
      { text: "Industry", value: "Industry" },
      { text: "Occupation", value: "occupation" },
      { text: "Phone", value: "phone" },
      { text: "Location", value: "location" },
      { text: "Requirement", value: "requirement" },
      { text: "Industry", value: "Industry" },
      { text: "Status", value: "status" },
      { text: "Job Description", value: "jobDescription" },
      { text: "Work Progress", value: "workProgress" },
      { text: "Condition", value: "condition" },
      { text: "URL", value: "url" },
      { text: "Email", value: "Email" },
      { text: "remarks", value: "remarks" },
      { text: "date", value: "date" },
    ]);
    const value = [...props.data];
    
    const display = ref<boolean>(false); 
   
    const agentDetails = ref({});      
    
    return { headers, value, display, agentDetails};
  },
  methods: {
    agentData(btnvalue:string) {
      this.display = !this.display;  
      const agent = this.value.filter((item) => item.Agent.id == btnvalue);
      this.agentDetails = agent;
    }, 
  },          
});      
</script>
<style> 
 
</style>  