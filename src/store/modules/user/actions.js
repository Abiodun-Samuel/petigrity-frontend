import User from "@/api/User";
import router from "@/router/index";

import { useToast } from "vue-toastification";

const toast = useToast();

export const ProfileAction = ({ commit }) => {
  commit("SET_PROFILE_LOADER", true);
  User.ProfileApi()
    .then((res) => {
      // console.log(res);
      commit("SET_PROFILE", res.data.data);
      commit("SET_PROFILE_STATUS", true);
      commit("SET_PROFILE_LOADER", false);
      router.push({ name: "home" });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_PROFILE", null);
      commit("SET_PROFILE_STATUS", false);
      commit("SET_PROFILE_LOADER", false);
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        return error.response.status;
      }
    });
};