
<script setup lang="ts">

import { withDefaults, defineProps,ref,watch,computed} from 'vue';


const props = withDefaults(
    defineProps<
        {
            Page:number,
            Max:number
        }
    >(),
    {
        Page : 1
    }
)

const emit = defineEmits(['OnPage'])

const page = ref(props.Page)
const max = ref(props.Max)
const activatedPage = ref("text-blue-600 hover:bg-blue-100 hover:text-blue-700 ")

function nextPage(){
    if (page.value < max.value )  page.value++
}   

function previousPage(){
    if (page.value > 1 ) page.value--
}   

function changePage(newPage:number){
    page.value = newPage
}

watch(() => props.Page,(newPage) =>{
    
    page.value = newPage
})

watch(() => props.Max,(newPage) =>{
    
    max.value = newPage
})

watch(page,(newPage) =>{
    emit('OnPage',newPage)
})

const indexList = computed(() => {
    let indexList:number[] = []

    // let count = max.value < 10 ? max.value : 10
    let count = 5

    if(count > 5 ){
        for(var i = 1; i <= count; i ++){
            indexList.push(max.value - 10 + i)
        }
    }else{
        for(var i = 1; i <= count; i ++){
            indexList.push(i)
        }
    }

    return indexList

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
                   
                    @click="changePage(1)"
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> {{ '<<' }}</a>
            </li>
            <li>
                <a 
                @click="previousPage"
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ '<' }}</a>
            </li>
          
            <li>
                <a 
                    class="  bg-white border border-gray-300
                     text-gray-500 
                     leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700
                      dark:text-gray-400 ">{{ page }}</a>
            </li>
     
    
            <li>
                <a 
                @click="nextPage"
                    class=" cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ '>' }}</a>
            </li>
            <li>
                <a
                @click="changePage(max)"
                    class=" cursor-pointer bg-white border  border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ '>>' }}</a>
            </li>
  
        </ul>

      
        
    </nav>


</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
