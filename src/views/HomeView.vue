
<template>
  <div>
    <CompanyLists :data="list" />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import CompanyLists from "../components/CompanyLists.vue";

export default defineComponent({
  name: "Home",
  components: {
    CompanyLists, 
  },
  setup() {
    const display = ref(null);
    const list = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let res = await fetch("http://localhost:3000/data"); 

        console.log("res", res);
        if (!res.ok) {
          throw Error("NO ERROR");
        }
        const data = await res.json();
        console.log("data",data); 

        list.value = data;
      } catch (err) {
        error.value = err.message;
        console.log(err);
      }
    };

    console.log("home", list);
    load();

    return { list, load, error, display };
  }
});
</script>
<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script> -->
 