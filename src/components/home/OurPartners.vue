<template>
  <div class="our__partners shadow-sm">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">Our <span>Partners</span></h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-12">
          <div
            class="
              d-flex
              justify-content-lg-between
              align-items-center
              flex-wrap
              gap-1
            "
          >
            <div
              v-for="(partner, index) in partners"
              :key="partner.file"
              data-aos="fade-up"
              :data-aos-delay="index * 50"
              class="our__partner_content text-center rounded"
            >
              <a :href="partner.url" target="_blank">
                <img
                  loading="lazy"
                  :src="getImgUrl(partner.file)"
                  width="100"
                  alt="brands"
                  class="bg-white rounded shadow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { partners } from "@/utils/helper";

const getImgUrl = (img) => {
  var images = require.context("../../assets/images/partners/", false);
  return images("./" + img);
};
</script>

<style lang="css" scoped>
.our__partners {
  position: relative;
  padding: 4rem 0;
  background: var(--blue-0);
}
.our__partner_content img {
  border: 1.5px solid transparent;
  padding: 3px;
}
.our__partner_content:hover img {
  transition: 500ms;
  box-shadow: var(--shadow-1);
  border: 1.5px solid var(--blue-1);
}
</style>