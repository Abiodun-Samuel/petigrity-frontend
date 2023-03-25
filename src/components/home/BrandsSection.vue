<template>
  <div class="brands">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Our <span>Trusted</span> Clients</h2>
      </SubHeader>

      <div class="row">
        <carousel
          :breakpoints="breakpoints"
          ref="myCarousel"
          snapAlign="start"
          autoplay="2000"
          wrapAround="true"
        >
          <slide v-for="(brand, index) in brands" :key="index">
            <img
              data-aos="fade-up"
              :data-aos-delay="index * 50"
              loading="lazy"
              :src="getImgUrl(brand.file)"
              alt="brands"
              class="me-1 bg-white rounded shadow"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { Carousel, Slide } from "vue3-carousel";
import { brands, breakpoints } from "@/utils/helper";

const getImgUrl = (img) => {
  var images = require.context("../../assets/images/clients/", false);
  return images("./" + img);
};
</script>

<style lang="css" scoped>
.brands {
  position: relative;
  padding: 4rem 0;
  background: var(--blue-0);
}
.brands img {
  /* filter: grayscale(100%); */
  width: 150px;
  height: 150px;
  object-fit: contain;
  padding: 6px;
}
</style>