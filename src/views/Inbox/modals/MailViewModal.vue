

<script setup lang="ts">

import { onMounted,ref,onBeforeMount,watch } from 'vue';

import { VueFinalModal } from 'vue-final-modal'

import { Mail } from '../../../interfaces/Mail.Interface';
import { MailService } from '../../../services/mail.service';

const emit = defineEmits<{
    (e: 'confirm'): void
  }>()

var mailData = ref({} as Mail)

const props = defineProps<{
  id:string
}>()

onBeforeMount( () =>{
  console.log("se monto")
  MailService.getMail(props.id)
    .then( res => res.data.data)
    .then( mail =>mailData.value = mail )
    .catch(console.log)
})


onMounted(() => {
  
})



watch(() => props.id,(newID) =>{
    
    console.log("new id:", newID)
})
  

</script>

<template>

  <VueFinalModal
        class="confirm-modal "
        content-class="confirm-modal-content absolute inset-0 m-auto h-5/6  w-3/6"
        overlay-transition="vfm-fade-up"
        content-transition="vfm-slide-down"
  >
    <div class="border-1  h-full overflow-auto">
    
      <div class="min-h-[85%] p-3 rounded border  border-solid  border-gray-600/20  rounded-3  mt-5">
        <section class="divide-y  border-b 
          [&>div>span:nth-child(2)]:break-all
        [&>div>span:nth-child(1)]:text-blue-900">
          <div class="flex">
            <span class="mail_field" >
              ID:
            </span>
            <span class="mail_field_data">{{mailData.Message_ID}}</span>
          </div>
          <div class="flex">
            <span class="mail_field" >From:</span>
            <span class="mail_field_data">{{mailData.From}}</span>
          </div>
          <div class="flex">
            <span class="mail_field">To:</span>
            <span class="mail_field_data">{{mailData.To}}</span>
          </div>
          <div class="flex">
            <span class="mail_field">Subject:</span>
            <span class="mail_field_data">{{mailData.Subject}}</span>
          </div>
          <div class="flex">
            <span class="mail_field">Bcc:</span>
            <span class="mail_field_data">{{mailData.Bcc}}</span>
          </div>
          <div class="flex">
            <span class="mail_field">Cc:</span>
            <span class="mail_field_data">{{mailData.Cc}}</span>
          </div>
          <div class="flex">
            <span class="mail_field">X-FileName:</span>
            <span class="mail_field_data">{{mailData.X_FileName}}</span>
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
        
        <section class="m-20">
          <div class="mx-auto my-4 w-8/12 whitespace-pre-wrap" v-html="mailData.Content"> </div>
        </section>


  
      
      </div>
      <div class="text-center ">
          <button  @click="emit('confirm')" class="my-5 border border-solid font-semibold 
          text-red-500 border-red-500 shadow px-5 rounded hover:bg-red-500 hover:text-white">
          Exit
         </button>
        </div>
    </div>
  </VueFinalModal>
</template>

<style>

  .mail_field{
    flex-basis:6.0rem;
    text-align:right;
  }

  .mail_field_data{
    margin-left: 0.5rem;
  }

 .confirm-modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
  }
  .confirm-modal-content > * + *{
    margin: 0.5rem 0;
  }
  .confirm-modal-content h1 {
    font-size: 1.375rem;
  }

  .dark .confirm-modal-content {
    background: #000;
  } 

</style>