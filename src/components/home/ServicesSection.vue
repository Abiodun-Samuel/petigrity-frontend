<template>
  <section id="services">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">Our <span>Services</span></h2>
      </SubHeader>

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
                :to="{ name: 'service' }"
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
                :to="{ name: 'service' }"
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
                :to="{ name: 'service' }"
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
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css" scoped>
#services {
  position: relative;
  padding-top: 5rem;
}
.service__box {
  position: relative;
}
.service__details {
  transition: 500ms;
}
.service__details:hover {
  box-shadow: var(--shadow-1);
  background: radial-gradient(at top left, #fff6fd, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #ffecec, transparent);
}
</style>