<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-2" data-aos="fade-up">
          <div class="about__img">
            <img
              src="../../assets/images/about.svg"
              alt="about us page"
              class="img-fluid w-75 shadow rounded"
            />
          </div>
        </div>

        <div class="col-lg-6 my-2">
          <div class="about__desc">
            <h2 data-aos="fade-up" class="fw-bolder mb-2">
              <span>About</span> Us
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="50"
              class="d-flex align-items-baseline gap-1 mb-1"
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
              data-aos-delay="100"
              class="d-flex align-items-baseline gap-1 mb-1"
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
              data-aos-delay="150"
              class="d-flex align-items-baseline gap-1 mb-1"
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

            <div data-aos="fade-up" data-aos-delay="200" class="mt-2">
              <router-link class="btn btn-primary" :to="{ name: 'about' }"
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
</script>

<style lang="css">
#about {
  position: relative;
  padding-top: 4rem;
}
.about__desc h2 {
  position: relative;
}
.about__desc h2 span {
  position: relative;
  color: var(--yellow-1);
}
/* .about__desc h2 span::before {
  content: "";
  background: var(--yellow-1);
  height: 2.5px;
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
} */
.about__img {
  position: relative;
}
.about__pointer {
  background: var(--blue-0);
  border-radius: 50%;
  padding: 1px;
  color: var(--blue-1);
}
/* .section__btn {
  color: var(--blue-1);
  padding: 0.6rem 1rem;
  transition: 500ms ease;
}
.section__btn:hover {
  background: var(--blue-1);
  color: var(--light-0);
} */
</style>