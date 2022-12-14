import Mail from "@/api/Mail";
import { useToast } from "vue-toastification";
const toast = useToast();

export const SendMail = ({ commit }, formData) => {
  commit("SET_MAIL_LOADER", true);
  return Mail.SendContactMail(formData)
    .then((res) => {
      commit("SET_MAIL_LOADER", false);
      toast.success("Message has been sent successfully.");
      return true;
    })
    .catch((error) => {
      commit("SET_MAIL_LOADER", false);
      toast.error("Error, something went wrong.");
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        error.response.status;
      }
      return false;
    });
};

export const SubscribeMailAction = ({ commit }, formData) => {
  commit("SET_SUBCRIBE_LOADER", true);
  return Mail.SendSubscribeMail(formData)
    .then((res) => {
      commit("SET_SUBCRIBE_LOADER", false);
      toast.success("Your email has added to our mailing list successfully.");
      return true;
    })
    .catch((error) => {
      commit("SET_SUBCRIBE_LOADER", false);
      toast.error("Error, something went wrong.");
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        error.response.status;
      }
      return false;
    });
};
export const GetStatedAction = ({ commit }, formData) => {
  commit("SET_GETSTATED_LOADER", true);
  return Mail.GetStatedApi(formData)
    .then((res) => {
      commit("SET_GETSTATED_LOADER", false);
      toast.success(
        "Your details have been submitted successfully, we will get back to you shortly."
      );
      return true;
    })
    .catch((error) => {
      commit("SET_GETSTATED_LOADER", false);
      toast.error("Error, something went wrong.");
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        error.response.status;
      }
      return false;
    });
};
