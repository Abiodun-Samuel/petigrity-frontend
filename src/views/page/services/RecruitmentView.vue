<template>
  <div class="mb-5">
    <PageHeader page_header_one="Services" page_header="Recruitments" />
  </div>

  <div class="recruitments">
    <div class="container">
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          class="col-lg-6 col-md-6 my-2"
        >
          <div class="recruitment__box p-2 shadow rounded text-center">
            <div class="recruitment__icon">
              <img
                src="../../../assets/images/icons/recruitment/hire_one.svg"
                alt="recruitment icon"
                height="120"
                width="120"
                class="rounded-circle shadow-lg"
              />
            </div>
            <div class="recruitment__desc my-2">
              <p class="lead">
                At Petigrity, our premium recruitment service includes
                conducting the full recruitment cycle for you. From writing the
                job description, all the way to screening, interviewing, and
                salary negations. We are committed to understanding your needs;
                the exact requirements of the role you are trying to fill across
                all levels and finding you the best match for your company.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="col-lg-6 col-md-6 my-2"
        >
          <div class="recruitment__box p-2 shadow rounded text-center">
            <div class="recruitment__icon">
              <img
                src="../../../assets/images/icons/recruitment/hire_two.svg"
                alt="recruitment icon"
                height="120"
                width="120"
                class="rounded-circle shadow-lg"
              />
            </div>
            <div class="recruitment__desc my-2">
              <p class="lead">
                Besides recruitment, we help clients remain updated with labor
                market trends and provide consultancy to develop their HR
                strategy. Our strength lies in the sourcing and identification
                of talent, while acting as a bridge between employers and
                employees, handling the tasks of identifying top talent, vetting
                candidates, and presenting the top candidates to clients
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          class="col-lg-6 col-md-6 my-2"
        >
          <div class="recruitment__box p-2 shadow rounded text-center">
            <div class="recruitment__icon">
              <img
                src="../../../assets/images/icons/recruitment/hire_three.svg"
                alt="recruitment icon"
                height="120"
                width="120"
                class="rounded-circle shadow-lg"
              />
            </div>
            <div class="recruitment__desc my-2">
              <p class="lead">
                Research has shown that about 40% of problematic hires are
                usually due to candidates lying about their qualifications and
                experience. At Petigrity, not only do we have more time to vet
                candidates thoroughly, but we also have the experience to better
                identify red flags.
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
import { Icon } from "@iconify/vue";
</script>

<style lang="css">
.recruitments {
  position: relative;
}
.recruitment__box {
  background-image: linear-gradient(50deg, var(--blue-0) 50%, transparent 50%);
}
.recruitment__icon img {
  padding: 3px;
  border: 3px solid var(--blue-1);
}
</style>