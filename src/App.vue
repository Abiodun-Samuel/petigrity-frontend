<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // <!--Start of Tawk.to Script-->
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/634d20cbb0d6371309c9e926/1gfikg73b";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
  // <!--End of Tawk.to Script-->
});
</script>


<style lang="css">
:root {
  --light-1: #f4f8f1;
  --light-0: #fefefe;

  --yellow-1: #ffcc29;
  --yellow-0: #fdf0c6;

  --black-1: #201e1e;

  --blue-1: #193bb5;
  --blue-0: #e6ebfd;

  --shadow-1: 0px 2px 15px rgba(0, 0, 0, 0.1);
  --shadow-2: 5px 5px 11px #ebebeb, -5px -5px 11px #fff;
}

button:disabled,
button[disabled] {
  z-index: 1000 !important;
  background: #d8d8d8 !important;
  border: 1px solid #d8d8d8 !important;
  color: #666666 !important;
  cursor: not-allowed !important;
}
</style>
