import { createLogger, createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import authStore from "@/store/modules/auth";
import userStore from "@/store/modules/user";
import othersStore from "@/store/modules/others";

let ls = new SecureLS({
  encodingType: "aes",
  isCompression: false,
  encryptionSecret: process.env.VUE_APP_SECURE_LS_KEY_LOCAL,
});

const debug = process.env.NODE_ENV !== "production";
const dataState = createPersistedState({
  // paths: ["authStore.token", "userStore.profile", "teamStore.teams"],
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
});

export const store = createStore({
  modules: {
    authStore,
    userStore,
    othersStore,
  },
  plugins: debug ? [createLogger(), dataState] : [dataState],
});
