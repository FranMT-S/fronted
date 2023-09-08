<template>
    
    <div class="bg-white rounded-full border-none p-3 mb-4 shadow-md">
          <div class="flex items-center">
              <i class="px-3 fas fa-search ml-1"></i>
              <input type="text" placeholder="Buscar..." class="ml-3 focus:outline-none w-full">
          </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar'
 
});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
