<template>
  <div class="mb-5">
    <PageHeader page_header="About Us" />
  </div>
  <div class="about__page">
    <div class="container">
      <!-- 1 -->
      <div class="row">
        <div
          data-aos-delay="50"
          data-aos="fade-up"
          class="col-lg-6 col-md-6 my-2"
        >
          <div class="about__page__img">
            <img
              src="../../assets/images/img/about_one.jpg"
              alt="about image"
              class="img-fluid rounded shadow p-1"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="row col-lg-6 col-md-6 my-2"
        >
          <div
            class="
              about__page__text
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <p class="lead">
              At Petigrity Konsult, our responsibility is to provide clients
              with the most appropriate health insurance policy. Authorized by
              specific insurance companies to act on their behalf, we
              essentially guide clients through the process of selecting a
              health policy for themselves or for employees.
            </p>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="arrow__one">
          <img src="../../assets/images/icons/arrow.png" alt="" />
        </div>
      </div>
      <!-- 2  -->
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          class="col-lg-6 col-md-6 my-2 order-lg-2"
        >
          <div class="about__page__img d-flex justify-content-end">
            <img
              src="../../assets/images/img/about_two.jpg"
              alt="about image"
              class="img-fluid rounded shadow p-1"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="row col-lg-6 col-md-6 my-2 order-lg-1"
        >
          <div
            class="
              about__page__text
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <p class="lead">
              While many health insurers will have similar benefit schedules on
              paper, many aspects of their service, for example; general
              turnaround time, leverage and communication with hospitals or
              additional value added services can vary significantly. These
              intangible aspects are harder to compare but are equally important
              to consider when buying an insurance plan. Professionally advising
              clients and explaining the ins and outs of the policies ensures
              higher satisfaction among our clients.
            </p>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="arrow__two">
          <img src="../../assets/images/icons/arrow.png" alt="" />
        </div>
      </div>
      <!-- 3 -->
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          class="col-lg-6 col-md-6 my-2"
        >
          <div class="about__page__img">
            <img
              src="../../assets/images/img/about_three.jpg"
              alt="about image"
              class="img-fluid rounded shadow p-1"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="row col-lg-6 col-md-6 my-2"
        >
          <div
            class="
              about__page__text
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <p class="lead">
              As a health insurance broker, we act in the best interest of our
              clients, helping them to compare and secure coverage based on
              their needs and budgets. Brokers, just like agents, take a
              commission from the insurer for the products sold and renewed.
              However, we remain independent of all insurers and offer many
              types of plans from multiple insurance providers.
            </p>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="arrow__three">
          <img src="../../assets/images/icons/arrow.png" alt="" />
        </div>
      </div>

      <!-- 4 -->
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          class="col-lg-6 col-md-6 my-2 order-lg-2"
        >
          <div class="about__page__img d-flex justify-content-end">
            <img
              src="../../assets/images/img/about_four.jpg"
              alt="about image"
              class="img-fluid rounded shadow p-1"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="row col-lg-6 col-md-6 my-2 order-lg-1"
        >
          <div
            class="
              about__page__text
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <p class="lead">
              Whatever the size of your business, Petigrity can help you secure
              a plan which will provide valuable and high quality cover to your
              employees. This will mean less work days lost to sickness and
              overall a more productive workforce. If your organisation
              currently has a plan in place, we can help you determine if it’s
              the best option going forward, or whether there are better
              alternatives on the market which you would be well-advised to take
              advantage of.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "@/components/pages/PageHeader.vue";
</script>

<style lang="css" scoped>
.about__page {
  position: relative;
}
.about__page__text p {
  line-height: 1.5;
}
.about__page__img img {
  background: var(--blue-0);
}
.arrow__two img {
  transform: rotate(-90deg);
}
@media screen and (max-width: 768px) {
  .about__page__img {
    justify-content: start !important;
  }
}
</style>