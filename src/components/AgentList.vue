<template>
  
  <v-list class="contain">
    <v-list-item v-for="(details, key) in value.Agent" :key="key.id">
      <v-list-item-title> {{ key }} </v-list-item-title>
    
      <v-list-item-subtitle class="wrap-text">{{ details }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
   
    };
  },
};
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