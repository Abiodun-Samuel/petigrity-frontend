<template>
  <div class="brands">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">Our <span>Trusted</span> Clients</h2>
      </SubHeader>

      <div class="row">
        <carousel :breakpoints="breakpoints" ref="myCarousel" snapAlign="start">
          <slide v-for="(brands, index) in 10" :key="index">
            <div
              data-aos="fade-up"
              class="rounded"
              :data-aos-delay="(index + 1) * 50"
            >
              <img
                loading="lazy"
                src="../../assets/images/img/doctor.svg"
                width="100"
                alt=""
              />
            </div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
const breakpoints = {
  0: {
    itemsToShow: 2.5,
    snapAlign: "center",
  },
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5.5,
    snapAlign: "start",
  },
};
</script>

<style lang="css" scoped>
.brands {
  position: relative;
  padding-top: 5rem;
}
.brands img {
  filter: grayscale(100%);
}
</style>