<template>
  <div id="auth" class="row">
    <div class="col-lg-6 login__details my-4">
      <div class="card">
        <div class="card-body">
          <router-link :to="{ name: 'home' }">
            <img
              src="../../assets/images/logo/logo.png"
              alt="logo"
              class="m-auto d-block mb-2"
              width="98"
            />
          </router-link>

          <h3 class="fw-bolder text-success">Email Verification</h3>
          <p class="p">Enter the code from your email in the field below.</p>

          <div class="d-flex align-items-center justify-content-between">
            <v-otp-input
              ref="otpInput"
              input-classes="form-control auth-input height-50 text-center me-1"
              separator=" "
              :num-inputs="6"
              :should-auto-focus="true"
              :is-input-num="true"
              :conditionalClass="['one', 'two', 'three', 'four']"
              :placeholder="['', '', '', '']"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>

          <div class="my-1">
            <a href="javascript:void(0)" class="p" @click="clearInput">Clear</a>
            <button
              :disabled="!completed || AuthLoader"
              class="btn btn-success w-100"
              @click="VerifyOTP"
            >
              <span
                v-if="AuthLoader"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Verify
            </button>

            <span v-if="!timerExpired" class="text-danger small"
              >Code will expire in <b>{{ timer }}</b>
            </span>
            <span
              v-else
              class="text-danger small resend__otp"
              @click="ResendOTP"
            >
              Code has expired!
              <b class="fw-bolder">Click to Resend</b>
            </span>
          </div>

          <hr />

          <div class="text-center d-flex align-items-center">
            <button class="btn ps-0" @click="ResendOTP">
              Didn't receive the code?
              <span class="fw-bold text-primary">Resend</span>
            </button>
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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import VOtpInput from "vue3-otp-input";

const store = useStore();
const route = useRoute();
const router = useRouter();

const otpInput = ref(null);
const otpValue = ref(null);
const timer = ref("");
const timerExpired = ref(false);
const completed = ref(false);

const handleOnComplete = (value) => {
  completed.value = true;
  otpValue.value = value;
};

const VerifyOTP = () => {
  store
    .dispatch("authStore/VerifyOtpAction", {
      user_id: route.query.i,
      user_email: route.query.e,
      otp: otpValue.value,
    })
    .then((value) => {
      if (value === 200) {
        otpInput.value.clearInput();
        router.push({ name: "login" });
      }
    });
};

const ResendOTP = () => {
  store.dispatch("authStore/ResendOtpAction", {
    user_id: route.query.i,
    user_email: route.query.e,
    otp: otpValue.value,
  });
};

// const handleOnChange = (value) => {
//   console.log("OTP changed: ", value);
// };

const clearInput = () => {
  otpInput.value.clearInput();
};

function countdown(minutes, seconds) {
  var endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  function updateTimer() {
    msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      timerExpired.value = true;
      timer.value = null;
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      timer.value =
        (hours ? hours + ":" + twoDigits(mins) : mins) +
        ":" +
        twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}

// computed properties
const AuthLoader = computed(() => store.state.authStore.loading);

onMounted(() => {
  countdown(5, 0);
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
.auth-input {
  max-width: 50px;
  padding-right: 0.571rem;
  padding-left: 0.571rem;
}
.btn {
  margin-bottom: 4px;
}
.resend__otp {
  cursor: pointer;
}
</style>
