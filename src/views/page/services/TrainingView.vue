<template>
  <div class="mb-1">
    <PageHeader page_header_one="Services" page_header="Training" />
  </div>

  <div id="training">
    <div class="container">
      <div class="row my-2">
        <div data-aos="fade-up" class="col-lg-5 my-1 col-md-6">
          <img
            loading="lazy"
            src="../../../assets/images/icons/svg/training.svg"
            alt="training image"
            class="img-fluid shadow rounded"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          class="
            col-lg-7
            my-1
            col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <div>
            <h2 class="fw-bolder text-primary mb-2">
              Petigrity Konsult Training
            </h2>
            <p class="lead">
              As a seasoned training institution with extensive experience
              developing and delivering dynamic learning materials and
              curriculum on various business topics, we contribute to client’s
              growth by providing training solutions which guarantees
              sustainable business development and a competitive advantage to
              organizations while also helping their employees improve personal
              competence and skills.
            </p>
            <p class="lead">
              We possess a unique expertise in the successful design,
              development, and implementation of training programs and
              instructional materials to facilitate employee education and
              professional development while stimulating peak performances.
            </p>
            <p class="lead">
              At Petigrity Konsult, we conduct high-impact training programs
              which encompasses a broad range of staff requirements and needs –
              including professional development and industry-relevant subjects
              – while leveraging expertise in business areas including
              negotiation, team building, and leadership.
            </p>
          </div>
        </div>
      </div>

      <div class="row my-2">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="col-lg-6 col-md-6 my-2 order-lg-2"
        >
          <div class="about__page__img d-flex justify-content-end">
            <img
              loading="lazy"
              src="../../../assets/images/icons/svg/training_two.svg"
              alt="about image"
              class="img-fluid shadow rounded"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="
            row
            col-lg-6 col-md-6
            my-2
            order-lg-1
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <div class="">
            <p class="lead">
              At Petigrity Konsult, we strive to contribute to the growth and
              profitability of your organization by providing the appropriate
              tools and training necessary for job excellence and career
              advancement. We draw upon our vast experience spanning across
              industries and business functions to deliver a value-adding
              experience for your most valuable assets - your people.
            </p>
            <p class="lead">
              Our Corporate Training Solutions have been developed to help
              support your employees enhance their work productivity,
              self-esteem, and professional growth. Our training programs are
              designed keeping customization in mind, catering to your immediate
              business needs, and help you to achieve your goals and capture
              success faster.
            </p>
            <p class="lead">
              Our soft and business skills development programs will assist your
              employees (both management and staff) to build-on their motivation
              and accelerate their growth professionally, while developing sound
              industry knowledge required for achieving new frontiers for your
              company.
            </p>
          </div>
        </div>
      </div>

      <div class="row my-2">
        <div data-aos="fade-up" data-aos-delay="250" class="col-lg-12">
          <div class="training__data p-3 shadow rounded">
            <h1 class="text-warning fw-bolder mb-1">Data Speaks</h1>
            <p class="text-light lead">
              A recent Impact Analysis survey of clients served over the last 18
              months demonstrates our quality, value and effectiveness.
            </p>
            <div class="my-2 d-flex justify-content-center flex-wrap gap-2">
              <div
                class="
                  training__data--analytics
                  rounded-pill
                  shadow-lg
                  p-1
                  bg-white
                  text-center
                "
                v-for="(data, index) in training_data"
                :key="index"
              >
                <h2 class="text-primary fw-bolder">{{ data.per }}</h2>
                <p class="lead">{{ data.text }}</p>
              </div>
            </div>
            <p class="lead text-light">
              89% of respondents confirmed training received is relevant to
              average daily job tasks, while 8/10 trainees applied what they
              learned within 4 weeks.
            </p>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <SubHeader>
          <h2 class="fw-bolder my-2"><span>Our</span> Programmes</h2>
        </SubHeader>
        <p class="lead fw-normal h3">
          Our courses are grouped into 4 programmes; <b>Human Resources</b> and
          <b> Leadership</b>, <b>Sales</b>, <b>Customer Experience</b> and
          <b>Business Management</b>.
        </p>
      </div>

      <div class="row my-3">
        <div
          class="col-lg-4 mb-3 d-flex align-items-stretch"
          v-for="(data, index) in training_courses"
          :key="data + index"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <article class="card__content bg-white shadow-lg p-1">
            <div class="card__pricing">
              <div class="card__pricing-number">{{ index + 1 }}</div>
              <span class="card__pricing-month">Course</span>
            </div>

            <header class="card__header">
              <div class="card__header-circle">
                <Icon
                  class="card__header-img"
                  icon="mdi:format-list-bulleted-type"
                />
              </div>

              <h4 class="fw-bold mt-3 mb-1">{{ data.title }}</h4>
            </header>

            <div class="card__list">
              <div
                class="card__list-details d-flex align-items-start"
                v-for="text in data.details"
                :key="text"
              >
                <div>
                  <Icon
                    icon="carbon:condition-point"
                    height="15"
                    width="15"
                    color="#193bb5"
                  />
                </div>
                <div>
                  <p class="lead" style="margin-left: 5px">
                    {{ text }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import PageHeader from "@/components/pages/PageHeader.vue";
import SubHeader from "@/components/home/SubHeader.vue";
import { Icon } from "@iconify/vue";
import { training_data, training_courses } from "@/utils/helper";
import ContactSection from "@/components/home/ContactSection.vue";
</script>

<style lang="css">
#training {
  position: relative;
  padding: 2rem 0;
}
.training__data {
  background: var(--blue-1);
}
.training__data--analytics {
  border: 2px solid var(--blue-0);
}

/* plans   */
:root {
  --hue-color: 210;
  --first-color: hsl(var(--hue-color), 96%, 54%);
  --first-color-light: hsl(var(--hue-color), 96%, 69%);
  --first-color-alt: hsl(var(--hue-color), 96%, 37%);
  --first-color-lighter: hsl(var(--hue-color), 14%, 96%);
  --title-color: hsl(var(--hue-color), 12%, 15%);
  --text-color: hsl(var(--hue-color), 12%, 35%);
  --text-color-light: hsl(var(--hue-color), 12%, 65%);
  --white-color: #fff;
  --body-color: hsl(var(--hue-color), 100%, 99%);
  --container-color: #fff;

  /*========== Font and typography ==========*/
  --body-font: "Lato", sans-serif;
  --pricing-font: "Rubik", sans-serif;
  --biggest-font-size: 1.75rem;
  --normal-font-size: 0.938rem;
  --h2-font-size: 1.25rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;
  --tiny-font-size: 0.625rem;
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-1: 1rem;
  --mb-1-25: 1.25rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
}

.card__content {
  position: relative;
  border-radius: 1rem;
  transition: 0.4s;
  border: 1.5px solid var(--blue-1);
}

.card__content:hover {
  box-shadow: 0 16px 24px hsla(var(--hue-color), 61%, 16%, 0.15);
  transform: scale(1.05);
  border: 1.5px solid var(--blue-1);
}

.card__header-img {
  width: 30px;
  height: 30px;
}

.card__header-circle {
  width: 40px;
  height: 40px;
  background-color: var(--blue-0);
  border-radius: 50%;
  margin-bottom: var(--mb-1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--blue-1);
}

.card__pricing {
  position: absolute;
  background: linear-gradient(157deg, var(--blue-1) -12%, var(--yellow-1) 109%);
  width: 60px;
  height: 88px;
  right: 1.5rem;
  top: -1rem;
  padding-top: 1.25rem;
  text-align: center;
}

.card__pricing-number {
  font-family: var(--pricing-font);
  font-size: var(--h2-font-size);
}

.card__pricing-month {
  display: block;
  font-size: var(--tiny-font-size);
}

.card__pricing-number,
.card__pricing-month {
  color: var(--white-color);
}

.card__pricing::after,
.card__pricing::before {
  content: "";
  position: absolute;
}

.card__pricing::after {
  width: 100%;
  height: 14px;
  background-color: var(--white-color);
  left: 0;
  bottom: 0;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.card__pricing::before {
  width: 14px;
  height: 16px;
  background-color: var(--first-color-alt);
  top: 0;
  left: -14px;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
</style>