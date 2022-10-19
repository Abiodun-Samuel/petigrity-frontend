<template>
  <div class="our__partners shadow-sm">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Our <span>Partners</span></h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-center flex-wrap gap-1">
            <div
              class="our__partner_content text-center"
              v-for="partner in 6"
              :key="partner"
            >
              <img
                loading="lazy"
                src="../../assets/images/img/doctor.svg"
                width="120"
                alt=""
              />
              <p>Lorem, ipsum.</p>
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