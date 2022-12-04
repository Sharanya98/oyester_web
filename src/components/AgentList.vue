<template>
  
  <v-list class="contain">
    <v-list-item v-for="item in value" :key="item">    
       
      {{item}}

      <!-- <AgentDetails :details="item"/>  -->
      <!-- {{key}} {{details}} -->
      <!-- <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.id }}</v-list-item-subtitle>

      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Name }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Email }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.contact }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Department }}</v-list-item-subtitle> -->
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
// import Agent from "@/types/agent";
//import Agent from "@/types/agent";
//  import Agent from "@/types/agent";
//   import Agent from "@/types/agent";
//import Agent from "@/types/agent";
//import Agent from "@/types/agent";
// import Agent from "@/types/agent";
import Data from "@/types/data";
import { defineComponent, PropType } from "vue"; 
// import AgentDetails from "./AgentDetails.vue";

export default defineComponent( {
  props: {
    value :{
      required : true,
      type : Object as PropType<Data[]>
    }, 
  },
  components : { 
    //AgentDetails 
  }
  // data(props){
  //   return{
  //     lists : props.value   
  //     // const alist : lists.forEach((i: { Agent: any; }) => i.Agent)

  //   }
  // },
  // computed: {
  //   agentlist(){
  //     const alist : this.lists.forEach((i: { Agent: any; }) => i.Agent)
  //   }
  // }
  // setup(props){
  //   const lists = props.value
  //   // const agentLists = ref([]);
   
  //   const alist : ComputedRef<Agent[]> = computed(() =>{
  //     return lists.map((i) => {
  //       return i.Agent
  //     })
  //   })
  //   // const agentList = props.value;

  //   // const list = ref<Data[]>(agentList)
  //   //const itrlist = list.value
    

  //   // console.log("key",keys)

  //    return { alist}
  // },  
  //  methods :{ 
  //     agents(){
  //        const newagentlist = this.lists.forEach((i) => {  i.Agent }
  //         this.agentLists = newagentlist
  //    }}
  });
  

</script>

<style scoped>
.contain{
  width:300px;
}

.wrap-text {
  white-space: normal;
  -webkit-line-clamp: unset !important;
  
}
</style>