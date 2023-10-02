
<script setup lang="ts">



import { SubMail } from '@/interfaces/Mail.Interface';
import { defineProps, ref,onBeforeMount ,watch} from 'vue';
import moment from 'moment'

const props = defineProps<
    {
      mailData:SubMail
    }
  >()


  const overlayPanel = ref();
  const ToFieldZip = ref([] as string[][])
  const bccFieldZip = ref([] as string[][])
  const mail = ref(props.mailData)

const zip = (a:string[], b:string[]) => {
      if(a.length == b.length){
        return a.map((k, i) => [k, b[i]])
      }
      return []
};

const toggle = (event) => {
  overlayPanel.value.toggle(event);
}

onBeforeMount(() => {
 
})

watch(() => props.mailData, (newValue) =>{
  console.log("entro",newValue)
  mail.value = newValue
  if(mail.value.To && mail.value.X_To){
    ToFieldZip.value = zip(mail.value.To?.split(','),mail.value.X_To.split('>,') )
  }
})

</script>


<template>
  
  <section class="header my-2" v-if="mail">
      <h1 class="truncate">
        {{mail.Subject}}
      </h1>
      <div class="flex justify-between items-center mt-2 ">
        <div class="truncate">
          <span class="font-semibold">{{mail.From}}. </span> 
          <span class="text-gray-500 font text-xs ">{{ mail.X_From }}</span>
        </div>
        <div class="text-gray-600 text-sm text-center">
          {{ moment(mail.Date).format("DD MMM YYYY, HH:MM:SS A") }}
        </div>
      </div>  
      <div class="text-gray-500 text-sm flex items-center gap-2 ">
        <div class="truncate">
          To {{ mail.To }}
        </div>
        <i class="fa fa-angle-down hover:text-gray-800 hover:scale-110 cursor-pointer" aria-hidden="true"  @click="toggle"></i>
        <OverlayPanel  ref="overlayPanel" class="w-2/5 h-4/5 overflow-auto">
               
          <div class="details">
            <span class="details_data">{{mail.Message_ID}}</span>
          </div>
          <section class="details_container grid grid-cols-[span 1 / 1fr] grid-flow-row-dense gap-y-2 gap-x-3 whitespace-break-spaces break-before-all"
          >
            <div class="details" v-if="mail.From">
              <span class="details_field">From:</span>
              <span class="details_data font-semibold">
                {{mail.From}} 
                 <span class="text-gray-500 font-normal text-sm">{{mail.X_From}}</span>
              </span>
            </div>

            <div class="details" v-if="mail.To || mail.X_To">
              <span class="details_field">To:</span>
              <span class="details_data" >
                <span v-if="ToFieldZip.length == 0">
                  {{mail.To}}
                  <span class="text-gray-500 font-normal text-sm">{{mail.X_To}}</span>
                </span>
                <span v-else v-for="(To,index) in ToFieldZip">
                  {{To[0]}}
                  <span class="text-gray-500 font-normal text-sm">{{To[1]}}</span>
                </span>
              </span>
            
   
            </div>
       
            <div class="details" v-if="mail.Date">
              <span class="details_field">Date:</span>
              <span class="details_data">{{moment(mail.Date).format("DD MMM YYYY, HH:MM:SS A")}}</span>
            </div>
        
            <div class="details" v-if="mail.Subject">
              <span class="details_field">Subject:</span>
              <span class="details_data">{{mail.Subject}}</span>
            </div>
            <div class="details" v-if="mail.Bcc">
              <span class="details_field">BCC:</span>
              <span class="details_data">
                {{mail.Bcc}}
                <span class="text-gray-500 font-normal text-sm">{{mail.X_bcc}}</span>
              </span>
            </div>
            <div class="details" v-if="mail.Cc">
              <span class="details_field">CC:</span>
              <span class="details_data">
                {{mail.Cc}}
                <span class="text-gray-500 font-normal text-sm">{{mail.X_cc}}</span>
              </span>
            </div>
      
   
            <div class="details" v-if="mail.X_FileName">
              <span class="details_field">FileName:</span>
              <span class="details_data">{{mail.X_FileName}}</span>
            </div>
            <div class="details" v-if="mail.X_Folder">
              <span class="details_field">Folder:</span>
              <span class="details_data">{{mail.X_Folder}}</span>
            </div>
        
          </section>  
           
        </OverlayPanel>
      </div>  
    </section>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.details{
  display: contents;
}
.details_field{
  grid-column-start: 1 ;
  grid-row: span 1;
  color:gray;
  text-align: right;
}
.details_data{
  grid-column-start: 2 ;
  grid-row: span 1;
  word-wrap: break-word;
  color:black
}


</style>
