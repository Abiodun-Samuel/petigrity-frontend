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
              <!-- <Icon class="about__img__icon__one" icon="geo:turf-point-grid" />
              <Icon class="about__img__icon__two" icon="geo:turf-point-grid" /> -->
              <div
                class="
                  counter
                  shadow
                  rounded
                  d-flex
                  justify-content-evenly
                  align-items-center
                  bg-white
                "
              >
                <div class="counter__icon border-1">
                  <Icon
                    icon="fa-solid:users"
                    color="#ffcc29"
                    height="35"
                    width="35"
                  />
                </div>
                <div class="counter__details">
                  <h4 class="my-0 py-0 fw-bolder text-center">
                    + <span id="counter__text"></span>
                  </h4>
                  <h4 class="fw-bolder my-0 py-0 text-warning">Lives</h4>
                </div>
              </div>
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
              <p class="lead bg-white">
                At Petigrity Konsult, our responsibility is to provide clients
                with the most appropriate health insurance policy. Authorized by
                specific insurance companies to act on their behalf.
              </p>
              <Icon class="icon__one" icon="geo:turf-point-grid" />
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
              <div class="about__text p-1">
                <p class="lead">
                  As a health insurance broker, we act in the best interest of
                  our clients, helping them to compare and secure coverage based
                  on their needs and budgets.
                </p>
                <Icon class="icon__one" icon="geo:turf-point-grid" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="col-lg-6 col-md-6 col-sm-6 my-2 d-flex align-items-stretch"
          >
            <div class="about__section__text bg-light shadow rounded">
              <div class="about__text p-1">
                <p class="lead">
                  Whatever the size of your business, Petigrity can help you
                  secure a plan which will provide valuable and high quality
                  cover to your employees. This will mean less work days lost to
                  sickness and overall a more productive workforce.
                </p>
                <Icon class="icon__one" icon="geo:turf-point-grid" />
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
      <!-- 
      <Icon
        class="about__pointer"
        icon="codicon:debug-breakpoint-log"
        height="30"
      /> -->
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
  var countUp_two = new CountUp("counter__text_two", 300, {
    enableScrollSpy: true,
  });
  countUp.start();
  countUp_two.start();
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
  top: -15px;
  left: -15px;
  border: 1.5px solid var(--blue-0);
  border-radius: 4px;
}
/* .about__img__icon__one {
  position: absolute;
  width: 60px;
  height: 60px;
  top: -25px;
  left: -25px;
  color: var(--blue-0);
} */
/* .about__img__icon__two {
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: -25px;
  right: -25px;
  color: var(--blue-0);
} */
.about__text {
  position: relative;
}
.about__text p {
  position: relative;
  z-index: 1;
  padding: 5px;
}
.icon__one {
  color: var(--blue-0);
  height: 50px;
  width: 50px;
  position: absolute;
  top: -20px;
  left: -20px;
}

.counter {
  position: absolute;
  top: 42%;
  right: -100px;
  width: 175px;
  padding: 15px;
  z-index: 10;
}
.counter__details {
  margin-left: 5px;
}
.counter__icon {
  border-radius: 50%;
  border: 1.5px solid var(--yellow-0);
  padding: 2px;
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