
<script setup lang="ts">

import {  useRoute, useRouter } from 'vue-router'

import { ref,onBeforeMount, onMounted, watch} from 'vue';
import { ERouterName } from '@/helpers/enums/RouterName.enum';
import { MailService } from '@/services/mail.service';
import { Hit } from '@/interfaces/Mail.Interface';
import MyTable from '@/components/Table.vue';
import Pagination from '@/components/Pagination.vue';
import SearchBar from '@/components/SearchBar.vue';


const router = useRouter();
const route = useRoute();

const query = ref("");
const errMsg = ref("");
const max = 100;
const page = ref(0)
const total = ref(0)
const working = ref(false)
const Hits = ref([] as Hit[])
var totalPage = 0;
var debounceTimeout = 0

onBeforeMount(() => {
  page.value = Number(route.query['page']?.toString()) ;
  page.value = Number.isNaN(page.value) ? 1 : page.value;
  page.value = page.value < 1 ? 1 : page.value;
  query.value = route.query['query']?.toString()  || "" ;

  getMails(query.value,page.value * max,max)
})

onMounted(() => {
 
})


const getMails = (query:string,from:number,max:number) => {

  if (from < 0 ) from = 0;
  if(query.trim().length == 0)
    getAllMails(from,max)
  else
    findMails(query,from,max)
  
}

 const getAllMails = (from:number,max:number) => {
    MailService.getAllMails(from,max).then(responseHits)
  .then( hits => Hits.value = hits )
  .catch(catchError)
  .finally(() => working.value = false);
}

const findMails = (query:string,from:number,max:number) => {
    MailService.findMails(query,from,max).then(responseHits)
  .then( hits => Hits.value = hits )
  .catch(catchError)
  .finally(() => working.value = false);
}

const responseHits = (response) => {
    errMsg.value = ""
    
    total.value = response.data.data.total.value as number
    if(total.value == 0 ) page.value = 0
    return response.data.data.hits as Hit[] 
}

const catchError = (error) => {
    errMsg.value = error.response.data.error as string
    console.error('Error al obtener los correos:', error);
}

const changeQuery = (newQuery:string) => {
  query.value = newQuery;
  page.value = 1;
}

const changePage = (newPage:number) => {
  if(newPage < 1) newPage = 1
  page.value = newPage

}

watch(
      () => route.params,
      (newQuery) => {
        
        working.value = true;
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
    
            getMails(query.value,(page.value - 1) * max,max)
          }, 300); 
        },    
      
)


watch(
  query,
  (newQuery) => {
    
    router.push({name:ERouterName.MAILS,query:{query:newQuery,page:page.value}})
  }
)


watch(
  page,
  (newPage) => {
    router.push({name:ERouterName.MAILS,query:{query:query.value,page:newPage}})
  }
)


// watch(
//   [query,page],
//   ([newQuery,newPage]) => {
//     router.push({name:ERouterName.MAILS,query:{query:newQuery,page:newPage}})
//   }
// )


</script>



<template>
  <div class="inbox">
  
    
 

    <div class=" text-center  divide-y  rounded">

      <div class="flex justify-evenly items-end">
        <div>
          <p class="text-red-500 break-words w-11/12" v-if="errMsg">
            Error: {{ errMsg  }}
          </p>
          <SearchBar :Query="query" @OnQuery="changeQuery"></SearchBar>
        </div>
        <div>
          <div >
            <div>
              <i class="fa-regular fa-envelope"></i> {{ (page - 1) * max < total ? (page - 1) * max + 1 : total }}-{{ (page) * max < total ? (page) * max : total }} / {{ total }}
            </div>
            <div>
              <i class="fa-regular fa-file"></i> {{ page }} / {{ total % max == 0 ? total / max : Math.ceil(total / max) }}
            </div>
          </div>
          <Pagination :Page="page" @onPage="changePage"></Pagination>
        </div>
      </div>
      <div>
   
        <MyTable :working="working" :query="query" class="mb-10" :Hits="Hits"></MyTable>
      </div>
    </div>
  </div>
</template>
