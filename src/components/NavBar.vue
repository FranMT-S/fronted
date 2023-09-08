<template>
 <nav class="bg-blue-500 p-4 h-full grid grid-cols-6 w-full">
    <SearchBar class="col-start-2 translate-x-10 col-span-2"/>
    <div class="flex items-center space-x-4 col-start-6 col-span-1">
      <span class="text-white">Bienvenido</span>
      <i class="fas fa-user-circle text-white text-2xl"></i>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchBar from './SearchBar.vue'

  export default defineComponent({
    name: 'NavBar',
    components:{
      SearchBar
    }
  });
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
