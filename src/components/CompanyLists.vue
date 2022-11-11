<template>
  <v-container>
    <template>
      <v-data-table
        :headers="headers"
        :items="value"
        class="elevation-1"
      ></v-data-table>
    </template>
  </v-container>
</template>

<script>
import { ref } from 'vue';
export default {
    props : ['data'],
    setup(props){
      const headers = ref( [
        { text: "ID",value: "id"},
        { text: "Name", value: "Name" },
        { text: "Location", value: "Location" },
        { text: "Industry", value: "Industry" },
        { text: "Agent", value: "Agent" },
       
      ])
      const value = props.data
      console.log("co",props)
    
      return {headers,value}
    }  
};
</script>

<style>
</style>