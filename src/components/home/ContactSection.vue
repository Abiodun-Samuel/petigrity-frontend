<template>
  <div id="contact">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-lg-12">
          <div
            data-aos="fade-up"
            class="contact__box text-center p-3 rounded shadow-lg"
          >
            <h3 class="text-white fw-bolder">Get in Touch</h3>
            <router-link
              class="btn btn-lg my-2 btn-outline-light rounded"
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