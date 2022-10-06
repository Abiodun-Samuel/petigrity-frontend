<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="about__img text-center">
            <img
              src="../../assets/images/img/about.svg"
              alt="about us page"
              class="img-fluid shadow rounded"
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about__desc px-3 py-1">
            <h2 data-aos="fade-left" class="fw-bolder text-primary mb-2">
              About Us
            </h2>

            <div
              data-aos="fade-left"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="carbon:condition-wait-point"
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
              data-aos="fade-left"
              data-aos-delay="100"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="carbon:condition-wait-point"
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
              data-aos="fade-left"
              data-aos-delay="150"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="carbon:condition-wait-point"
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

            <div data-aos="fade-left" data-aos-delay="200" class="mt-2">
              <router-link class="btn btn-primary" :to="{ name: 'about' }"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { Icon } from "@iconify/vue";
import AOS from "aos";
AOS.init({ duration: 1000 });
</script>

<style lang="css">
#about {
  position: relative;
  padding: 4rem 0;
}
.about__desc h2 {
  position: relative;
  font-size: 3.5rem;
  -webkit-text-size-adjust: auto;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--blue-1);
}
.about__img {
  position: relative;
}
.about__pointer {
  background: var(--blue-0);
  border-radius: 50%;
  padding: 2px;
  color: var(--blue-1);
}
/* .section__btn {
  color: var(--blue-1);
  padding: 0.6rem 1rem;
  transition: 500ms ease;
}
.section__btn:hover {
  background: var(--blue-1);
  color: var(--light-0);
} */
</style>