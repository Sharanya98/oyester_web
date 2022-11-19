<template>
      <v-list >
        <v-list-item v-for="(v,k) in value.Agent" :key="k.id">
                <!-- {{v}} {{k}} {{i}} -->

       
            
              <v-list-item-title> {{k}} </v-list-item-title>
               <v-list-item-subtitle>{{v}}</v-list-item-subtitle>        
                         
       

      
       
      </v-list-item>
          

      </v-list>
</template>

<script>
export default {
  props :['value'],
  data(props){
    return{
       p : props.value
      
    }
  },
  methods: {
    getDataByID : function(){
      console.log("p",this.p)
    }
  }

 
}
</script>

<style>

</style>