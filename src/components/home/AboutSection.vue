<template>
  <div id="about">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-3"><span>About</span> Us</h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-6 my-2" data-aos="fade-up" data-aos-delay="50">
          <div class="about__img">
            <div class="one"></div>
            <div class="two"></div>
            <div
              class="
                counter
                shadow
                bg-white
                rounded
                d-flex
                justify-content-evenly
                align-items-center
              "
            >
              <div class="counter__icon">
                <Icon
                  icon="fa-solid:users"
                  color="#ffcc29"
                  height="35"
                  width="35"
                />
              </div>
              <div class="counter__details">
                <h5 class="my-0 py-0 fw-bolder text-center">
                  + <span id="counter__text"></span>
                </h5>
                <p class="my-0 py-0 text-warning small">Registered Users</p>
              </div>
            </div>
            <div
              class="
                counter_two
                shadow
                bg-white
                rounded
                d-flex
                justify-content-evenly
                align-items-center
              "
            >
              <div class="counter__icon">
                <Icon
                  icon="carbon:partnership"
                  color="#ffcc29"
                  height="35"
                  width="35"
                />
              </div>
              <div class="counter__details">
                <h5 class="my-0 py-0 fw-bolder">
                  + <span id="counter__text_two"></span>
                </h5>
                <p class="my-0 py-0 text-warning small">Partners</p>
              </div>
            </div>
            <img
              loading="lazy"
              src="../../assets/images/about.svg"
              alt="about us page"
              class="img-fluid w-75 rounded shadow"
            />
          </div>
        </div>

        <div class="col-lg-6 my-2">
          <div class="about__desc">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="d-flex align-items-baseline gap-1 mb-2 p-1 rounded shadow"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-log"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  At Petigrity Konsult, our responsibility is to provide clients
                  with the most appropriate health insurance policy. Authorized
                  by specific insurance companies to act on their behalf.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              class="d-flex align-items-baseline gap-1 mb-2 p-1 rounded shadow"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-log"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  As a health insurance broker, we act in the best interest of
                  our clients, helping them to compare and secure coverage based
                  on their needs and budgets.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              class="d-flex align-items-baseline gap-1 mb-2 p-1 rounded shadow"
            >
              <div>
                <Icon
                  class="about__pointer"
                  icon="codicon:debug-breakpoint-log"
                  height="30"
                />
              </div>
              <div>
                <p class="m-0 p-0">
                  Whatever the size of your business, Petigrity can help you
                  secure a plan which will provide valuable and high quality
                  cover to your employees. This will mean less work days lost to
                  sickness and overall a more productive workforce.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" class="mt-2">
              <router-link
                class="btn btn-lg btn-outline-primary rounded-pill shadow"
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
  background: var(--blue-0);
}
.about__img {
  position: relative;
  /* position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50%;
  background: var(--blue-0); */
}
.about__img .one {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: var(--yellow-0);
  z-index: -10;
}
.about__img .two {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: var(--yellow-0);
  z-index: -10;
}

.about__pointer {
  background: rgb(227, 227, 255);
  border-radius: 50%;
  padding: 1px;
  color: var(--blue-1);
}
.counter {
  position: absolute;
  top: 10px;
  right: 100px;
  width: 175px;
  padding: 10px;
}
.counter__details {
  margin-left: 5px;
}
.counter__icon {
  /* background: var(--yellow-0); */
  border-radius: 50%;
  border: 1.5px solid var(--yellow-0);
  padding: 2px;
}

.counter_two {
  position: absolute;
  bottom: 10px;
  right: 100px;
  width: 170px;
  padding: 10px;
}
@media screen and (max-width: 768px) {
  .about__img img {
    width: 100% !important;
  }
  .counter {
    right: 0px;
  }
  .counter_two {
    right: 0px;
  }
}
</style>