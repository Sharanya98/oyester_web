<template>
  <v-list class="contain">
    <v-list-item v-for="item in details" :key="item.id">
      {{ item.Agent.Department }}
      <!-- {{key}} {{details}} -->
       <!-- <v-list-item-title>  {{key}}  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ description }}</v-list-item-subtitle> -->

      <!-- <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Name }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Email }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.contact }}</v-list-item-subtitle>
      <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{ item.Department }}</v-list-item-subtitle>  -->
    </v-list-item>
  </v-list>
</template> 


<script lang="ts">
import { defineComponent, PropType } from "vue";
// import Agent from "@/types/agent";
import Data from "@/types/data";

export default defineComponent({
  props: {
    details: {
      required: true,
      type: Array as PropType<Data[]>,
    },
  },
  setup() {},
});
</script>
