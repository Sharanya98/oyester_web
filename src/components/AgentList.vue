<template>
  <v-list class="contain">
    <v-list v-for="item in agentlist" :key="item">
      <h3>  ID<span class="list">{{ item["Agent"].id }}</span></h3> <br />
      <h3>  Name<span class="list">{{ item["Agent"].Name }}</span></h3> <br />
      <h3>  Email<span class="list">{{ item["Agent"].Email }}</span></h3> <br />
      <h3>  Contact<span class="list">{{ item["Agent"].contact }}</span></h3> <br />
      <h3>  Department<span class="list">{{ item["Agent"].Department }}</span></h3> <br />
    </v-list>
  </v-list>
</template> 
 
<script lang="ts">
import Agent from "@/types/agent";
import Data from "@/types/data";
import { computed, defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    value: {
      required: true,
      type: Object as PropType<Data[]>,
    },
  },
  setup(props) {
    const list = ref(props.value);
    const agentlist = computed<Agent[]>(() => {
      var arr = Object.entries(list);
      return arr.map((i) => i[1]);
    });
    return {
      list,
      agentlist,
    };
  },
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