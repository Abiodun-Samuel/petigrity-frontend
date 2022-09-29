<template>
  <div id="auth" class="row">
    <div class="col-lg-6 login__details my-3">
      <div class="container">
        <div class="login__form px-lg-5">
          <router-link :to="{ name: 'home' }">
            <img
              src="../../assets/images/logo/logo.png"
              alt="logo"
              class="m-auto d-block mb-2"
              width="98"
            />
          </router-link>

          <h3 class="fw-bolder text-success">Welcome to SuperoAgrobase Ltd.</h3>
          <p class="p">Create an account to enjoy the best offer👌</p>

          <form class="mt-2" @submit.prevent="LoginHandler">
            <div class="row my-2">
              <div class="col-6">
                <label for="first_name" class="form-label"> First name</label>
                <input
                  id="first_name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Enter your first name"
                  v-model="first_name"
                  :style="
                    !validFirst_name &&
                    first_nameFocus && { borderColor: 'red' }
                  "
                  @focus="first_nameFocus = true"
                  @blur="first_nameFocus = false"
                />
                <div
                  v-if="!validFirst_name && first_nameFocus"
                  class="alert bg-black px-1 position-absolute zindex-3"
                >
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> Must
                    be at least 3 letters
                  </p>
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> No
                    special characters
                  </p>
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> No
                    numbers
                  </p>
                </div>
              </div>

              <!-- last name  -->
              <div class="col-6">
                <label for="last_name" class="form-label"> Last name</label>
                <input
                  id="first_name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Enter your last name"
                  v-model="last_name"
                  :style="
                    !validLast_name && last_nameFocus && { borderColor: 'red' }
                  "
                  @focus="last_nameFocus = true"
                  @blur="last_nameFocus = false"
                />
                <div
                  v-if="!validLast_name && last_nameFocus"
                  class="alert bg-black mt-0 px-1 position-absolute zindex-3"
                >
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> Must
                    be at least 3 letters
                  </p>
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> No
                    special characters
                  </p>
                  <p class="d-flex align-items-center text-danger small">
                    <BaseIcon icon="ci:error" :height="15" :width="15" /> No
                    numbers
                  </p>
                </div>
              </div>
            </div>

            <div class="position-relative mb-2">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control w-100"
                :style="!validEmail && emailFocus && { borderColor: 'red' }"
                placeholder="Enter your email"
                v-model="email"
                @focus="emailFocus = true"
                @blur="emailFocus = false"
                autocomplete="off"
              />
              <div
                v-if="!validEmail && emailFocus"
                class="alert bg-black px-1 position-absolute w-100 zindex-3"
              >
                <p class="d-flex align-items-center text-danger small">
                  <BaseIcon icon="ci:error" :height="15" :width="15" /> Please
                  enter a valid email
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <label
                  for="pasword"
                  class="form-label d-flex align-items-center"
                >
                  Password
                </label>
                <div class="position-relative mb-2">
                  <div class="position-relative">
                    <input
                      id="password"
                      :type="type"
                      class="form-control w-100"
                      :style="
                        !validPassword &&
                        passwordFocus && { borderColor: 'red' }
                      "
                      placeholder="Enter your password"
                      v-model="password"
                      @focus="passwordFocus = true"
                      @blur="passwordFocus = false"
                      autocomplete="off"
                    />
                    <BaseIcon
                      class="reveal__password"
                      :icon="
                        type === 'password'
                          ? 'ant-design:eye-filled'
                          : type === 'text'
                          ? 'ant-design:eye-invisible-filled'
                          : 'ant-design:eye-filled'
                      "
                      :height="25"
                      :width="25"
                      @click="RevealPassword"
                    />
                  </div>
                  <div
                    v-if="!validPassword && passwordFocus"
                    class="alert bg-black mt-0 p-1 position-absolute w-100"
                  >
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      At least 1 number
                    </p>
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      At least 8 characters
                    </p>
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      At least 1 capital letter
                    </p>
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      At least 1 small letter
                    </p>
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      At least 1 special character
                    </p>
                  </div>
                </div>
              </div>
              <!-- passwordConf -->
              <div class="col-6">
                <label for="email" class="form-label d-flex align-items-center">
                  Password Confirmation
                </label>

                <div class="position-relative mb-2">
                  <div class="position-relative">
                    <input
                      :type="type_two"
                      class="form-control w-100"
                      :style="
                        !validPasswordConf &&
                        passwordConfFocus && { borderColor: 'red' }
                      "
                      placeholder="Confirm password"
                      v-model="passwordConf"
                      @focus="passwordConfFocus = true"
                      @blur="passwordConfFocus = false"
                      autocomplete="off"
                    />
                    <BaseIcon
                      class="reveal__password"
                      :icon="
                        type_two === 'password'
                          ? 'ant-design:eye-filled'
                          : type_two === 'text'
                          ? 'ant-design:eye-invisible-filled'
                          : 'ant-design:eye-filled'
                      "
                      :height="25"
                      :width="25"
                      @click="RevealPassword_two"
                    />
                  </div>
                  <div
                    v-if="!validPasswordConf && passwordConfFocus"
                    class="alert bg-black mt-0 p-1 position-absolute w-100"
                  >
                    <p
                      class="
                        d-flex
                        align-items-center
                        text-danger
                        small
                        my-0
                        py-0
                      "
                    >
                      <BaseIcon icon="ci:error" :height="15" :width="15" />
                      Password does not match
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="btn w-100 btn-gradient-success btn-success mt-1"
              :disabled="
                !validEmail ||
                !validPassword ||
                !validFirst_name ||
                !validLast_name ||
                !validPasswordConf
              "
            >
              <span
                v-if="AuthLoader"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Register
            </button>
          </form>

          <hr />

          <div class="my-1 text-center">
            <router-link :to="{ name: 'login' }" class="text-danger small"
              >Do you have an account already? SignIn</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6 login__banner p-4">
      <SideView />
    </div>
  </div>
</template>

<script setup>
import SideView from "@/components/SideView.vue";
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { PWD_REGEX, EMAIL_REGEX, NAME_REGEX } from "@/utils/constants";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const first_name = ref(null);
const first_nameFocus = ref(false);
const validFirst_name = ref(false);
const last_name = ref(null);
const last_nameFocus = ref(false);
const validLast_name = ref(false);
const email = ref(null);
const emailFocus = ref(false);
const validEmail = ref(false);
const password = ref(null);
const validPassword = ref(false);
const passwordFocus = ref(false);
const passwordConf = ref(null);
const validPasswordConf = ref(false);
const passwordConfFocus = ref(false);
const type = ref("password");
const type_two = ref("password");

const LoginHandler = () => {
  // if (email.value == null || email.value.length == 0) {
  //   validEmail.value = false;
  //   emailFocus.value = true;
  //   return;
  // }
  // if (password.value == null || password.value.length == 0) {
  //   validPassword.value = false;
  //   passwordFocus.value = true;
  //   return;
  // }
  if (
    validEmail &&
    validPassword &&
    validPassword &&
    validFirst_name &&
    validLast_name &&
    validPasswordConf
  ) {
    store
      .dispatch("authStore/RegisterAction", {
        email: email.value,
        password: password.value,
        first_name: first_name.value,
        last_name: last_name.value,
      })
      .then((value) => {
        if (value === 200) {
          email.value = null;
          password.value = null;
          last_name.value = null;
          first_name.value = null;
          router.push({
            path: "/auth/verify",
            query: { e: verify.value.e, i: verify.value.i },
          });
        }
      });
  }
};

const RevealPassword_two = () => {
  type_two.value === "password"
    ? (type_two.value = "text")
    : (type_two.value = "password");
};
const RevealPassword = () => {
  type.value === "password" ? (type.value = "text") : (type.value = "password");
};

// computed properties
const AuthLoader = computed(() => store.state.authStore.loading);
const verify = computed(() => store.getters["authStore/verify"]);

// watchers
watch([email, password, first_name, last_name, passwordConf], (newValue) => {
  if (EMAIL_REGEX.test(newValue[0])) {
    validEmail.value = true;
  } else {
    validEmail.value = false;
  }
  if (PWD_REGEX.test(newValue[1])) {
    validPassword.value = true;
  } else {
    validPassword.value = false;
  }
  if (NAME_REGEX.test(newValue[2])) {
    validFirst_name.value = true;
  } else {
    validFirst_name.value = false;
  }
  if (NAME_REGEX.test(newValue[3])) {
    validLast_name.value = true;
  } else {
    validLast_name.value = false;
  }
  if (newValue[1] === newValue[4]) {
    validPasswordConf.value = true;
  } else {
    validPasswordConf.value = false;
  }
});
</script>

<style lang="css">
#auth {
  background-color: #ffffff;
  min-height: 100vh;
  width: 100vw;
}
#auth .login__details {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
#auth .login__banner {
  background: url("../../assets/images/3185953.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reveal__password {
  position: absolute;
  top: 6px;
  right: 10px;
  cursor: pointer;
  transition: 400ms;
}
.reveal__password:hover {
  color: var(--green);
}
</style>
s