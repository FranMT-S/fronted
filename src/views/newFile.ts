import { MailService } from '../services/mail.service';

export default (await import('vue')).defineComponent({
data() {
const Hits = null;
const total = 0;
const max = 100;
const page = 1;
return { Hits, total, max, page };
},


beforeMount() {
MailService.getAllMails(0, 100).then(res => {
this.Hits = res.data.data;
});
},
});
