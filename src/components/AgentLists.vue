<template>
  <div>
    <v-btn @click.stop="display = !display">nav</v-btn>
    <v-navigation-drawer v-model="display" right>
      <v-list>
        <v-list-item>
          <v-list-item-title>Agent Details</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(data,index) in details" :key="index">
          
            <!-- {{data[index]}} -->
            <AgentList :value="data.Agent" />      
          
          
        </v-list-item>
      </v-list>

      
    </v-navigation-drawer>
  </div>
</template>

<script>
// import ref from 'vue'
import AgentList from "./AgentList.vue";
export default {
  props: ["data"],
  components: { AgentList },
  data(props) {
    return {
      display: null,
      details: props.data,
    };
  },
};
</script>

<style>
</style>