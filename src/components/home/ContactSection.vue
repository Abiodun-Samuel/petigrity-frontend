<template>
  <div id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-2">
          <div class="contact__details p-3">
            <h1 class="text-white fw-bold">Contact Information</h1>

            <div class="mt-3">
              <div class="details d-flex align-items-start my-1">
                <Icon
                  icon="fa6-solid:square-phone"
                  class="text-white me-2"
                  :height="30"
                  :width="30"
                />
                <span class="text-light">09012345678</span>
                <!-- <span class="text-light">09876545678</span> -->
              </div>
              <div class="details d-flex align-items-start my-1">
                <Icon
                  icon="mdi:email-outline"
                  class="text-white me-2"
                  :height="30"
                  :width="30"
                />
                <span class="text-light">inf0@petigrity.com</span>
                <!-- <span class="text-light">09876545678</span> -->
              </div>
              <div class="details d-flex align-items-start my-1">
                <Icon
                  icon="fluent:location-28-filled"
                  class="text-white me-2"
                  :height="30"
                  :width="30"
                />
                <span class="text-light"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis, praesentium?</span
                >
              </div>
              <div class="text-center">
                <img
                  src="../../assets/images/img/contact.svg"
                  alt=""
                  class="w-75 img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-2 p-5">
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
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
            </div>
            <!-- <div class="form-row my-2">
              <label for="" class="label-control">Subject</label>
              <input type="text" class="form-control" placeholder="Subject" />
            </div> -->
            <div class="form-row my-2">
              <label for="" class="label-control">Message</label>
              <textarea rows="5" class="form-control"></textarea>
            </div>
            <div class="form-row my-2">
              <button class="btn btn-primary w-100">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="css">
#contact {
  padding: 4rem 0;
  position: relative;
}
.contact__details {
  height: 500px;
  background: var(--blue-1);
  border-radius: 5px;
}
.contact__details span {
  color: var(--yellow-1) !important;
}
</style>