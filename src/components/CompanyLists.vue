<template>
  <v-container class="main">
    <template>
      <v-data-table :headers="headers" :items="value" class="elevation-1">
        <template v-slot:[`item.Agent`]="{ item }">
          <v-btn color="primary"  input-value text>{{
            item.Agent.id  
          }}</v-btn>
        </template> 
      </v-data-table>
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
    
    return { headers, value, display };
  }, 
};
</script>

<style>
.layout {
  display: flex;
}
</style>