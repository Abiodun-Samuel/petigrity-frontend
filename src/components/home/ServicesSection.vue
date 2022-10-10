<template>
  <section id="services">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2"><span>Our</span> Services</h2>
      </SubHeader>

      <div class="row">
        <div
          data-aos-delay="50"
          data-aos="fade-up"
          class="col-lg-4 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center p-2 rounded">
            <img
              src="../../assets/images/icons/svg/advice.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">
              Professional Impartial Advice
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
              src="../../assets/images/icons/svg/support.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Additional Client Support</h4>
            <p>
              Improved customer service and additional customer support, smooth
              policy buying and transitioning process from one HMO to another.
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
              src="../../assets/images/icons/svg/general.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <p class="my-1">
              We also offer a wide range of additional, complementary services
              such as claims processing assistance, current plan review,
              renewal, and many more, all at no additional cost.
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
        <!-- <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="col-lg-4 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__btn rounded  w-100 p-2">
            <router-link class="btn btn-lg btn-primary rounded-pill" :to="{}"
              >Read More</router-link
            >
          </div>
        </div> -->
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
</style>