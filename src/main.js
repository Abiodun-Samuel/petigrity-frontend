import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Toast from "vue-toastification";
import AOS from "aos";
import Donut from "vue-css-donut-chart";

// import assets
import "vue-css-donut-chart/dist/vcdonut.css";
import "vue-toastification/dist/index.css";
import "./assets/css/nprogress.css";
import "aos/dist/aos.css";

import "bootstrap/dist/js/bootstrap.js";

AOS.init({ duration: 400, mirror: true });

const app = createApp(App)
  .use(store)
  .use(Donut)
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
