<template>
  <div class="patronage">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">Why <span>Choose</span> Us</h2>
      </SubHeader>

      <div class="row">
        <div data-aos="fade-up" data-aos-delay="50" class="col-lg-5 my-2">
          <div class="patronage_img">
            <img
              src="../../assets/images/img/choose.svg"
              alt="patronage image"
              class="img-fluid w-75 rounded shadow"
            />
          </div>
        </div>

        <div class="col-lg-7 my-2">
          <div class="row">
            <div data-aos="fade-up" data-aos-delay="100" class="col-6 my-2">
              <Icon
                class="about__pointer"
                icon="codicon:debug-breakpoint-data"
                height="30"
              />
              <p class="">
                At Petigrity Konsult, we have partnered with various health
                insurers to provide solutions that are specifically tailored to
                every client's specific need.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="150" class="col-6 my-2">
              <Icon
                class="about__pointer"
                icon="codicon:debug-breakpoint-data"
                height="30"
              />
              <p class="">
                Petigrity Konsult is powered by the expertise of our managing
                partners who have health insurance management experience of at
                least 10 years.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" class="col-6 my-2">
              <Icon
                class="about__pointer"
                icon="codicon:debug-breakpoint-data"
                height="30"
              />
              <p class="">
                We make sure to understand the market and our client's business
                industry. With our years of experience, we have acquired a vast
                pool of resources and information from which we draw our ideas.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" class="col-6 my-2">
              <Icon
                class="about__pointer"
                icon="codicon:debug-breakpoint-data"
                height="30"
              />
              <p class="">
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
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { Icon } from "@iconify/vue";
</script>

<style lang="css">
.patronage {
  position: relative;
  padding-top: 5rem;
}
@media screen and (max-width: 768px) {
  .patronage_img img {
    width: 100% !important;
  }
}
</style>