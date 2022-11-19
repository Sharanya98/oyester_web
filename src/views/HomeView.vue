<template>
  <div>
  
    <CompanyLists :data="list"/>

    <AgentLists :data="list"/>

  </div>
  
</template>

<script>
  import { ref } from 'vue'
  import CompanyLists from '../components/CompanyLists.vue'
  import AgentLists from '../components/AgentLists.vue'
  


  export default {
    name: 'Home',
    components: {  
      CompanyLists,
      AgentLists     
    },
    setup(){

      const display = ref(null)
      const list = ref([])      
      const error = ref(null)
      
      

      const load = async() =>{
        try{
          
          let res = await fetch('http://localhost:3000/data')
          
          console.log("res",res)
          if(!res.ok){
            throw Error('NO ERROR')
          }
          const data = await res.json()
          console.log(data)
         
          list.value = data
          
        }
        catch(err){
          error.value = err.message
          console.log(err)
        }
      }

      

      console.log("home",list)
      load()

      return {list,load,error,display}
    }
  }
</script>
