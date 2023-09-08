<template>
  <div class=" grid-cols-5 grid w-screen" v-bind:class="[`grid-rows-[${height}_1fr]`]">
    <div class="col-span-5 row-span-1">
      <NavBar id="navbar" />
    </div>
      <SideBar id="sidebar" :class="`row-start-2 row-end-3 col-span-1 h-[calc(100vh-${height})]`"
    />
      <router-view class="row-start-2 row-end-3 col-span-4 px-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';

import SideBar from '@/components/SideBar/SideBar.vue'; // @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',

  setup(){
    const height = computed(() => "5rem")
    return {height}
  },

  components: {
    SideBar,
    NavBar
  },
});
</script>



<style>
  .test{
    color:blue;
    font-size: 1.5rem;
  }


</style>