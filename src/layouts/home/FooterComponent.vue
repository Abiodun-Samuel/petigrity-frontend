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
              mb-1
            "
          >
            <a href="" target="_blank">
              <Icon icon="brandico:facebook-rect" />
            </a>
            <a href="" target="_blank">
              <Icon icon="fa6-brands:square-twitter" />
            </a>
            <a href="https://www.instagram.com/petigrity/" target="_blank">
              <Icon icon="akar-icons:instagram-fill" />
            </a>
            <a
              href="https://www.linkedin.com/company/petigrity/"
              target="_blank"
            >
              <Icon icon="akar-icons:linkedin-box-fill" />
            </a>
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
            <router-link :to="{ name: 'services' }">Services</router-link>
            <router-link :to="{ name: 'contact' }">Contact Us</router-link>
          </div>
        </div>
      </div>

      <hr class="text-light" />

      <div class="row">
        <div class="col-lg-12 text-center text-light footer__bottom">
          <p class="small my-0 py-0">
            Copyright &copy; {{ year }} Petigrity Konsult. All rights reserved.
          </p>
          <small class="small">
            Designed and Developed by
            <a
              class="fw-bolder"
              target="_blank"
              href="https://abiodunsamuel.com/"
              >Abiodun Digital Hub</a
            >
          </small>
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
  padding: 2px 5px;
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
  padding: 2px 5px;
  border-radius: 5px;
}
.quick__icons a:hover {
  background: var(--blue-0);
  color: var(--blue-1);
}
.footer__bottom small {
  color: #818fc1;
}
.footer__bottom small a {
  color: #677abd;
}
</style>