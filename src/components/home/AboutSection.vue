<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about__img text-center">
            <img
              src="../../assets/images/img/about.svg"
              alt="about us page"
              class="img-fluid w-75"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about__desc p-3">
            <!-- <h2 class="fw-bolder text-primary mb-2">About Us</h2> -->
            <img
              class="bg-white shadow p-1 rounded"
              src="../../assets/images/logo/logo-sm.png"
              alt="about image two"
            />
            <p class="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              praesentium suscipit eveniet, illo fugiat nemo pariatur
              dignissimos nesciunt cumque in placeat ex nostrum. Aliquid culpa
              natus minus incidunt soluta, veniam tempore autem quas sint ipsa,
              voluptatibus quasi fugit illo. Neque consequatur quibusdam quas
              odit nobis autem harum iusto inventore praesentium!
            </p>
            <router-link class="section__btn rounded my-2" :to="{}"
              >Read More</router-link
            >
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
#about {
  position: relative;
  padding: 4rem 0;
}
.about__img {
  position: relative;
}
.about__logo {
  position: absolute;
  bottom: 0;
  right: 0;
}
.about__desc p {
  font-size: 1.1rem;
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