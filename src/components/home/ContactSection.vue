<template>
  <div id="contact">
    <div class="container">
      <SubHeader>
        <h2 class="fw-bolder mb-2"><span>Contact</span> Us</h2>
      </SubHeader>

      <div class="row">
        <div class="col-lg-6 mb-5">
          <div class="contact__details px-2 pt-2">
            <h3 class="h2 text-primary fw-bolder">Contact Information</h3>

            <div class="row mt-2">
              <div class="col-6">
                <div
                  class="
                    shadow
                    bg-light
                    rounded
                    details
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                    p-1
                  "
                >
                  <img
                    src="../../assets/images/icons/telephone.png"
                    alt="phone icon"
                    width="24"
                    height="24"
                  />
                  <p class="fw-bold mb-0 mt-1">+234 812 461 4434</p>
                </div>
              </div>
              <div class="col-6">
                <div
                  class="
                    shadow
                    bg-light
                    rounded
                    details
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                    p-1
                  "
                >
                  <img
                    src="../../assets/images/icons/message.png"
                    alt="phone icon"
                    width="24"
                    height="24"
                  />
                  <p class="fw-bold mb-0 mt-1">sales@perigrity.com</p>
                </div>
              </div>
            </div>

            <div class="text-center">
              <img
                src="../../assets/images/img/contact.svg"
                alt=""
                class="w-50 contact__img img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-2">
          <div class="contact__form p-2 shadow rounded bg-white">
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
                  />
                </div>
                <div class="col-6">
                  <label for="" class="label-control">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
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
                  />
                </div>
                <div class="col-6">
                  <label for="" class="label-control">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="form-row my-2">
                <label for="" class="label-control">Message</label>
                <textarea rows="5" class="form-control"></textarea>
              </div>
              <div class="form-row my-2">
                <button
                  class="btn btn-outline-primary btn-lg shadow-lg rounded-pill"
                >
                  Send
                </button>
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
</script>

<style lang="css">
#contact {
  padding-top: 5rem;
  position: relative;
}
.contact__details {
  background: url("../../assets/images/bg/contact-bg.svg") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
}
.details {
  border: 1.5px solid var(--blue-0);
}
.contact__img {
  margin-bottom: -60px;
}
</style>