<template>
  <div class="inbox">
   
    <div class="flex flex-col mt-8   text-center border divide-y  rounded">
      <router-link v-for="(hit, index) in Hits" class="hover:bg-gray-300 py-4" :key="index" :to="{name:`inboxV`, params:{ id: hit._id}}" >
        <div class="hit w-100  first:mt-0 last:mb-0 my-4 flex w-full h-full" >  
            <div class="mail_field mail_from basis-1/3 text-gray-400 font-medium truncate text-base">{{hit._source.From}}</div>
            <div class="mail_field mail_subject  truncate shrink " >{{hit._source.Subject}}</div>
            <div class="mail_field mail_date basis-1/3 truncate text-base">{{hit._source.Date}}</div>
        </div>
      </router-link>   
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { MailService } from '@/services/mail.service';
import { Hit } from '@/interfaces/Mail.Interface';


export default defineComponent({
  data() {
    return {
      Hits: [] as Hit[], // Declara una variable para almacenar los correos
    };
  },

  methods:{
    getMails(from:number,max:number){
       MailService.getAllMails(from,max).then((response) => {
        return (response.data.data.hits as Hit[])  
      })
      .then( hits => this.Hits= hits )
      .catch((error) => {
        console.error('Error al obtener los correos:', error);
      });
    }
  },

  mounted() {
    this.getMails(0,100)
  },

});

</script>