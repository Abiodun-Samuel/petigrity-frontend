<template>
  <div class="faq">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Frequently <span>Asked</span> Questions</h2>
      </SubHeader>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="accordion" id="accordionExample">
            <div data-aos="fade-up" data-aos-delay="50" class="accordion-item">
              <h2 class="accordion-header fw-bolder" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What are your fees?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Our services are completely free. As a broker, we receive a
                  commission from patner HMOs once you successfully subscribe to
                  a plan.
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" class="accordion-item">
              <h2 class="accordion-header fw-bolder" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What happens if some members of staff resigns after
                  registration?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  You are only liable to pay for active members when you
                  subscribe to the monthly payment plan.
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="150" class="accordion-item">
              <h2 class="accordion-header fw-bolder" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I decide which HMO fits my need?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  We take into considerations your needs i.e budget, hospital
                  spread and scope of cover.
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="accordion-item">
              <h2 class="accordion-header fw-bolder" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I trust your recommendation?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  We are not loyal to any HMO and would also recommend based
                  your immediate and Long term need.
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
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css">
.faq {
  position: relative;
  padding: 4rem 0;
}
</style>