<template>
  <div class="hero__section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-3">
          <div class="hero__box">
            <div class="hero__text">
              <h1 class="fw-bolder">Get the best <span>health</span> plans</h1>
              <div class="my-3">
                <p>
                  We are dedicated to helping you find the best health plan for
                  your specific needs, either as an individual, a business or an
                  organization, Petigrity has got you covered.
                </p>
              </div>
            </div>
            <div class="hero__button mt-2">
              <button
                class="
                  btn btn-primary
                  rounded-pill
                  btn-lg
                  d-flex
                  align-items-center
                "
                @click="openGetStartedModal = true"
              >
                <Icon icon="codicon:debug-start" class="me-1" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-6 my-3">
          <div class="hero__img text-center">
            <img
              src="../../assets/images/hero-img-one.svg"
              alt="hero-image"
              class="hero_img_one shadow"
            />
            <div
              class="hero_img_two shadow-lg rounded d-flex align-items-center"
            >
              <div>
                <img
                  src="../../assets/images/ins.svg"
                  alt="hero image"
                  width="60"
                  height="60"
                  class="rounded-circle shadow"
                />
              </div>
            </div>
            <div
              class="hero_img_three shadow-lg rounded d-flex align-items-center"
            >
              <div>
                <img
                  src="../../assets/images/Insurance-amic.svg"
                  alt="hero image"
                  width="60"
                  height="60"
                  class="rounded-circle shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

<style lang="css" scoped>
.hero__section {
  position: relative;
  padding-top: 5rem;
  /* background-image: linear-gradient(180deg, #e1efff, #ffffff); */
  /* background-color: #fff; */
  /* background-image: linear-gradient(180deg, #e1efff, transparent); */
  background: radial-gradient(at top left, #f9f7ff, transparent),
    radial-gradient(at top right, #f7f8ff, transparent),
    radial-gradient(at bottom left, transparent, #f8f4fd),
    radial-gradient(at bottom right, transparent, #fdfcfe);
  /* background: url("../../assets/images/bg/wave-bg.svg"),
    radial-gradient(at top left, #fff6fd, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #ffecec, transparent); */
  /* background-size: cover;
  background-position: bottom bottom;
  background-repeat: no-repeat; */
}

.hero__text {
  position: relative;
  padding-top: 4rem;
}
.hero__text h1 {
  font-size: 4.6rem;
  position: relative;
}
.hero__text h1 span {
  color: var(--yellow-1);
  position: relative;
}
.hero__text h1 span::after {
  position: absolute;
  content: "";
  color: var(--yellow-1);
  bottom: 0;
  left: 0;
  height: 6px;
  width: 100%;
  background-color: var(--yellow-1);
  border-radius: 50%;
}
.hero__text p {
  font-size: 1.15rem;
  line-height: 1.5;
}
.hero__img {
  position: relative;
}
.hero_img_one {
  max-width: 85%;
  object-fit: contain;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(at top left, #fffdf2, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #ffecec, transparent);
  /* background-image: linear-gradient(180deg, #e1efff, #ffffff); */
  border: 5px solid rgb(255, 255, 255);
}
.hero_img_two {
  object-fit: contain;
  position: absolute;
  top: 0px;
  left: 0px;
  height: auto;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  background-color: #fff;
  border: 1.5px solid var(--yellow-0);
}
.hero_img_two img {
  padding: 2px;
  border: 2px solid var(--yellow-1);
}
.hero_img_three {
  object-fit: contain;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: auto;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  background-color: #fff;
  border: 1.5px solid var(--yellow-0);
}
.hero_img_three img {
  padding: 2px;
  border: 2px solid var(--yellow-1);
}
.hero__button button {
  box-shadow: 0 8px 25px -8px #003bb3;
}
.hero__button button:hover {
  border-color: var(--blue-1) !important;
  background: #fff !important;
  color: var(--blue-1) !important;
  box-shadow: var(--shadow-1) !important;
}
@media screen and (max-width: 768px) {
  .hero__text h1 {
    font-size: 3.7rem;
  }
}
</style>