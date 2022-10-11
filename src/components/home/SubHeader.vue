<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="sub__header d-flex justify-content-center align-items-center">
        <slot />
        <!-- <h2 class="fw-bolder mb-2">Our <span>Trusted</span> Clients</h2> -->
      </div>
    </div>
  </div>
</template>

<style lang="css">
.sub__header {
  position: relative;
}
.sub__header h2 {
  position: relative;
}
.sub__header h2::before {
  content: "";
  position: absolute;
  background: rgb(222, 222, 222);
  width: 100%;
  bottom: -6.5px;
  left: 0;
  height: 1.5px;
  border-radius: 4px;
}
.sub__header h2::after {
  position: absolute;
  content: "";
  background: var(--yellow-1);
  width: 40px;
  bottom: -6.5px;
  left: 35%;
  height: 3px;
  border-radius: 4px;
}
.sub__header h2 span {
  position: relative;
  color: var(--yellow-1);
}
</style>