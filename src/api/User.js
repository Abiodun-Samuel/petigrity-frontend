import Api from "./Api";
const END_POINT = "/user";

export default {
  ProfileApi() {
    return Api.get(`${END_POINT}/profile`);
  },
};
