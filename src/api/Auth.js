import Api from "./Api";
const END_POINT = "/user";

export default {
  LoginApi(data) {
    return Api.post(`${END_POINT}/login`, data);
  },

  RegisterApi(data) {
    return Api.post(`${END_POINT}/register`, data);
  },

  VerifyOtpApi(data) {
    return Api.post(`${END_POINT}/verify-otp`, data);
  },

  ResendOtpApi(data) {
    return Api.post(`${END_POINT}/generate-otp`, data);
  },

  LogoutApi() {
    return Api.post(`${END_POINT}/logout`);
  },
};
