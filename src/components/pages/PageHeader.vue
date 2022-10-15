<template>
  <div class="page__header rounded p-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav aria-label="breadcrumb">
            <h3 class="fw-bolder">{{ page_header }}</h3>
            <ol class="breadcrumb">
              <li class="breadcrumb-item fw-normal">
                <router-link :to="{ name: 'home' }" class="text-primary"
                  >Home</router-link
                >
              </li>
              <li v-if="page_header_one" class="breadcrumb-item fw-normal">
                <router-link
                  :to="{ name: page_header_one.toLowerCase() }"
                  class="text-primary"
                >
                  {{ page_header_one }}</router-link
                >
              </li>
              <li class="breadcrumb-item active fw-light" aria-current="page">
                {{ page_header }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page_header: {
    type: String,
  },
  page_header_one: {
    type: String,
  },
});
</script>

<style lang="css">
.page__header {
  background: var(--blue-0);
  /* background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url("../../assets/images/bg/contact-bg.jpg"); */
  background-size: cover;
  background-position: center;
}
</style>