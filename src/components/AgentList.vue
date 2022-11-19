<template>
      <v-list >
        <v-list-item v-for="(v,k) in value" :key="k">
                <!-- {{v}} {{k}} {{i}} -->

        
        <v-list-item >
              <v-list-item-title> {{k}} </v-list-item-title>
               <v-list-item-subtitle>{{v}}</v-list-item-subtitle>        
                         
        </v-list-item>
        <!-- <v-list-item >
              <v-list-item-title> Name </v-list-item-title>
               <v-list-item-subtitle>{{value.Name}}</v-list-item-subtitle>  
                         
        </v-list-item>
        <v-list-item >
              <v-list-item-title>Email  </v-list-item-title>
               <v-list-item-subtitle>{{value.Email}}</v-list-item-subtitle>  
                         
        </v-list-item>
        <v-list-item >
              <v-list-item-title>Contact  </v-list-item-title>
               <v-list-item-subtitle>{{value.contact}}</v-list-item-subtitle>  
                         
        </v-list-item>
        <v-list-item >
              <v-list-item-title> Department</v-list-item-title>
               <v-list-item-subtitle>{{value.Department}}</v-list-item-subtitle>  
                         
        </v-list-item> -->
      </v-list-item>
          

      </v-list>
</template>

<script>
export default {
  props :['value'],
  data(props){
    return{
       p : props
      
    }
  },
  methods: {
    
  }


}
</script>

<style>

</style>