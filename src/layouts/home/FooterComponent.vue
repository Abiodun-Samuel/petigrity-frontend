<template>
  <NewsletterSection />

  <div id="footer">
    <div class="container">
      <!-- <hr class="text-light" /> -->

      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5">
          <div
            class="
              quick__icons
              d-flex
              align-items-center
              justify-content-evenly
              my-2
            "
          >
            <router-link :to="{}">
              <Icon icon="brandico:facebook-rect" />
            </router-link>
            <router-link :to="{}">
              <Icon icon="fa6-brands:square-twitter" />
            </router-link>
            <router-link :to="{}">
              <Icon icon="akar-icons:instagram-fill" />
            </router-link>
          </div>
          <div
            class="
              quick__links
              d-flex
              align-items-center
              justify-content-evenly
            "
          >
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'about' }">About Us</router-link>
            <router-link :to="{ name: 'service' }">Services</router-link>
            <router-link :to="{ name: 'contact' }">Contact Us</router-link>
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
import { Icon } from "@iconify/vue";
const year = new Date().getFullYear();
</script>

<style lang="css" scoped>
#footer {
  background: url("../../assets/images/bg/footer-bg.svg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5.5rem 0 2rem 0;
}
.quick__links {
  position: relative;
}
.quick__links a {
  position: relative;
  color: rgb(208, 208, 208);
  transition: 400ms;
  padding: 5px 10px;
  border-radius: 5px;
}
.quick__links a:hover {
  background: var(--blue-0);
  color: var(--blue-1);
}

.quick__icons a {
  position: relative;
  color: rgb(208, 208, 208);
  transition: 400ms;
  padding: 5px 10px;
  border-radius: 5px;
}
.quick__icons a:hover {
  background: var(--blue-0);
  color: var(--blue-1);
}
</style>