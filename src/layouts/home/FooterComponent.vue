<template>
  <NewsletterSection />

  <div id="footer">
    <div class="container">
      <!-- <hr class="text-light" /> -->

      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5">
          <div
            class="
              quick__links
              d-flex
              align-items-center
              justify-content-evenly
            "
          >
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
            <router-link :to="{ name: 'service' }">Services</router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </div>
        </div>
      </div>

      <hr class="text-light" />

      <div class="row">
        <div class="col-lg-12 text-center text-light">
          <span class="small">
            Copyright &copy; {{ year }} Petigrity, All Rights Reserved.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsletterSection from "@/components/home/NewletterSection.vue";
const year = new Date().getFullYear();
</script>

<style lang="css">
#footer {
  background: url("../../assets/images/bg/footer-bg.svg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5rem 0 2rem 0;
}
.quick__links {
  position: relative;
}
.quick__links a {
  position: relative;
  padding: 0 0.5rem;
  /* border-right: 1.5px solid var(--blue-0); */
  color: rgb(208, 208, 208);
}
</style>