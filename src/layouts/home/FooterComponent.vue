<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-2">
          <div class="company__info">
            <img
              src="../../assets/images/logo/logo-sm.png"
              alt="company logo"
              class="img-fluid"
            />
            <p class="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus odio nam quidem minus fugiat sequi ipsam tenetur quos
              ratione veniam!
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-2">
          <div class="quick__links">
            <h3 class="fw-bolder mb-2 text-primary">Quick Links</h3>
            <p class="my-1 mx-0 text-primary">
              <Icon icon="iconoir:3d-select-point" class="me-1" />
              <router-link to>Home</router-link>
            </p>
            <p class="my-1 mx-0 text-primary">
              <Icon icon="iconoir:3d-select-point" class="me-1" />
              <router-link to>About</router-link>
            </p>
            <p class="my-1 mx-0 text-primary">
              <Icon icon="iconoir:3d-select-point" class="me-1" />
              <router-link to>Services</router-link>
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-2">
          <div class="quick__links">
            <h3 class="fw-bolder mb-2 text-primary">
              Subscribe to our newsletter
            </h3>
            <div class="form-group my-2">
              <input
                type="email"
                placeholder="Enter your email"
                class="form-control"
              />
              <button class="btn btn-primary my-1">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="text-dark" />
      <div class="row">
        <div class="col-lg-12 text-center text-dark">
          Copyright &copy; {{ year }} Petigrity All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const year = new Date().getFullYear();
</script>

<style lang="css">
#footer {
  background: var(--black-1);
  padding: 3rem 0;
  margin-top: 2rem;
}
.company__info p {
  color: rgb(143, 143, 143);
}
.quick__links {
  padding: 0 1rem;
  position: relative;
}
.quick__links h3 {
  position: relative;
}
.quick__links h3::before {
  content: "";
  position: absolute;
  background: var(--blue-1);
  bottom: -5px;
  right: 0;
  height: 4px;
  width: 100%;
}
</style>