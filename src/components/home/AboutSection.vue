<template>
  <div id="about">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-2"><span>About</span> Us</h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-6 my-2" data-aos="fade-up" data-aos-delay="50">
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
                class="btn btn-lg btn-outline-primary rounded-pill shadow-lg"
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
</script>

<style lang="css">
#about {
  position: relative;
  padding-top: 5rem;
}
.about__img {
  position: relative;
}
.about__pointer {
  background: var(--blue-0);
  border-radius: 50%;
  padding: 1px;
  color: var(--blue-1);
}
@media screen and (max-width: 768px) {
  .about__img img {
    width: 100% !important;
  }
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