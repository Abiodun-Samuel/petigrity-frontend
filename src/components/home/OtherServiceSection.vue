<template>
  <div class="other__service">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Other <span>Services</span></h2>
      </SubHeader>

      <div class="row d-flex">
        <div
          data-aos-delay="50"
          data-aos="fade-up"
          class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/training.svg"
              width="100"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Training</h4>
            <p>
              At Petigrity Konsult, we conduct high-impact training programs
              which encompasses a broad range of staff requirements and needs –
              including professional development and industry-relevant
              subjects...
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
          data-aos-delay="100"
          data-aos="fade-up"
          class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/recruitment.svg"
              width="100"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Recruitment</h4>
            <p>
              At Petigrity, our premium recruitment service includes conducting
              the full recruitment cycle for you. From writing the job
              description, all the way to screening, interviewing, and salary
              negations...
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
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css">
.other__service {
  padding: 3.5rem 0;
}
</style>