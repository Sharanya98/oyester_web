<template>
  <v-list class="contain">
    <v-list v-for="item in a" :key="item">
      <h3>  ID<span class="list">{{ item["Agent"].id }}</span></h3> <br />
      <h3>  Name<span class="list">{{ item["Agent"].Name }}</span></h3> <br />
      <h3>  Email<span class="list">{{ item["Agent"].Email }}</span></h3> <br />
      <h3>  Contact<span class="list">{{ item["Agent"].contact }}</span></h3> <br />
      <h3>  Department<span class="list">{{ item["Agent"].Department }}</span></h3> <br />
      

      <!-- <AgentDetails :details="item"/>  -->
      <!-- {{key}} {{details}} -->
      <!-- <v-list-item-title>  ID  </v-list-item-title>    
      <v-list-item-title class="wrap-text">{{item["Agent"].id}}</v-list-item-title>
      <br />
      <v-list-item-title>  Name </v-list-item-title>    
      <v-list-item-title class="wrap-text">{{item["Agent"].Name}}</v-list-item-title>
      <br />
      <v-list-item-title>  Email  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{item["Agent"].Email}}</v-list-item-subtitle>
      <v-list-item-title>  Contact  </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{item["Agent"].contact}}</v-list-item-subtitle>
      <v-list-item-title>  Department </v-list-item-title>    
      <v-list-item-subtitle class="wrap-text">{{item["Agent"].Department}}</v-list-item-subtitle> -->
    </v-list>
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
import Agent from "@/types/agent";
import Data from "@/types/data";
import { computed, defineComponent, PropType, ref } from "vue";
// import AgentDetails from "./AgentDetails.vue";

export default defineComponent({
  props: {
    value: {
      required: true,
      type: Object as PropType<Data[]>,
    },
  },
  setup(props) {
    const list = ref(props.value);
    const a = computed<Agent[]>(() => {
      var ar = Object.entries(list);
      return ar.map((i) => i[1]);
    });
    return {
      list,
      a,
    };
  },
  components: {
    //AgentDetails
  },
  methods: {
    // agentList : () :any | null=> {
    //   return this.list
    //  }
  },
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
.contain {
  width: 300px;
}

.wrap-text {
  white-space: normal;
  -webkit-line-clamp: unset !important;
}
.list{
  color:#749EEF;
  padding-left:5px;
}
</style>