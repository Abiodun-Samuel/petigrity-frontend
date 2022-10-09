<template>
  <div class="brands">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="sub__header text-center">
            <h2 data-aos="fade-up" class="fw-bolder mb-2">
              Our <span>Trusted</span> Clients
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
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
  padding-top: 5rem;
}
.sub__header h2 {
  position: relative;
}
.sub__header h2 span {
  position: relative;
  color: var(--yellow-1);
}
</style>