import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Toast from "vue-toastification";

// import assets
import "vue-toastification/dist/index.css";
import "./assets/css/nprogress.css";
import "aos/dist/aos.css";

import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Toast, {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
  })
  .mount("#app");
