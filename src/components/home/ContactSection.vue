<template>
  <div id="contact">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-lg-12">
          <div
            data-aos="fade-up"
            class="contact__box text-center py-3 px-2 rounded shadow-lg"
          >
            <p class="text-white fw-bold lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              perspiciatis.
            </p>
            <router-link
              class="btn btn-lg my-1 btn-outline-light rounded"
              :to="{ name: 'contact' }"
              >Contact Us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="css" scoped>
#contact {
  padding: 3rem 0;
}
.contact__box {
  background: url("../../assets/images/bg/contact-bg.jpg") no-repeat;
  background-size: cover;
}
</style>