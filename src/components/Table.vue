
<script setup lang="ts">



import { Hit } from '@/interfaces/Mail.Interface';
import { ERouterName } from '@/helpers/enums/RouterName.enum';
import Spinner from '@/components/Spinner.vue'
import { ref } from 'vue';
import moment from 'moment'

const props =  withDefaults(
                defineProps<{
                Hits: Hit[],
                query:string,
                working:boolean
              }>(),{
                query:"",
                working:false
              }
 
) 

const emit = defineEmits<{
    (e:'OnIdMail',id:string):void
}>()

</script>


<!-- component -->
<template>
<section class="container px-4 mx-auto ">
    <div class="flex flex-col mt-6 shadow-2xl">
        <div 
        :class="{'overflow-x-auto':!working,'overflow-x-hidden':working}"
        class="-mx-4 -my-2  sm:-mx-6 lg:-mx-8 ">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 ">
                <div class="h-[400px] border md:rounded-lg relative">
                    <div class="absolute w-full h-full bg-gray-800/80" v-if="working">
                        <Spinner class="absolute inset-y-1/2"></Spinner>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 scale-x-[1.01]  ">
                        <thead class="main-theme text-white  text-center sticky top-0">
                            <tr>
                              <th scope="col" class=" py-3.5 px-4 text-sm font-normal text-center rtl:text-right ">
                                       No.

                                </th>

                                <th scope="col" class=" py-3.5 px-4 text-sm font-normal text-center rtl:text-right ">
                                       From

                                </th>

                                <th scope="col" class="px-12 py-3.5 text-sm  w-1/5
                                font-normal text-center rtl:text-right ">
                                    Subject
                                </th>
                                <th scope="col" class=" px-4 py-3.5 text-sm font-normal text-center rtl:text-right ">
                                    To
                                </th>

                                <th scope="col" class=" px-4 py-3.5 text-sm font-normal text-center rtl:text-right ">
                                    Date
                                </th>

                            </tr>
                        </thead>
                        <tbody class="divide-y ">
                          <tr v-for="(hit, index) in Hits" :key="index " 
                           @click="() => emit(`OnIdMail`,hit._id)"
                            class="bg-white  hover:bg-gray-200 cursor-pointer">
                              <!-- <router-link class="contents"  :to="{name:ERouterName.VIEWMAIL, params:{ id: hit._id}}" > -->
                                <td class=" px-4 py-4 text-sm font-medium ">
                                    <div>
                                        <p class="  text-sm font-normal text-gray-700 ">{{index + 1  }}</p>
                                    </div>
                                </td>
                                <td class=" px-4 py-4 text-sm font-medium ">
                                    <div>
                                        <p class="  text-sm font-normal text-gray-700 ">{{hit._source.From  }}</p>
                                    </div>
                                </td>
                                <td class="px-auto py-4 text-sm font-medium w-[350px]   text-gray-950">
                                    <div class="  py-1 text-sm font-normal  w-[350px]  truncate
                                      gap-x-2">
                                      {{hit._source.Subject  }}
                                    </div>
                                </td>
                                <td class="px-auto py-4 text-sm font-medium w-[350px]   text-gray-950">
                                    <div class="  py-1 text-sm font-normal  w-[350px]  truncate
                                      gap-x-2">
                                      {{hit._source.To  }}
                                    </div>
                                </td>
          
                                <td class="px-4 py-4 text-sm   text-gray-950">
                                  {{ moment(hit._source.Date).format("DD MMM YYYY")    }}
                                </td>
                                <!-- </router-link> -->
                          </tr>

                          <tr class="bg-white  h-[350px] "  v-if="Hits.length == 0 && !working">
                            <th colspan="6" >
                                No matches found for the query: {{ query }}
                            </th>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div class="text-sm text-gray-500 dark:text-gray-400">
            Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
        </div>

        <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </a>

            <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div> -->
</section>
</template>



<style scoped>

</style>
