import Auth from "@/api/Auth";
import { useToast } from "vue-toastification";
import router from "@/router/index";
const toast = useToast();

export const LoginAction = ({ commit, dispatch }, formData) => {
  commit("SET_AUTH_LOADER", true);
  return Auth.LoginApi(formData)
    .then((res) => {
      commit("SET_TOKEN", res.data.data.token);
      commit("SET_AUTH_STATE", true);
      commit("SET_AUTH_LOADER", false);
      toast.success("Welcome on board");
      return res.status;
    })
    .catch((error) => {
      commit("SET_TOKEN", null);
      commit("SET_AUTH_STATE", false);
      commit("SET_AUTH_LOADER", false);
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
        return error.response.status;
      }
    });
};

export const RegisterAction = ({ commit }, formData) => {
  commit("SET_AUTH_LOADER", true);
  return Auth.RegisterApi(formData)
    .then((res) => {
      // console.log(res.data.data);
      commit("SET_TOKEN", res.data.data.token);
      commit("SET_USER_VERIFICATION", res.data.data);
      commit("SET_AUTH_LOADER", false);
      toast.success("Registration was successful");
      return res.status;
    })
    .catch((error) => {
      commit("SET_AUTH_LOADER", false);
      commit("SET_TOKEN", null);
      commit("SET_USER_VERIFICATION", {});
      // if (error.response.status == 400 || error.response.status == 401) {
      // }
      toast.error(`${error.response.data.message}`);
      return error.response.status;
    });
};

// verify otp
export const VerifyOtpAction = ({ commit }, formData) => {
  commit("SET_AUTH_LOADER", true);
  return Auth.VerifyOtpApi(formData)
    .then((res) => {
      console.log(res);
      commit("SET_AUTH_LOADER", false);
      toast.success(res.data.message);
      return res.status;
    })
    .catch((error) => {
      console.log(error);
      commit("SET_AUTH_LOADER", false);
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
      }
      return error.response.status;
    });
};

export const ResendOtpAction = ({ commit }, formData) => {
  // commit("SET_AUTH_LOADER", true);
  return Auth.ResendOtpApi(formData)
    .then((res) => {
      // console.log(res);
      // commit("SET_AUTH_LOADER", false);
      toast.success(res.data.message);
      return res.status;
    })
    .catch((error) => {
      // console.log(error);
      // commit("SET_AUTH_LOADER", false);
      if (error.response.status == 400 || error.response.status == 401) {
        toast.error(`${error.response.data.message}`);
      }
      return error.response.status;
    });
};

export const LogoutAction = ({ commit }) => {
  commit("SET_AUTH_LOADER", true);
  Auth.LogoutApi()
    .then(() => {
      commit("SET_TOKEN", null);
      commit("SET_AUTH_STATE", false);
      commit("SET_AUTH_LOADER", false);
      commit("userStore/SET_PROFILE_STATUS", false, { root: true });
      commit("userStore/SET_PROFILE", null, { root: true });
      toast.success("Goodbye, Thanks for visiting");
      localStorage.clear();
      sessionStorage.clear();
      router.push({ name: "login" });
    })
    .catch((error) => {
      if (error.response.status === 401 || error.response.status == 422) {
        commit("SET_TOKEN", null);
        commit("SET_AUTH_STATE", false);
        commit("SET_AUTH_LOADER", false);
        commit("userStore/SET_PROFILE_STATUS", false, { root: true });
        commit("userStore/SET_PROFILE", null, { root: true });
        toast.error(`${error.response.data.message}`);
      }
    });
};
