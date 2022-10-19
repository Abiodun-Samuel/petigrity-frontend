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
          <div class="service__details bg-white text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/training.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Training</h4>
            <p>
              At Petigrity Konsult, we conduct high-impact training programs
              which encompasses a broad range of staff requirements and needs –
              including professional development and industry-relevant subjects
              – while leveraging expertise in business areas including
              negotiation, team building, and leadership
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
          class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details bg-white text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/recruitment.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Recruitment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              exercitationem dolor tenetur maiores ut sed odio non quisquam iure
              in?
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
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css">
.other__service {
  background: var(--blue-0);
  padding: 3.5rem 0;
}
</style>