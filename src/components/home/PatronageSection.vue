<template>
  <div class="patronage">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">Why <span>Choose</span> Us</h2>
      </SubHeader>

      <div class="row mt-5">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          class="
            col-lg-3 col-md-4 col-sm-6
            mb-4
            mt-1
            d-flex
            align-items-stretch
          "
        >
          <div class="patronage_box shadow rounded p-2 text-center">
            <div>
              <h3>1</h3>
              <img
                loading="lazy"
                src="../../assets/images/hero-img-one.svg"
                alt="patronage image"
                class="bg-white shadow"
                width="120"
                height="120"
              />
              <p class="mt-1">
                At Petigrity Konsult, we have partnered with various health
                insurers to provide solutions that are specifically tailored to
                every client's specific needs.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="
            col-lg-3 col-md-4 col-sm-6
            mb-4
            mt-1
            d-flex
            align-items-stretch
          "
        >
          <div class="patronage_box shadow rounded p-2 text-center">
            <div>
              <h3>2</h3>
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/expert.svg"
                alt="patronage image"
                class="bg-white shadow"
                width="120"
                height="120"
              />
              <p class="mt-1">
                Petigrity Konsult is powered by the expertise of our managing
                partners who have over 10 years of experience in healthcare
                management.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          class="
            col-lg-3 col-md-4 col-sm-6
            mb-4
            mt-1
            d-flex
            align-items-stretch
          "
        >
          <div class="patronage_box shadow rounded p-2 text-center">
            <div>
              <h3>3</h3>
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/market.svg"
                alt="patronage image"
                class="bg-white shadow"
                width="120"
                height="120"
              />
              <p class="mt-1">
                <!-- We make sure to understand the market and .  -->
                With our years of experience, we have acquired a vast pool of
                resources and information from which we draw our ideas to suit
                our client's business industry.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="
            col-lg-3 col-md-4 col-sm-6
            mb-4
            mt-1
            d-flex
            align-items-stretch
          "
        >
          <div class="patronage_box shadow rounded p-2 text-center">
            <div>
              <h3>4</h3>
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/research_two.svg"
                alt="patronage image"
                class="bg-white shadow"
                width="120"
                height="120"
              />
              <p class="mt-1">
                We have a pool of experts and consultants with advanced
                knowledge in their field. We apply a systematic and analytic
                approach that works.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          class="
            col-lg-3 col-md-4 col-sm-6
            mb-4
            mt-1
            d-flex
            align-items-stretch
          "
        >
          <div class="patronage_box shadow rounded p-2 text-center">
            <div>
              <h3>5</h3>
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/payment.svg"
                alt="patronage image"
                class="bg-white shadow"
                width="120"
                height="120"
              />
              <p class="mt-1">
                Flexible and monthly payments for health Insurance.
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
</script>

<style lang="css" scoped>
.patronage {
  position: relative;
  padding-top: 5rem;
}
.patronage_box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.patronage_box img {
  margin-top: -70px;
  border-radius: 50%;
  border: 2px solid var(--blue-1);
  padding: 4px;
}
.patronage_box h3 {
  position: absolute;
  font-size: 10rem;
  z-index: -5;
  color: var(--blue-0);
}
/* @media screen and (max-width: 768px) {
  .patronage_img img {
    width: 100% !important;
  }
} */
</style>