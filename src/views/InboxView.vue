<template>
  <div class="inbox">
   
    <div class="flex flex-col mt-8   text-center border divide-y  rounded">
      <router-link v-for="(mail, index) in mails" class="hover:bg-gray-300 py-4" :key="index" :to="{name:`inboxV`, params:{ id: mail._id}}" >
        <div class="mail w-100  first:mt-0 last:mb-0 my-4 flex h-full" >  
            <div class="mail_field mail_from basis-1/3 text-gray-400 font-medium truncate text-base">{{mail.From}}</div>
            <div class="mail_field mail_subject  truncate shrink " >{{mail.Subject}}</div>
            <div class="mail_field mail_date basis-1/3 truncate text-base">{{mail.Date}}</div>
        </div>
      </router-link>

    

   
      
    </div>


  </div>
</template>

<script lang="ts">
import {mails} from '..//helpers/MailResponseTestData'

export default {
    data() {
      return {
        mails

      };
    }
  }


</script>