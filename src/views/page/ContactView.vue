<template>
  <div id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="contact__details bg-white shadow rounded">
            <div class="row">
              <div data-aos="fade-up" data-aos-delay="50" class="col-lg-6">
                <!-- <SubHeader data-aos="fade-up">
                  <h2 class="fw-bolder mb-2"><span>Contact</span> Us</h2>
                </SubHeader> -->
                <div class="contact__img my-1 text-center">
                  <img
                    loading="lazy"
                    src="../../assets/images/img/contact.svg"
                    alt=""
                    class="w-75 img-fluid"
                  />
                </div>
                <div
                  class="d-flex my-1 justify-content-center align-items-center"
                >
                  <Icon
                    icon="entypo:old-phone"
                    height="30"
                    width="30"
                    class="me-1 contact__icon shadow"
                  />
                  <p class="fw-bolder my-0 py-0">+234 812 461 4434</p>
                </div>
                <div
                  class="d-flex my-1 justify-content-center align-items-center"
                >
                  <Icon
                    icon="mi:email"
                    height="30"
                    width="30"
                    class="me-1 contact__icon shadow"
                  />
                  <p class="fw-bolder my-0 py-0">sales@petigrity.com</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-evenly mb-1"
                >
                  <router-link :to="{}">
                    <Icon
                      icon="brandico:facebook-rect"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </router-link>
                  <router-link :to="{}">
                    <Icon
                      icon="fa6-brands:square-twitter"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </router-link>
                  <router-link :to="{}">
                    <Icon
                      icon="akar-icons:instagram-fill"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </router-link>
                  <router-link :to="{}">
                    <Icon
                      class="shadow-lg"
                      icon="akar-icons:linkedin-box-fill"
                      height="20"
                      width="20"
                    />
                  </router-link>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                class="col-lg-6 my-2"
              >
                <div class="contact__form p-2">
                  <h4 class="fw-bold">
                    Fill the form and we will get back to you shortly
                  </h4>

                  <div class="mt-3">
                    <div class="row my-2">
                      <div class="col-6">
                        <label for="" class="label-control">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your name"
                          v-model="name"
                        />
                      </div>
                      <div class="col-6">
                        <label for="" class="label-control">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                          v-model="email"
                        />
                      </div>
                    </div>
                    <div class="row my-2">
                      <div class="col-6">
                        <label for="" class="label-control">Phone</label>
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Enter your phone number"
                          v-model="phone"
                        />
                      </div>
                      <div class="col-6">
                        <label for="" class="label-control">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject"
                          v-model="subject"
                        />
                      </div>
                    </div>
                    <div class="form-row my-2">
                      <label for="" class="label-control">Message</label>
                      <textarea
                        rows="5"
                        v-model="message"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="form-row my-2">
                      <button
                        @click="sendMail"
                        class="btn btn-primary rounded w-100"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const name = ref("");
const phone = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const sendMail = () => {
  store.dispatch("othersStore/SendMail", {
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value,
  });
};
</script>

<style lang="css" scoped>
#contact {
  padding: 4rem 0;
  position: relative;
  background-image: linear-gradient(-45deg, var(--blue-0) 50%, transparent 50%);
}
.contact__details {
  /* background-image: linear-gradient(45deg, var(--blue-0), #ffffff); */
}
.contact__icon {
  color: var(--blue-1);
  border: 1.5px solid var(--blue-1);
  border-radius: 50%;
  padding: 3px;
}
</style>