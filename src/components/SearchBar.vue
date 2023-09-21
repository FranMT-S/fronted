
<script setup lang="ts">

import {withDefaults, defineProps, ref,watch } from 'vue';

const props = withDefaults(
          defineProps<
            {
              Query:string
            }
          >(),
          {
            Query:""
          }
)

const emit = defineEmits(['OnQuery'])
const query = ref(props.Query);



watch( query, (newValue) =>{
  emit('OnQuery',query.value)
})


</script>
<template>
    
    <!-- <div class="bg-white rounded-full border-none p-3 mb-4 shadow-md">
          <div class="flex items-center">
              <i class="px-3 fas fa-search ml-1"></i>
              <form>
                <input v-model="query" @change="sendQuery"  type="text" name="test" placeholder="Buscar..." class="ml-3 focus:outline-none w-full">
              </form>
          </div>
      </div> -->

      <div class="my-1 md:flex md:items-center md:justify-between">
        <div class="relative flex items-center mt-4 md:mt-0">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input
            v-model="query"
           
            type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
