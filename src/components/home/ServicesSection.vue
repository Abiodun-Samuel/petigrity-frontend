<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="sub__header text-center">
            <h2 data-aos="fade-up" class="fw-bolder mb-2">
              Our <span>Services</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
          <div class="service__details text-center p-1 shadow rounded">
            <img
              src="../../assets/images/icons/advice.png"
              width="50"
              alt="service section icon"
              class="my-1 shadow rounded-circle"
            />
            <h4 class="fw-bolder text-primary my-1">
              Professional Impartial Advice
            </h4>
            <p>
              We make impartial recommendations based on you, or your business’s
              health insurance needs, and leverage our strong partnerships with
              insurers to negotiate the best premiums.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
          <div class="service__details text-center p-1 shadow rounded">
            <img
              src="../../assets/images/icons/support.png"
              width="50"
              alt="service section icon"
              class="my-1 shadow rounded-circle"
            />
            <h4 class="fw-bolder text-primary my-1">
              Additional Client Support
            </h4>
            <p>
              Improved customer service and additional customer support, smooth
              policy buying and transitioning process from one HMO to another.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
          <div class="service__details text-center p-1 shadow rounded">
            <img
              src="../../assets/images/icons/hospital.png"
              width="50"
              alt="service section icon"
              class="my-1 shadow rounded-circle"
            />
            <p class="my-1">
              We also offer a wide range of additional, complementary services
              such as claims processing assistance, current plan review,
              renewal, and many more, all at no additional cost.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="service__btn rounded shadow w-100 p-2"
          >
            <router-link class="btn btn-lg btn-primary rounded-pill" :to="{}"
              >Read More</router-link
            >
          </div>
        </div>
        <!-- <div class="col-lg-6 my-2 order-lg-2">
          <div data-aos="fade-up" class="text-lg-end">
            <img
              src="../../assets/images/img/service.svg"
              alt="service image"
              class="img-fluid shadow rounded"
            />
          </div>
        </div> -->
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
  padding-top: 5rem;
}
.service__box {
  position: relative;
}
.sub__header h2 {
  position: relative;
}
.sub__header h2 span {
  position: relative;
  color: var(--yellow-1);
}
.service__btn {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/images/img/service.svg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>