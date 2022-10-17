import Api from "./Api";

export default {
  SendContactMail(data) {
    return Api.post(`/contact-mail`, data);
  },
  SendSubscribeMail(data) {
    return Api.post(`/subscribe`, data);
  },
};
