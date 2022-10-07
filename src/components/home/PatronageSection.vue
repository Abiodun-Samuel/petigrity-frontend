<template>
  <div class="patronage">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div data-aos="fade-right" class="patronage_img text-center">
            <img
              src="../../assets/images/img/choose.svg"
              alt="patronage image"
              class="img-fluid w-75 rounded shadow"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="patronage__details px-2 py-1">
            <h2 data-aos="fade-left" class="fw-bolder text-primary mb-2">
              Why Choose Us
            </h2>

            <div
              data-aos="fade-left"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-data"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  At Petigrity Konsult, we have partnered with various health
                  insurers to provide solutions that are specifically tailored
                  to every client's specific need.
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
                  icon="codicon:debug-breakpoint-data"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  Petigrity Konsult is powered by the expertise of our managing
                  partners who have health insurance management experience of at
                  least 10 years.
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
                  icon="codicon:debug-breakpoint-data"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  We make sure to understand the market and our client's
                  business industry. With our years of experience, we have
                  acquired a vast pool of resources and information from which
                  we draw our ideas.
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
                  icon="codicon:debug-breakpoint-data"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  We have a pool of experts and consultants with advanced
                  knowledge in their field. We apply a systematic and analytic
                  approach that works.
                </p>
              </div>
            </div>
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
.patronage {
  position: relative;
  padding: 3rem 0;
}

.patronage__details h2 {
  position: relative;
  font-size: 3.5rem;
  -webkit-text-size-adjust: auto;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--blue-1);
}
</style>