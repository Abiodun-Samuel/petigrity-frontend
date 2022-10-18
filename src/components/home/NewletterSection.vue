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
                v-model="state.email"
                @blur="v$.email.$touch()"
              />
              <template v-if="v$.email.$error">
                <p v-if="!v$.email.required" class="small text-danger">
                  email is required.
                </p>
                <p v-if="!v$.email.email" class="small text-danger">
                  Please enter a valid email.
                </p>
              </template>
              <button
                @click="Subscribe"
                class="btn btn-primary rounded"
                type="button"
                :disabled="subscribe_mail_loading"
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
  console.log(v$);
  // v$.value.$touch();
  const result = await v$.value.$validate();
  console.log(result);
  if (!v$.value.$invalid) {
    console.log("goood");
  } else {
    console.log("bad");
  }
  // if()
  // store.dispatch("mailStore/SubscribeMailAction", {
  //   email: user_email.value,
  // });
  // user_email.value = "";
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
