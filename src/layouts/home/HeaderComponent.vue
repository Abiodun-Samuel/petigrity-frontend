<template>
  <nav class="navbar navbar-expand-lg bg-white shadow fixed-top">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img
          src="../../assets/images/logo/logo-header.png"
          alt="petigrity"
          class="img-fluid"
          width="130"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Icon icon="fe:app-menu" height="30" width="30" color="#193bb5" />
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link class="nav-link" :to="{ name: 'about' }"
              >About Us</router-link
            >
          </li>

          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link class="nav-link" :to="{ name: 'services' }"
              >Services</router-link
            >
          </li>
          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link class="nav-link" :to="{ name: 'contact' }"
              >Contact Us</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a @click.prevent class="nav-link" aria-current="page">
              <button
                @click="openGetStartedModal = true"
                class="btn btn-primary rounded-pill"
              >
                Get Started
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <BaseModal
    data-aos="zoom-in"
    :show="openGetStartedModal"
    :size="'modal-md'"
    @close="openGetStartedModal = false"
  >
    <template #header>
      <h4 class="modal-title text-primary fw-bolder">Get Started</h4>
    </template>

    <template #body>
      <GetStarted @close="openGetStartedModal = false" />
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import BaseModal from "@/components/Base/BaseModal.vue";
import GetStarted from "@/components/partials/GetStarted.vue";

const openGetStartedModal = ref(false);
</script>

<style lang="css">
/* ul.dropdown-menu.show {
  height: 200px !important;
  background: red;
}
a.dropdown-item {
  height: 23px;
} */
</style>