
<script setup lang="ts">

import { withDefaults, defineProps,ref,watch,computed} from 'vue';


const props = withDefaults(
    defineProps<
        {
            Page:number,
            Max:number,
            total:number
        }
    >(),
    {
        Page : 1
    }
)

const emit =  defineEmits<{
    (e:'OnPage',newPage:number):void
}>()

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

    <div class="card">
        <Paginator
            :template="{
                '640px': 'FirstPageLink PrevPageLink JumpToPageDropdown NextPageLink LastPageLink',
                '960px': 'FirstPageLink PrevPageLink JumpToPageDropdown NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown '
            }"
            :rows="100"
            :totalRecords="total">
        </Paginator>
    </div>

    <nav class="px-0 py-3 " >
        
        <ul class="inline-flex -space-x-px ">
 
            <li>      
                <a
                   
                    @click="changePage(1)"
                    class=" cursor-pointer bg-white border border-purple-300 text-purple-800 hover:bg-purple-800 hover:text-white    ml-0 rounded-l-lg leading-tight py-2 px-3     "> {{ '<<' }}</a>
            </li>
            <li>
                <a 
                @click="previousPage"
                    class=" cursor-pointer bg-white border border-purple-300 text-purple-800 hover:bg-purple-800 hover:text-white    leading-tight py-2 px-3     ">{{ '<' }}</a>
            </li>
          
            <li>
                <a 
                    class="  bg-white border border-purple-300 text-purple-800 hover:bg-purple-800 hover:text-white
                      
                     leading-tight py-2 px-3  
                       ">{{ page }}</a>
            </li>
     
    
            <li>
                <a 
                @click="nextPage"
                    class=" cursor-pointer bg-white border border-purple-300 text-purple-800 hover:bg-purple-800 hover:text-white    leading-tight py-2 px-3     ">{{ '>' }}</a>
            </li>
            <li>
                <a
                @click="changePage(max)"
                    class=" cursor-pointer bg-white border  border-purple-300 text-purple-800 hover:bg-purple-800 hover:text-white    rounded-r-lg leading-tight py-2 px-3     ">{{ '>>' }}</a>
            </li>
  
        </ul>

      
        
    </nav>


  
</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
