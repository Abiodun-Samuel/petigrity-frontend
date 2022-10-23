<template>
  <div id="about">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Who <span>Are</span> We</h2>
      </SubHeader>

      <div class="row">
        <div class="row justify-content-between">
          <div data-aos="fade-up" data-aos-delay="50" class="col-lg-5 my-3">
            <div class="about__img__box bg-white">
              <img
                src="../../assets/images/img/about.svg"
                alt="about us image"
                class="rounded shadow about__img"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="
              col-lg-5
              my-3
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <div class="about__text">
              <div class="bg-white p-1 rounded">
                <Icon class="icon__one" icon="geo:turf-point-grid" />
                <p class="lead">
                  At Petigrity Konsult, our responsibility is to provide clients
                  with the most appropriate health insurance policy. Authorized
                  by specific insurance companies to act on their behalf.
                </p>
              </div>

              <div
                class="counter d-flex justify-content-center align-items-center"
              >
                <div class="counter__details bg-white d-flex p-1">
                  <div class="counter__icon">
                    <Icon
                      icon="fa-solid:users"
                      color="#ffcc29"
                      height="30"
                      width="30"
                    />
                  </div>
                  <div class="counter__text__box">
                    <h4 class="fw-bolder">
                      <span id="counter__text"></span> +
                    </h4>
                    <h4 class="fw-bolder text-warning">Lives</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about__section p-1 rounded shadow mt-4">
        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            class="col-lg-6 col-md-6 col-sm-6 my-2 d-flex align-items-stretch"
          >
            <div class="about__section__text bg-light shadow rounded">
              <div class="p-1">
                <Icon class="icon__one" icon="geo:turf-point-grid" />
                <p class="lead">
                  As a health insurance broker, we act in the best interest of
                  our clients, helping them to compare and secure coverage based
                  on their needs and budgets.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="col-lg-6 col-md-6 col-sm-6 my-2 d-flex align-items-stretch"
          >
            <div class="about__section__text bg-light shadow rounded">
              <div class="p-1">
                <Icon class="icon__one" icon="geo:turf-point-grid" />
                <p class="lead">
                  Whatever the size of your business, Petigrity can help you
                  secure a plan which will provide valuable and high quality
                  cover to your employees. This will mean less work days lost to
                  sickness and overall a more productive workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              class="d-flex justify-content-end"
            >
              <router-link
                class="btn btn-outline-primary rounded-pill shadow"
                :to="{ name: 'about' }"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import SubHeader from "@/components/home/SubHeader.vue";
import { onMounted } from "vue";
import { CountUp } from "countup.js";

onMounted(() => {
  var countUp = new CountUp("counter__text", 100, { enableScrollSpy: true });
  countUp.start();
});
</script>

<style lang="css" scoped>
#about {
  position: relative;
  padding: 4rem 0;
  background: white;
}
.about__img__box {
  position: relative;
}
.about__img__box::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: -18px;
  left: 18px;
  border: 2px solid var(--blue-0);
  border-radius: 4px;
  /* box-shadow: var(--shadow-1); */
}

.about__text {
  position: relative;
}
.about__text p {
  position: relative;
}
.icon__one {
  color: var(--blue-0);
  height: 30px;
  width: 30px;
}
.counter__icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid var(--yellow-1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter__text__box {
  margin-left: 15px;
}

.about__section {
  background: url("../../assets/images/bg/about-bg.jpg") no-repeat;
  background-size: cover;
  background-position: 0 0;
}

@media screen and (max-width: 768px) {
  .counter {
    right: 0px;
  }
}
</style>