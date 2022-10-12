<template>
  <div id="contact">
    <div class="container">
      <!-- <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2"><span>Contact</span> Us</h2>
      </SubHeader> -->

      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-lg-12">
          <div class="contact__box text-center p-3 rounded shadow-lg">
            <!-- <SubHeader data-aos="fade-up">
              <h2 class="h3 fw-bolder text-white mb-1">
                Get in <span>touch</span>
              </h2>
            </SubHeader> -->
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
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css" scoped>
.contact__box {
  background: url("../../assets/images/bg/contact-bg.jpg") no-repeat;
  /* background-position: center; */
  background-size: cover;
}
</style>