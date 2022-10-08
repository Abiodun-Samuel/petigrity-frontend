<template>
  <section id="services" ref="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-2 order-lg-2">
          <div data-aos="fade-left" class="service__img">
            <img
              src="../../assets/images/img/service.svg"
              alt="service image"
              class="rounded w-75 shadow"
            />
          </div>
        </div>
        <div class="col-lg-6 my-2 order-lg-1">
          <div class="service__box px-2 py-1">
            <h2 data-aos="fade-right" class="fw-bolder text-primary mb-2">
              Our Service
            </h2>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-function"
                  height="30"
                />
              </div>
              <div>
                <h4 class="fw-bolder">Professional Impartial Advice</h4>
                <p class="m-0 p-0">
                  We make impartial recommendations based on you, or your
                  business’s health insurance needs, and leverage our strong
                  partnerships with insurers to negotiate the best premiums.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-function"
                  height="30"
                />
              </div>
              <div>
                <h4 class="fw-bolder">Additional Client Support</h4>
                <p class="m-0 p-0">
                  Improved customer service and additional customer support,
                  smooth policy buying and transitioning process from one HMO to
                  another.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-function"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  We also offer a wide range of additional, complementary
                  services such as claims processing assistance, current plan
                  review, renewal, and many more, all at no additional cost.
                </p>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="200" class="mt-2">
              <router-link class="btn btn-primary" :to="{}"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="css">
#services {
  position: relative;
  padding: 3rem 0;
}
.service__box {
  position: relative;
}

.service__box h2 {
  position: relative;
  font-size: 3.5rem;
  -webkit-text-size-adjust: auto;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--blue-1);
}

/* .section__btn {
  background: var(--blue-0);
  color: var(--blue-1);
  padding: 0.6rem 1rem;
  transition: 500ms ease;
}
.section__btn:hover {
  background: var(--blue-1);
  color: var(--light-0);
} */
</style>