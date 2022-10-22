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
            <div class="">
              <router-link
                class="btn btn-outline-primary rounded-pill"
                :to="{ name: 'service.training' }"
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
    </div>

    <div class="other__services mt-3">
      <SubHeader>
        <h2 class="fw-bolder my-4">Others <span>Services</span></h2>
      </SubHeader>
      <div class="container">
        <div class="row">
          <div data-aos-delay="200" data-aos="fade-up" class="col-lg-4 my-2">
            <div class="other__services__details">
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/training.svg"
                width="300"
                alt="service section icon"
                class="img-fluid"
              />
            </div>
          </div>
          <div
            data-aos-delay="250"
            data-aos="fade-up"
            class="col-lg-6 my-2 d-flex align-items-center"
          >
            <div class="other__services__details">
              <h4 class="fw-bolder text-primary">Training</h4>
              <p>
                At Petigrity Konsult, we conduct high-impact training programs
                which encompasses a broad range of staff requirements and needs
                – including professional development and industry-relevant
                subjects – while leveraging expertise in business areas
                including negotiation, team building, and leadership.
              </p>
            </div>
          </div>
          <div data-aos-delay="250" data-aos="fade-up" class="col-lg-4 my-2">
            <div class="other__services__details">
              <img
                loading="lazy"
                src="../../assets/images/icons/svg/recruitment.svg"
                width="300"
                alt="service section icon"
                class="img-fluid"
              />
            </div>
          </div>
          <div
            data-aos-delay="300"
            data-aos="fade-up"
            class="col-lg-6 my-2 d-flex align-items-center"
          >
            <div class="other__services__details">
              <h4 class="fw-bolder text-primary">Recruitment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugiat ipsam, ea impedit dolorum deleniti eveniet quasi
                molestiae facilis sequi eum sed, quis veritatis eos
                reprehenderit sapiente, nihil natus ab nobis fugit perspiciatis
                deserunt eaque. Itaque exercitationem voluptas consectetur
                eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "@/components/pages/PageHeader.vue";
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css">
.other__services {
  background: var(--blue-0);
}
</style>