<template>
  <div class="mb-5">
    <PageHeader page_header="Services" />
  </div>

  <div class="service">
    <div class="container">
      <div class="row">
        <div
          data-aos-delay="50"
          data-aos="fade-up"
          class="col-lg-4 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/insurance.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">
              <!-- Professional Impartial Advice -->
              Health Insurance
            </h4>
            <p>
              We make impartial recommendations based on you, or your business’s
              health insurance needs, and leverage our strong partnerships with
              insurers to negotiate the best premiums.
            </p>
            <div class="">
              <router-link
                class="btn btn-outline-primary rounded-pill"
                :to="{ name: 'service.health' }"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div
          data-aos-delay="100"
          data-aos="fade-up"
          class="col-lg-4 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/training.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Training</h4>
            <p>
              Doloremque laboriosam maiores, harum asperiores eveniet numquam
              suscipit aspernatur quibusdam? Odit iste fugit possimus.
            </p>
            <div class="">
              <router-link
                class="btn btn-outline-primary rounded-pill"
                :to="{ name: 'service.training' }"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div
          data-aos-delay="150"
          data-aos="fade-up"
          class="col-lg-4 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/recruitment.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Recruitment</h4>
            <p class="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit
              enim deserunt, culpa saepe iure nam a vel eos. Pariatur maxime
              assumenda praesentium obcaecati non?
            </p>
            <div class="">
              <router-link
                class="btn btn-outline-primary rounded-pill"
                :to="{ name: 'service.recruitment' }"
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
import PageHeader from "@/components/pages/PageHeader.vue";
</script>

<style lang="css">
</style>