import Api from "./Api";

export default {
  SendMail(data) {
    return Api.post(`/contact-mail`, data);
  },
};
