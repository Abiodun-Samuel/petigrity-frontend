<template>
  <div class="hero__section">
    <div class="base one"></div>
    <div class="base two"></div>
    <div class="base three"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-2">
          <div class="hero__box">
            <div class="hero__text">
              <h1 class="fw-bolder">Get the best <span>health</span> plans</h1>
              <p class="my-2">
                We are dedicated to helping you find the best health plan for
                your specific needs, either as an individual, a business or an
                organization, Petigrity has got you covered.
              </p>
            </div>
            <div class="hero__button mt-2">
              <button
                class="btn btn-primary rounded-pill d-flex align-items-center"
              >
                <Icon icon="codicon:debug-start" /> <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-2">
          <div class="hero__img">
            <img
              src="../../assets/images/img/hero.svg"
              alt="hero-image"
              class="hero__img__one"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="css">
.hero__section {
  position: relative;
  overflow: hidden;
  /* background-color: #fff; */
  /* background-image: radial-gradient(at top left, #fff6fd, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #ffecec, transparent); */
  background-image: linear-gradient(180deg, #e1efff, transparent);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.hero__text {
  position: relative;
  padding-top: 5rem;
}
.hero__text h1 {
  font-size: 4.6rem;
  position: relative;
}
.hero__text h1 span {
  color: var(--blue-1);
  position: relative;
}
.hero__text h1 span::after {
  position: absolute;
  content: "";
  color: var(--blue-1);
  bottom: 0;
  left: 0;
  height: 6px;
  width: 100%;
  background-color: var(--blue-1);
  border-radius: 50%;
}
.hero__text p {
  font-size: 1.15rem;
  line-height: 1.5;
}
/* class="hero__img__one" */
.hero__img {
  position: relative;
}
.hero__img .hero__img__one {
  position: relative;
  max-width: 90%;
}
</style>