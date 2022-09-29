<template>
  <div id="auth" class="row">
    <div class="col-lg-6 login__details my-4">
      <div class="login__form">
        <router-link :to="{ name: 'home' }">
          <img
            src="../../assets/images/logo/logo.png"
            alt="logo"
            class="m-auto d-block mb-2"
            width="98"
          />
        </router-link>

        <h3 class="fw-bolder text-success">Welcome to SuperoAgrobase Ltd.</h3>
        <p class="p">Login to your account. 👌</p>

        <form class="my-2" @submit.prevent="LoginHandler">
          <div
            class="position-relative d-flex align-items-center small"
            :class="validEmail && emailFocus && 'text-success'"
          >
            <label for="email" class="small"> Email </label>
            <BaseIcon
              v-if="validEmail && emailFocus"
              icon="codicon:pass-filled"
              :height="15"
              :width="15"
            />
          </div>
          <div class="position-relative mb-3">
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
              class="alert bg-black mt-0 px-1 position-absolute w-100"
            >
              <p class="d-flex align-items-center text-danger small">
                <BaseIcon icon="ci:error" :height="15" :width="15" /> Please
                enter a valid email
              </p>
            </div>
          </div>

          <div
            class="
              position-relative
              d-flex
              align-items-center
              small
              justify-content-between
            "
            :class="validPassword && passwordFocus && 'text-success'"
          >
            <label for="email" class="small d-flex align-items-center">
              Password
              <BaseIcon
                v-if="validPassword && passwordFocus"
                icon="codicon:pass-filled"
                :height="15"
                :width="15"
            /></label>

            <router-link to="" class="text-danger small"
              >Reset Password</router-link
            >
          </div>

          <div class="position-relative mb-2">
            <div class="position-relative">
              <input
                :type="type"
                class="form-control w-100"
                :style="
                  !validPassword && passwordFocus && { borderColor: 'red' }
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
              <p class="d-flex align-items-center text-danger small my-0 py-0">
                <BaseIcon icon="ci:error" :height="15" :width="15" />
                At least 1 number
              </p>
              <p class="d-flex align-items-center text-danger small my-0 py-0">
                <BaseIcon icon="ci:error" :height="15" :width="15" />
                At least 8 characters
              </p>
              <p class="d-flex align-items-center text-danger small my-0 py-0">
                <BaseIcon icon="ci:error" :height="15" :width="15" />
                At least 1 capital letter
              </p>
              <p class="d-flex align-items-center text-danger small my-0 py-0">
                <BaseIcon icon="ci:error" :height="15" :width="15" />
                At least 1 small letter
              </p>
              <p class="d-flex align-items-center text-danger small my-0 py-0">
                <BaseIcon icon="ci:error" :height="15" :width="15" />
                At least 1 special character
              </p>
            </div>
          </div>

          <button
            :disabled="!validEmail || !validPassword"
            class="btn w-100 btn-gradient-success btn-success mt-1"
          >
            <span
              v-if="AuthLoader"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Login
          </button>
        </form>

        <hr />
        <!-- <button
          class="btn btn-outline-success w-100 d-flex align-items-center mt-1"
          @click="LoginGoogle"
        >
          <img
            src="../../assets/images/icons/google.png"
            alt="login with google"
            width="15"
            height="15"
            class="me-1"
          />
          Login with google
        </button> -->

        <div class="my-1 text-center">
          <router-link :to="{ name: 'register' }" class="text-danger small"
            >Don't have account? SignUp</router-link
          >
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
import { PWD_REGEX, EMAIL_REGEX } from "@/utils/constants";
import BaseIcon from "@/components/Base/BaseIcon.vue";

const store = useStore();
const email = ref(null);
const emailFocus = ref(false);
const validEmail = ref(false);
const password = ref(null);
const validPassword = ref(false);
const passwordFocus = ref(false);
const type = ref("password");
const user = ref("");

const LoginHandler = () => {
  if (email.value == null || email.value.length == 0) {
    validEmail.value = false;
    emailFocus.value = true;
    return;
  }
  if (password.value == null || password.value.length == 0) {
    validPassword.value = false;
    passwordFocus.value = true;
    return;
  }
  if (validEmail && validPassword) {
    store
      .dispatch("authStore/LoginAction", {
        email: email.value,
        password: password.value,
      })
      .then((value) => {
        if (value === 200) {
          email.value = null;
          password.value = null;
          store.dispatch("userStore/ProfileAction");
        }
      });
  }
};

const RevealPassword = () => {
  type.value === "password" ? (type.value = "text") : (type.value = "password");
};

// computed properties
const AuthLoader = computed(() => store.state.authStore.loading);

// watchers
watch([email, password], (newValue) => {
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
