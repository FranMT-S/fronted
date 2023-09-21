
<script setup lang="ts">

import { withDefaults, defineProps,ref,watch } from 'vue';


const props = withDefaults(
    defineProps<
        {
            Page:number
        }
    >(),
    {
        Page : 1
    }
)

const emit = defineEmits(['OnPage'])

const page = ref(props.Page)

function nextPage(){
   
    page.value++
}   

function previousPage(){
    
    if (page.value > 1 ) page.value--
}   

function changePage(newPage:number){
    page.value = newPage
}



watch(page,(newPage) =>{
    emit('OnPage',newPage)
})


</script>


<template>
<!-- component -->
<!-- component -->
<!-- This is an example component -->
<div>

    <nav class="px-0 py-3">
        <ul class="inline-flex -space-x-px">
 
            <li>      
                <a
                    @click="previousPage"
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> {{ '<' }}</a>
            </li>
            <li>
                <a 
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a 
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a  aria-current="page"
                    class=" cursor-pointer bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a 
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a 
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a
                @click="nextPage"
                    class=" cursor-pointer bg-white border  border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ '>' }}</a>
            </li>
  
        </ul>

      
        
    </nav>


</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
