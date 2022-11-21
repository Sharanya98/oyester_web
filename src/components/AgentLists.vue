<template>
  <div>
     <!-- <v-btn @click.stop="filterdata">nav </v-btn> -->
    
    <v-navigation-drawer v-model="modal" right>
      <v-list>
        <v-list-item>
          <v-list-item-title>Agent Details</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="item in agentDetails" :key="item.id">
          <!-- {{ item}} -->
          <!-- {{data[index]}} -->
          <AgentList :value="item" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template> 
  
<script>
// import ref from 'vue'
import AgentList from "./AgentList.vue";
export default {
  props: ["data",'setvalue','display'],
  components: { AgentList },
  data(props) {
    return {
      model: props.display,
      details: props.data,
      agentDetails: {},
      idValue : props.setvalue      
    };
  },   
  methods: {
    filterdata: function () {
      // this.display = !this.display;
      // console.log("props",this.details)
      const dataObject = this.details;
      console.log("setvalue",this.idValue)
      const agent = dataObject.filter((item) => item.Agent.id == this.idValue);

      this.agentDetails = agent;
      
      console.log(agent);
    },
  },
};
</script>

<style>
</style>