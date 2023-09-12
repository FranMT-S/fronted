import { ResponnseHits, Mail, ResponseData } from "@/interfaces/Mail.Interface";
import axios from "axios";


axios.defaults.headers.common['Accept'] = 'application/json';

  export const MailService = {
    getAllMails(from:number, max:number) {
        console.log(`${process.env.URL_CHI}`)
        return axios
          .get(`${process.env.VUE_APP_URL_CHI}/mails/all-sumary/from-${from}-max-${max}`)
    },

    getMail(id:string) {
        return axios
          .get<ResponseData<Mail>>(`${process.env.URL_CHI}/mails/mail/${id}`)
    },

    findMails(terms:string, from:number, max:number) {
        return axios
          .post(`${process.env.URL_CHI}/mails/find-mails`,
            `{
            "Terms":"${terms}",
            "From":${from},
            "Max":${max}
            }`
          )
    },

  };
  export default { MailService };