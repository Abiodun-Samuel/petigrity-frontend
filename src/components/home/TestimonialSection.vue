<template>
  <div class="testimonials">
    <div class="container">
      <div class="text-center">
        <SubHeader>
          <h2 class="fw-bolder mb-3"><span>Testimonials</span></h2>
        </SubHeader>
        <p>What our clients have to say about us</p>
      </div>

      <div class="row mt-3">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          class="d-flex justify-content-end align-items-center gap-1 my-1"
        >
          <button
            :disabled="Number(currentSlide) == 0"
            class="btn btn-sm btn-primary"
            @click="prev"
          >
            Prev
          </button>
          <button
            class="btn btn-sm btn-primary"
            :disabled="Number(currentSlide) == testimonials.length - 1"
            @click="next"
          >
            Next
          </button>
        </div>
        <carousel
          :breakpoints="breakpoints"
          ref="myCarousel"
          snapAlign="start"
          :autoplay="1"
        >
          <slide v-for="(testimonial, index) in testimonials" :key="index">
            <!-- {{ slide }} -->
            <div
              data-aos="fade-up"
              :data-aos-delay="(index + 1) * 50"
              class="testimonial__box rounded shadow me-2"
            >
              <div class="header px-2 pt-2">
                <Icon
                  icon="fa:quote-left"
                  color="#e6ebfd"
                  width="50"
                  height="50"
                  class="quote-left"
                />
                <p class="text-primary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum minima eveniet architecto voluptate blanditiis quia
                  praesentium laboriosam suscipit maiores nobis magnam non
                  asperiores, illum cumque, laudantium, facilis accusamus.
                  Expedita, ullam.
                </p>
                <div class="ratings">
                  <Icon
                    icon="fa:star"
                    color="#ffcc29"
                    width="15"
                    height="15"
                    v-for="index in 3"
                    :key="index"
                  />
                  <Icon
                    icon="fa:star-half-empty"
                    color="#ffcc29"
                    height="15"
                    width="15"
                  />
                  <Icon
                    icon="fa:star-o"
                    color="#ffcc29"
                    width="15"
                    height="15"
                  />
                </div>
                <Icon
                  icon="fa:quote-right"
                  color="#e6ebfd"
                  width="50"
                  height="50"
                  class="quote-right"
                />
              </div>
              <div class="bottom px-3 pb-2 pt-1 rounded text-center">
                <img
                  src="../../assets/images/img/images.jpg"
                  alt="profile-img"
                  width="150"
                  height="150"
                  class="rounded-circle shadow"
                />
                <p class="my-0 py-0">John Doe</p>
                <p class="my-0 py-0 small">Manager, John Ltd</p>
              </div>
            </div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import SubHeader from "@/components/home/SubHeader.vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const myCarousel = ref(null);
const currentSlide = ref(null);
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1.2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
};
const testimonials = [
  {
    name: "abiodun",
    details: "Banker (Manager)",
    ratings: 4,
    comment: "I love your platform",
  },
  {
    name: "abiodun",
    details: "Banker (Manager)",
    ratings: 4,
    comment: "I love your platform",
  },
  {
    name: "abiodun",
    details: "Banker (Manager)",
    ratings: 4,
    comment: "I love your platform",
  },
];

const next = () => {
  myCarousel.value.next();
  currentSlide.value = myCarousel.value.data.currentSlide.value;
};
const prev = () => {
  myCarousel.value.prev();
  currentSlide.value = myCarousel.value.data.currentSlide.value;
};
</script>

<style lang="css">
.testimonials {
  position: relative;
  padding: 4rem 0;
}
.testimonial__box,
.testimonial__box .bottom,
.testimonial__box .header {
  position: relative;
}
.testimonial__box .bottom {
  background: url("../../assets/images/bg/testimonial-bg.svg");
}
.testimonial__box .bottom img {
  border: 2px solid var(--blue-1);
}
.testimonial__box .bottom p {
  color: rgb(215, 217, 251);
}
.testimonial__box .bottom .small {
  color: rgb(170, 174, 253);
}
.quote-left {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: -1;
}
.quote-right {
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: -1;
}
</style>