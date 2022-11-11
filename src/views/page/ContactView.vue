<template>
  <div class="my-3 py-2">
    <PageHeader page_header="Contact Us" />
  </div>

  <div id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="contact__details shadow rounded">
            <div class="row">
              <div data-aos="fade-up" data-aos-delay="50" class="col-lg-6">
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
                  <a href="" target="_blank">
                    <Icon
                      icon="brandico:facebook-rect"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </a>
                  <a href="" target="_blank">
                    <Icon
                      icon="fa6-brands:square-twitter"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/petigrity/"
                    target="_blank"
                  >
                    <Icon
                      icon="akar-icons:instagram-fill"
                      height="20"
                      width="20"
                      class="shadow-lg"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/petigrity/"
                    target="_blank"
                  >
                    <Icon
                      class="shadow-lg"
                      icon="akar-icons:linkedin-box-fill"
                      height="20"
                      width="20"
                    />
                  </a>
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
                          v-model="state.name"
                          :style="v$.name.$error && 'border:1px solid red'"
                          @blur="v$.name.$touch()"
                        />
                        <template v-for="error in v$.name.$errors" :key="error">
                          <p class="small text-danger">
                            {{
                              error.$message == "Value is required"
                                ? "This field is required"
                                : error.$message
                            }}
                          </p>
                        </template>
                      </div>
                      <div class="col-6">
                        <label for="" class="label-control">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                          :style="v$.email.$error && 'border:1px solid red'"
                          @blur="v$.email.$touch()"
                          v-model="state.email"
                        />
                        <template
                          v-for="error in v$.email.$errors"
                          :key="error"
                        >
                          <p class="small text-danger">
                            {{
                              error.$message == "Value is required"
                                ? "This field is required"
                                : error.$message
                            }}
                          </p>
                        </template>
                      </div>
                    </div>
                    <div class="row my-2">
                      <div class="col-6">
                        <label for="" class="label-control">Phone</label>
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Enter your phone number"
                          v-model="state.phone"
                        />
                      </div>
                      <div class="col-6">
                        <label for="" class="label-control">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject"
                          v-model="state.subject"
                        />
                      </div>
                    </div>
                    <div class="form-row my-2">
                      <label for="" class="label-control">Message</label>
                      <textarea
                        rows="5"
                        v-model="state.message"
                        :style="v$.message.$error && 'border:1px solid red'"
                        @blur="v$.message.$touch()"
                        class="form-control"
                      ></textarea>
                      <template
                        v-for="error in v$.message.$errors"
                        :key="error"
                      >
                        <p class="small text-danger">
                          {{
                            error.$message == "Value is required"
                              ? "This field is required"
                              : error.$message
                          }}
                        </p>
                      </template>
                    </div>
                    <div class="form-row my-2">
                      <button
                        :disabled="v$.email.$invalid || sendmail_loading"
                        @click="sendMail"
                        class="btn btn-primary rounded w-100"
                      >
                        <span
                          v-if="sendmail_loading"
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Send
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
import PageHeader from "@/components/pages/PageHeader.vue";
import { Icon } from "@iconify/vue";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const store = useStore();

const sendmail_loading = computed(
  () => store.getters["mailStore/sendmail_loading"]
);

const rules = {
  name: { required, name: minLength(3) },
  email: { required, email },
  message: { required, message: minLength(5) },
};

const state = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const v$ = useVuelidate(rules, state);

const sendMail = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    store
      .dispatch("mailStore/SendMail", {
        name: state.name,
        email: state.email,
        phone: state.phone,
        subject: state.subject,
        message: state.message,
      })
      .then((value) => {
        v$.value.$reset();
        if (value) {
          state.name = "";
          state.email = "";
          state.phone = "";
          state.subject = "";
          state.message = "";
        }
      });
  }
};
</script>

<style lang="css" scoped>
#contact {
  position: relative;
  background-image: linear-gradient(
    -180deg,
    transparent 50%,
    var(--blue-0) 50%
  );
  padding-bottom: 3rem;
}
.contact__icon {
  color: var(--blue-1);
  border: 1.5px solid var(--blue-1);
  border-radius: 50%;
  padding: 3px;
}
</style>