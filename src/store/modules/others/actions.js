import Others from "@/api/Others";
import { useToast } from "vue-toastification";
import router from "@/router/index";
const toast = useToast();

export const SendMail = ({ commit }, formData) => {
  commit("SET_MAIL_LOADER", true);
  Others.SendMail(formData)
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
