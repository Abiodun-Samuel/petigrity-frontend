<template>
  <router-view />
</template>

<style lang="css">
:root {
  --light-1: #f4f8f1;
  --light-0: #fefefe;

  --yellow-1: #ffcc29;

  --black-1: #201e1e;

  --blue-1: #193bb5;
  --blue-0: #e6ebfd;

  --shadow-1: 0px 2px 15px rgba(0, 0, 0, 0.1);
  --shadow-2: 5px 5px 11px #ebebeb, -5px -5px 11px #fff;
  --shadow-3: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
}

button:disabled,
button[disabled] {
  border: 1px solid #d8d8d8 !important;
  background: #d8d8d8 !important;
  color: #666666 !important;
}
</style>
