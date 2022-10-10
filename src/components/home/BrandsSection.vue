<template>
  <div class="brands">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">Our <span>Trusted</span> Clients</h2>
      </SubHeader>

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
            <div
              v-for="(value, index) in 5"
              :key="value"
              class="rounded"
              data-aos="fade-up"
              :data-aos-delay="index * 50"
            >
              <img loading='lazy'
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

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css" scoped>
.brands {
  position: relative;
  padding-top: 5rem;
}
</style>