import { ResponseHits, Mail, ResponseData } from "@/interfaces/Mail.Interface";
import axios from "axios";


axios.defaults.headers.common['Accept'] = 'application/json';

  export const MailService = {
    async getAllMails(from:number, max:number) {
        return axios
          .get(`${process.env.VUE_APP_URL_CHI}/mails/from-${from}-max-${max}`)
    },

    async getMail(id:string) {
        return axios
          .get<ResponseData<Mail>>(`${process.env.VUE_APP_URL_CHI}/mails/${id}`)
    },

    async findMails(terms:string, from:number, max:number) {
        return axios
          .get(`${process.env.VUE_APP_URL_CHI}/mails/from-${from}-max-${max}-terms-${terms.replaceAll(" ","%20")}`)
    },

  };
  export default { MailService };