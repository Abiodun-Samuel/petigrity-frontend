<template>
  <section id="services" ref="services">
    <div class="container">
      <!-- <SubHeader sub__header="Services" /> -->
      <div class="row">
        <div class="col-lg-6 my-2">
          <h2 class="fw-bolder text-primary mb-2">Our Service</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            cupiditate et dolore dolores deleniti modi magnam! Facilis id
            consequatur, hic iure, maxime assumenda nemo dolores ipsa doloribus,
            dolorum consequuntur harum?
          </p>
          <div class="mb-1 mt-2">
            <router-link :to="{ name: '' }" class="section__btn rounded">
              Learn more
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 my-2">
          <div class="service__img text-center">
            <img
              src="../../assets/images/img/service.svg"
              alt="service image"
              class="rounded w-75 shadow"
            />
            <!-- <div class></div> -->
          </div>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-lg-4 mb-2 d-flex align-items-stretch">
          <div class="service__box p-2 shadow rounded text-center">
            <h2 class="fw-bolder text-primary">Health Insurance</h2>
            <img
              src="../../assets/images/img/health-plan.svg"
              alt="training icon"
              class="img-fluid my-1"
              width="150"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, autem!
            </p>
            <div class="mb-1 mt-2">
              <router-link :to="{ name: '' }" class="section__btn rounded">
                Learn more
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-2 d-flex align-items-stretch">
          <div class="service__box p-2 shadow rounded text-center">
            <h2 class="fw-bolder text-primary">
              Recruitment & Staff Management
            </h2>
            <img
              src="../../assets/images/img/recruitment.svg"
              alt="training icon"
              class="img-fluid my-1"
              width="150"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, autem!
            </p>
            <div class="mb-1 mt-2">
              <router-link :to="{ name: '' }" class="section__btn rounded">
                Learn more
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-2 d-flex align-items-stretch">
          <div class="service__box p-2 shadow rounded text-center">
            <h2 class="fw-bolder text-primary">Training</h2>
            <img
              src="../../assets/images/img/training.svg"
              alt="training icon"
              class="img-fluid my-1"
              width="150"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, autem!
            </p>
            <div class="mb-1 mt-2">
              <router-link :to="{ name: '' }" class="section__btn rounded">
                Learn more
              </router-link>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
// import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css">
#services {
  position: relative;
  padding: 3.5rem 0;
  /* background-image: radial-gradient(at top left, #fff9fe, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #fff7f7, transparent); */
}
.service__box {
  background-image: radial-gradient(at top left, #fff9fe, transparent),
    radial-gradient(at top right, #edf0ff, transparent),
    radial-gradient(at bottom left, #fff7f7, transparent);
}

.section__btn {
  background: var(--blue-0);
  color: var(--blue-1);
  padding: 0.6rem 1rem;
  transition: 500ms ease;
}
.section__btn:hover {
  background: var(--blue-1);
  color: var(--light-0);
}
</style>