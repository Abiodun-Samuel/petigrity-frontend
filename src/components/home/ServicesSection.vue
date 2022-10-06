<template>
  <section id="services" ref="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-2">
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
                <p class="m-0 p-0">
                  At Petigrity Konsult, our responsibility is to provide clients
                  with the most appropriate health insurance policy. Authorized
                  by specific insurance companies to act on their behalf.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="100"
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
                  As a health insurance broker, we act in the best interest of
                  our clients, helping them to compare and secure coverage based
                  on their needs and budgets.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="150"
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
                  Whatever the size of your business, Petigrity can help you
                  secure a plan which will provide valuable and high quality
                  cover to your employees. This will mean less work days lost to
                  sickness and overall a more productive workforce.
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
        <div class="col-lg-6 my-2">
          <div data-aos="fade-left" class="service__img text-center">
            <img
              src="../../assets/images/img/service.svg"
              alt="service image"
              class="rounded w-75 shadow"
            />
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