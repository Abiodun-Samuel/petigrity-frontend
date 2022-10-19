<template>
  <div class="our__partners shadow-sm">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Our <span>Partners</span></h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-center flex-wrap">
            <div
              class="our__partner_content text-center rounded m-1"
              v-for="partner in 6"
              :key="partner"
            >
              <a href="" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/img/doctor.svg"
                  width="120"
                  alt=""
                />
                <p class="text-secondary">Lorem, ipsum.</p></a
              >
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
.our__partner_content:hover {
  box-shadow: var(--shadow-1);
}
</style>