import axios from "axios";
import NProgress from "nprogress";
import { store } from "../store/index";

let theBaseUrl = "";
if (process.env.NODE_ENV == "development") {
  theBaseUrl = process.env.VUE_APP_API_LOCAL;
} else {
  theBaseUrl = process.env.VUE_APP_API_LIVE;
}

const Api = axios.create({
  baseURL: theBaseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "true",
  },
});

const progressFns = () => {
  let progressTimeout,
    count = 0;

  const start = () => {
    count++;

    progressTimeout = setTimeout(() => {
      NProgress.start();
    }, 200);
  };

  const stop = () => {
    count = Math.max(0, count - 1);
    if (count > 0) return;

    NProgress.done();
    clearTimeout(progressTimeout);
  };
  return { start, stop };
};

const { start: progressStart, stop: progressStop } = progressFns();

Api.interceptors.request.use(
  async (config) => {
    let hasToken = await store.getters["authStore/token"];
    if (hasToken) {
      config.headers["Authorization"] = `Bearer ${hasToken}`;
    }
    if (!config.__noProgress) progressStart();

    return config;
  },
  (error) => {
    progressStop();
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    if (!response.config.__noProgress) progressStop();
    return response;
  },
  (error) => {
    progressStop();
    // console.log("error from axios: ", error.response.statusText);
    return Promise.reject(error);
  }
);

export default Api;
