<template>
  <div class="how shadow-sm">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-3">How it <span>Works</span></h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-12">
          <div class="main">
            <ul class="timeline">
              <li data-aos="fade-up" data-aos-delay="50" class="timeline-item">
                <div class="timeline-content rounded shadow text-center">
                  <img
                    loading="lazy"
                    src="../../assets/images/icons/svg/phonecall.svg"
                    alt="phone call"
                    width="120"
                  />
                  <p>
                    We spare you the trouble of having to compare several HMO
                    providers and choose which plan is the most cost-effective.
                    The procedure is easy with us. You only need to make one
                    call to one of our advisors.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="100" class="timeline-item">
                <div class="timeline-content rounded shadow text-center">
                  <img
                    loading="lazy"
                    src="../../assets/images/icons/svg/research.svg"
                    alt="research"
                    width="120"
                  />
                  <p>
                    Then, after thoroughly researching the market on your
                    behalf, we take note of your requirements and budget and get
                    back to you with the finest deals.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="150" class="timeline-item">
                <div class="timeline-content rounded shadow text-center">
                  <img
                    loading="lazy"
                    src="../../assets/images/icons/svg/result.svg"
                    alt="research"
                    width="120"
                  />
                  <p>
                    We'll give you access to the best plans on the market and
                    make the onboarding/switch process simple for you. We pay
                    close attention to each plan's specifics and how well it
                    accords with your situation.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200" class="timeline-item">
                <div class="timeline-content rounded shadow text-center">
                  <img
                    loading="lazy"
                    src="../../assets/images/icons/svg/start.svg"
                    alt="phone call"
                    width="120"
                  />
                  <p>
                    We put a lot of time and effort into making sure that the
                    strategy we offer you will be the best fit for your
                    financial situation and requirements.
                  </p>
                  <button @click="how_it_works" class="btn btn-outline-primary">
                    Get Started
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubHeader from "@/components/home/SubHeader.vue";
import { getStarted } from "@/utils/helper";

const how_it_works = () => {
  getStarted();
};
</script>

<style lang="css" scoped>
.how {
  position: relative;
  padding: 4rem 0;
  background: #ffffff
}
.main {
  padding: 1rem 0;
}
.main .timeline {
  position: relative;
}
.main .timeline:before {
  background: #f1efef;
  content: "";
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 4px;
}
.main .timeline .timeline-item {
  clear: both;
  list-style-type: none;
  padding: 0 30px;
  position: relative;
}
.main .timeline .timeline-item:before {
  background: #fc6b6b;
  border-radius: 50%;
  content: "";
  height: 20px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 20px;
}
.main .timeline .timeline-item .timeline-content {
  border: 2px solid #fc6b6b;
  padding: 1em;
  width: 46%;
}
.main .timeline .timeline-item .timeline-content p {
  margin: 5px 0;
}
.main .timeline .timeline-item:nth-child(even) .timeline-content {
  float: right;
}
.main .timeline .timeline-item:nth-child(2):before {
  background: var(--yellow-1);
}
.main .timeline .timeline-item:nth-child(2) .timeline-content {
  border: 2px solid var(--yellow-1);
}
.main .timeline .timeline-item:nth-child(3):before {
  background: #aec785;
}
.main .timeline .timeline-item:nth-child(3) .timeline-content {
  border: 2px solid #aec785;
}
.main .timeline .timeline-item:nth-child(4):before {
  background: var(--blue-1);
}
.main .timeline .timeline-item:nth-child(4) .timeline-content {
  border: 2px solid var(--blue-1);
}

@media screen and (max-width: 968px) {
  .main .timeline {
    margin: 0 0 0 10px;
  }
  .main .timeline:before {
    left: 0px;
  }
  .main .timeline .timeline-item:before {
    left: 0;
  }
  .main .timeline .timeline-item .timeline-content {
    margin: 2em 0;
    width: 100%;
  }
  .main .timeline .timeline-item:nth-child(even) .timeline-content {
    float: initial;
  }
}
</style>