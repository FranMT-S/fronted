<script setup lang="ts">
  import { ERouterName } from '@/helpers/enums/RouterName.enum';

</script>


<template>
 <nav class="bg-gray-900 p-4 h-full grid grid-cols-7 w-full">
 
 
        <router-link :to="{name:ERouterName.HOME}"  class="flex items-center space-x-4 col-start-2 col-span-1">
          <span class="text-white">Enron Mail</span>
          <i class="fas fa-regular fa-envelope text-white text-2xl"></i>
        </router-link>
    
  
  
  </nav>
</template>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
