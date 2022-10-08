<template>
  <div class="brands">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="fw-bolder text-center">
            Our <span>Trusted</span> Clients
          </h2>
          <div
            class="
              brand__box
              d-flex
              gap-1
              justify-content-between
              align-items-center
              my-2
              flex-wrap
            "
          >
            <div v-for="value in 4" :key="value" class="shadow rounded">
              <img
                src="../../assets/images/img/doctor.svg"
                width="100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.brands {
  position: relative;
  padding-top: 4rem;
}
.brands h2 span {
  position: relative;
  color: var(--yellow-1);
}
/* .brands h2 span::before {
  content: "";
  background: var(--yellow-1);
  height: 2.5px;
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
} */
</style>