

<script setup lang="ts">

import { onMounted,ref } from 'vue';
import { Mail } from '@/interfaces/Mail.Interface';
import { MailService } from '@/services/mail.service';

var mailData = ref({} as Mail)

const props = defineProps<{
  id:string,
  mailData:Mail
}>()


onMounted(() => {
  
    MailService.getMail(props.id)
    .then( res => res.data.data)
    .then( mail =>mailData.value = mail )
    .catch(console.log)
})


</script>

<template>
  <div class="">
  
    <div class="border-1 shadow-2xl mt-5">
      <section class="divide-y  border-b 
        [&>div>span:nth-child(2)]:break-all
      [&>div>span:nth-child(1)]:text-blue-900">
        <div>
          <span class="mail_field" >
            ID:
          </span>
          <span class="mail_field_data">{{mailData.Message_ID}}</span>
        </div>
        <div>
          <span class="mail_field" >From:</span>
          <span class="mail_field_data">{{mailData.From}}</span>
        </div>
        <div>
          <span class="mail_field">To:</span>
          <span class="mail_field_data">{{mailData.To}}</span>
        </div>
        <div>
          <span class="mail_field">Subject:</span>
          <span class="mail_field_data">{{mailData.Subject}}</span>
        </div>
        <div>
          <span class="mail_field">Bcc:</span>
          <span class="mail_field_data">{{mailData.Bcc}}</span>
        </div>
        <div>
          <span class="mail_field">Cc:</span>
          <span class="mail_field_data">{{mailData.Cc}}</span>
        </div>
        <!-- <div><span>Date:</span>{{mailData.Date}}</div>
        <div><span>X_From:</span>{{mailData.X_From}}</div>
        <div><span>X_To:</span>{{mailData.X_To}}</div> -->

        <!-- <div><span>X_FileName:</span>{{mailData.X_FileName}}</div>
      <div><span>X_Folder:</span>{{mailData.X_Folder}}</div>
      <div><span>X_Origin:</span>{{mailData.X_Origin}}</div>
      <div><span>X_bcc:</span>{{mailData.X_bcc}}</div>
      <div><span>X_cc:</span>{{mailData.X_cc}}</div>
      <div><span>_id:</span>{{mailData._id}}</div> -->
      </section>
      
      <div class="">
        <div class="mx-auto my-4 w-8/12 whitespace-pre-wrap" v-html="mailData.Content"> </div>
      </div>


   
    </div>
  </div>
</template>

<style>


</style>