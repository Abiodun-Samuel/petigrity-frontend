import Mail from "@/api/Mail";
import { useToast } from "vue-toastification";
import router from "@/router/index";
const toast = useToast();

export const SendMail = ({ commit }, formData) => {
  commit("SET_MAIL_LOADER", true);
  Mail.SendContactMail(formData)
    .then((res) => {
      commit("SET_MAIL_LOADER", false);
      toast.success("Message has been sent successfully.");
    })
    .catch((error) => {
      commit("SET_MAIL_LOADER", false);
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        error.response.status;
      }
    });
};

export const SubscribeMailAction = ({ commit }, formData) => {
  commit("SET_SUBCRIBE_LOADER", true);
  Mail.SendSubscribeMail(formData)
    .then((res) => {
      commit("SET_SUBCRIBE_LOADER", false);
      toast.success("Your email has added to our mailing list successfully.");
    })
    .catch((error) => {
      commit("SET_SUBCRIBE_LOADER", false);
      toast.error("Error, something went wrong.");
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        error.response.status;
      }
    });
};
