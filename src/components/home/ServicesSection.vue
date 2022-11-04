<template>
  <section id="services">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">What <span>We</span> Do</h2>
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
              src="../../assets/images/icons/svg/general.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Complementary Services</h4>
            <p>
              We also offer a wide range of complementary services such as
              claims processing assistance, current plan review, renewal, and
              many more, all at no additional cost.
            </p>
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
  padding: 4rem 0;
}
.service__box {
  position: relative;
}
.service__details {
  transition: 500ms;
}
.service__details:hover {
  box-shadow: var(--shadow-1);
  /* background: radial-gradient(at top left, #fffbfe, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #fff8f8, transparent); */
}
</style>