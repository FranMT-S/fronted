import { ResponseHits, Mail, ResponseData, Hit } from "@/interfaces/Mail.Interface";
import axios from "axios";


axios.defaults.headers.common['Accept'] = 'application/json';

  export const MailService = {
    
    async getMail(id:string) {
      return axios
      .get<ResponseData<Mail>>(`${process.env.VUE_APP_URL_CHI}/mails/${id}`)
    },
    
    async getAllMails(from:number, max:number) {
        return axios
          .get<ResponseData<ResponseHits>>(`${process.env.VUE_APP_URL_CHI}/mails/from=${from}&max=${max}`)
    },
    
    async findMails(terms:string, from:number, max:number) {
     
        return axios
          .get<ResponseData<ResponseHits>>(`${process.env.VUE_APP_URL_CHI}/mails/from=${from}&max=${max}&terms=${encodeURIComponent(terms)}`)
    },

  };
  export default { MailService };