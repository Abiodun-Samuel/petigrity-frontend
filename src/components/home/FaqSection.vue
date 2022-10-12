<template>
  <div class="faq">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2">F<span>A</span>Qs</h2>
      </SubHeader>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="accordion shadow" id="accordionExample">
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
                  Questions #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ab maxime voluptas autem dicta recusandae maiores
                  possimus ut ad qui! overflow.
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
                  Questions #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ab maxime voluptas autem dicta recusandae maiores
                  possimus ut ad qui! overflow.
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
                  Questions #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ab maxime voluptas autem dicta recusandae maiores
                  possimus ut ad qui! overflow.
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
  padding-top: 5rem;
}
</style>