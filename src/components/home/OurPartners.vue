<template>
  <div class="our__partners shadow-sm">
    <div class="container">
      <SubHeader data-aos="fade-up">
        <h2 class="fw-bolder mb-3">Our <span>Partners</span></h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-between flex-wrap gap-1">
            <div
              class="our__partner_content"
              v-for="partner in 6"
              :key="partner"
            >
              <img
                loading="lazy"
                src="../../assets/images/img/doctor.svg"
                width="120"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
</script>

<style lang="css" scoped>
.our__partners {
  position: relative;
  padding: 4rem 0;
  background: #ffffff;
}
</style>