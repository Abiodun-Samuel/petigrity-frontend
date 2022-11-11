<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-7">
        <div class="newsletter rounded shadow p-2 text-center">
          <h3 class="fw-bolder text-black">Subscribe to our newsletter</h3>
          <div class="form-row">
            <div class="newsletter__input">
              <input
                type="email"
                placeholder="Enter your email"
                class="form-control"
                :style="v$.email.$error && 'border:1px solid red'"
                v-model="state.email"
                @blur="v$.email.$touch()"
              />

              <button
                @click="Subscribe"
                class="btn btn-primary rounded"
                type="button"
                :disabled="subscribe_mail_loading || v$.email.$invalid"
              >
                <span
                  v-if="subscribe_mail_loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Subscribe
              </button>
            </div>
            <template v-for="error in v$.email.$errors" :key="error">
              <p class="small text-danger">
                {{ error.$message }}
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const rules = {
  email: { required, email },
};
const store = useStore();
const state = reactive({
  email: "",
});
const v$ = useVuelidate(rules, state);

const subscribe_mail_loading = computed(
  () => store.getters["mailStore/subscribe_mail_loading"]
);

const Subscribe = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    store
      .dispatch("mailStore/SubscribeMailAction", {
        email: state.email,
      })
      .then((value) => {
        if (value) {
          v$.value.$reset();
          state.email = "";
        }
      });
  }
};
</script>

<style lang="css">
.newsletter {
  margin-top: 4.5rem;
  position: relative;
  margin-bottom: -4rem;
  z-index: 2;
  background: url("../../assets/images/img/newsletter-img.jpg"), #fff;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  height: 150px;
}
.newsletter__input {
  display: flex;
  position: relative;
  align-items: center;
}
.newsletter__input input {
  height: 3.2rem;
}
.newsletter__input button {
  position: absolute;
  right: 3px;
}
</style>
