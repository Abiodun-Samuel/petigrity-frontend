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
          class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch"
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
              Professional Impartial Advice
              <!-- Health Insurance -->
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
          class="col-lg-6 col-md-6 my-2 d-flex align-items-stretch"
        >
          <div class="service__details text-center p-2 rounded">
            <img
              loading="lazy"
              src="../../assets/images/icons/svg/training.svg"
              width="120"
              alt="service section icon"
              class=""
            />
            <h4 class="fw-bolder text-primary">Additional Client Support</h4>
            <p>
              We also offer a wide range of additional, complementary services
              such as claims processing assistance, current plan review,
              renewal, and many more, all at no additional cost.
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
      </div>

      <div class="row d-flex justify-content-center align-items-stretch">
        <div data-aos-delay="150" data-aos="fade-up" class="col-lg-6 my-2">
          <div class="text-center p-2 rounded">
            <h4 class="fw-bolder text-warning my-2">Others Services.</h4>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item my-1">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img
                      loading="lazy"
                      src="../../assets/images/icons/svg/training.svg"
                      width="100"
                      alt="service section icon"
                    />
                    <h4 class="ms-2 fw-bolder text-primary">Training</h4>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pb-3">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quibusdam illum dolorem ea placeat cupiditate fuga
                      molestias ipsum officiis quaerat veniam numquam odit iste,
                      assumenda consequuntur.
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
              <div class="accordion-item my-1">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <img
                      loading="lazy"
                      src="../../assets/images/icons/svg/recruitment.svg"
                      width="100"
                      alt="service section icon"
                    />
                    <h4 class="ms-2 fw-bolder text-primary">Recruitment</h4>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pb-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum commodi provident voluptate ipsa vero
                      exercitationem maxime ab dolores assumenda unde!
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