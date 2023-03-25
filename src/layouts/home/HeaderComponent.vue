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
            <a
              class="nav-link"
              v-if="show"
              key="on"
              @click="show = false"
              href="JavaScript:Void(0)"
            >
              <span>Services</span> <Icon icon="bx:down-arrow" />
            </a>
            <a
              class="nav-link"
              href="JavaScript:Void(0)"
              v-else
              key="off"
              @click="show = true"
            >
              <span>Services</span> <Icon icon="bx:right-arrow" />
            </a>
            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div
                class="dropdown__menu shadow-lg"
                v-bind:class="{ active: show }"
                v-if="show"
              >
                <ul class="dropdown__menu-nav">
                  <li class="dropdown__menu-item">
                    <p class="text-primary fw-bolder my-1">Health Insurance</p>
                    <router-link
                      @click="show = false"
                      :to="{ name: 'services' }"
                      class="dropdown__menu-link"
                    >
                      <div class="dropdown__menu-text">
                        <Icon class="me-1" icon="bx:right-arrow-circle" />
                        Professional Impartial Advice
                      </div>
                    </router-link>
                    <router-link
                      @click="show = false"
                      :to="{ name: 'services' }"
                      class="dropdown__menu-link"
                    >
                      <div class="dropdown__menu-text">
                        <Icon class="me-1" icon="bx:right-arrow-circle" />
                        Additional Client Support
                      </div>
                    </router-link>
                    <router-link
                      @click="show = false"
                      :to="{ name: 'services' }"
                      class="dropdown__menu-link"
                    >
                      <div class="dropdown__menu-text">
                        <Icon class="me-1" icon="bx:right-arrow-circle" />
                        Complementary Services
                      </div>
                    </router-link>
                  </li>
                  <li class="dropdown__menu-item">
                    <p class="text-primary fw-bolder my-1">Other Services</p>
                    <router-link
                      @click="show = false"
                      :to="{ name: 'service.training' }"
                      class="dropdown__menu-link"
                    >
                      <div class="dropdown__menu-text">
                        <Icon
                          class="me-1"
                          icon="bx:right-arrow-circle"
                        />Training
                      </div>
                    </router-link>
                    <router-link
                      @click="show = false"
                      :to="{ name: 'service.recruitment' }"
                      class="dropdown__menu-link"
                    >
                      <div class="dropdown__menu-text">
                        <Icon
                          class="me-1"
                          icon="bx:right-arrow-circle"
                        />Recruitment
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </transition>
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
const show = ref(false);
</script>

<style lang="css">
.dropdown__menu {
  top: 100%;
  position: absolute;
  z-index: 10;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  border: 1px solid #ffffff;
  background-clip: padding-box;
}
.dropdown__menu-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: rgb(139, 139, 139);
  padding: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 0 50px 50px 0;
}
.dropdown__menu-link:hover {
  color: var(--blue-1);
  background-color: var(--blue-0);
}

.dropdown__menu-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(31px);
}

.slide-fade-leave-active {
  transform: translateX(-31px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>