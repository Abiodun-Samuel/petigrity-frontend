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
              justify-content-center
              align-items-center
              flex-wrap
              gap-2
            "
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              class="our__partner_content text-center rounded m-1"
            >
              <a href="http://www.axamansard.com" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/partners/axa.png"
                  width="120"
                  height="auto"
                  alt="partner logo"
                />
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              class="our__partner_content text-center rounded m-1"
            >
              <a href="https://www.hygeiahmo.com" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/partners/hygeiahmo.png"
                  width="120"
                  height="auto"
                  alt="partner logo"
                />
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="our__partner_content text-center rounded m-1"
            >
              <a href="https://rothaugehealth.com" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/partners/roth.jpg"
                  width="120"
                  height="auto"
                  alt="partner logo"
                />
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              class="our__partner_content text-center rounded m-1"
            >
              <a href="http://reliancehmo.com" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/partners/reliance.png"
                  width="120"
                  height="auto"
                  alt="partner logo"
                />
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              class="our__partner_content text-center rounded m-1"
            >
              <a href="https://leadwayhealth.com" target="_blank">
                <img
                  loading="lazy"
                  src="../../assets/images/partners/leadway.jpg"
                  width="120"
                  height="auto"
                  alt="partner logo"
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
</script>

<style lang="css" scoped>
.our__partners {
  position: relative;
  padding: 4rem 0;
  background: #ffffff;
}
.our__partner_content {
  border: 2px solid transparent;
}
.our__partner_content:hover {
  box-shadow: var(--shadow-1);
  border-radius: 5px;
  border: 2px solid var(--blue-0);
}
</style>