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
        <v-list-item v-for="i in agentDetails" :key="i">          
           <!-- <AgentList :value="v" :keys="k"/> -->              
           <AgentList :value="i" />        
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
      { text: "ID", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Location", value: "Location" },
      { text: "Industry", value: "Industry" },
      { text: "Agent", value: "Agent" },
    ]);
    const value = [...props.data];
    
    const display = ref<boolean>(false); 
   
    const agentDetails = ref({});      
 
    // const filteredData = computed((ids : string ) =>{
    //    display.value= !display.value; 
    //     return value.filter((item) => {
    //       return  item.Agent.id == ids})        
    // })
    
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