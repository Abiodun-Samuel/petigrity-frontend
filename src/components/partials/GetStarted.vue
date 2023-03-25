<template>
  <!-- <p class="small text-danger">Fill the form: * are required</p> -->
  <div class="my-1">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSetMrkZjcLsGrfP3t9wB0UEMRWG87xbGsBzEwOz_2jZUDLOUQ/viewform?embedded=true"
      width="100%"
      height="800px"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >

    <!-- <div class="row my-1">
      <div class="col-6">
        <label for="first_name" class="form-label">First Name *</label>
        <input
          v-model="data.first_name"
          type="text"
          class="form-control"
          id="first_name"
          :style="v$.first_name.$error && 'border:1px solid red'"
          @blur="v$.first_name.$touch()"
        />
        <template v-for="error in v$.first_name.$errors" :key="error">
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
        <label for="last_name" class="form-label">Last Name *</label>
        <input
          v-model="data.last_name"
          type="text"
          class="form-control"
          id="last_name"
          :style="v$.last_name.$error && 'border:1px solid red'"
          @blur="v$.last_name.$touch()"
        />
        <template v-for="error in v$.last_name.$errors" :key="error">
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
    <div class="row my-1">
      <div class="col-6">
        <label for="email" class="form-label">Email *</label>
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          id="email"
          :style="v$.email.$error && 'border:1px solid red'"
          @blur="v$.email.$touch()"
        />
        <template v-for="error in v$.email.$errors" :key="error">
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
        <label for="phone" class="form-label">Phone *</label>
        <input
          v-model="data.phone"
          type="tel"
          class="form-control"
          id="phone"
          :style="v$.phone.$error && 'border:1px solid red'"
          @blur="v$.phone.$touch()"
        />
        <template v-for="error in v$.phone.$errors" :key="error">
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
    <div class="row my-1">
      <div class="col-6">
        <label class="form-label">Cover Type *</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="corporate"
            value="Corporate"
            name="cover-type"
            v-model="data.cover_type"
          />
          <label class="form-check-label" for="corporate">Corporate</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="data.cover_type"
            id="SME/Retail"
            value="SME/Retail"
            name="cover-type"
          />
          <label class="form-check-label" for="SME/Retail">SME/Retail</label>
        </div>
      </div>
      <div class="col-6">
        <label for="number" class="form-label">Budget (Per Person) *</label>

        <input
          v-model="data.budget"
          type="number"
          class="form-control"
          id="number"
          :style="v$.budget.$error && 'border:1px solid red'"
          @blur="v$.budget.$touch()"
        />
        <template v-for="error in v$.budget.$errors" :key="error">
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
    <div class="row my-1">
      <div class="col-6">
        <label for="company_name" class="form-label">Company Name *</label>
        <input
          v-model="data.company_name"
          id="company_name"
          type="text"
          class="form-control"
          :style="v$.company_name.$error && 'border:1px solid red'"
          @blur="v$.company_name.$touch()"
        />
        <template v-for="error in v$.company_name.$errors" :key="error">
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
        <label for="company_size" class="form-label">Company Size *</label>
        <input
          v-model="data.company_size"
          id="company_size"
          type="number"
          class="form-control"
          :style="v$.company_size.$error && 'border:1px solid red'"
          @blur="v$.company_size.$touch()"
        />
        <template v-for="error in v$.company_size.$errors" :key="error">
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
    <div class="row my-1">
      <div class="col-12">
        <label for="designation" class="form-label">Designation *</label>
        <input
          v-model="data.designation"
          id="designation"
          type="text"
          class="form-control"
          :style="v$.designation.$error && 'border:1px solid red'"
          @blur="v$.designation.$touch()"
        />
        <template v-for="error in v$.designation.$errors" :key="error">
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

    <div class="row my-1">
      <div class="col-12">
        <button
          :disabled="v$.email.$invalid || get_started_loading"
          @click="get__started"
          class="btn btn-primary w-100"
        >
          <span
            v-if="get_started_loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Submit
        </button>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const store = useStore();

const get_started_loading = computed(
  () => store.getters["mailStore/get_started_loading"]
);

const data = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  cover_type: "",
  budget: "",
  company_name: "",
  company_size: "",
  designation: "",
});

const rules = {
  first_name: { required, first_name: minLength(3) },
  last_name: { required, last_name: minLength(3) },
  email: { required, email },
  phone: { required },
  cover_type: { required },
  budget: { required },
  company_name: { required },
  company_size: { required },
  designation: { required, designation: minLength(5) },
};

const v$ = useVuelidate(rules, data);

const csvmaker = function (data) {
  let csvRows = [];
  const headers = Object.keys(data);
  csvRows.push(headers.join(","));
  const values = Object.values(data).join(",");
  csvRows.push(values);
  return csvRows.join("\n");
};

const get__started = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    const csvdata = csvmaker(data);
    const blob = new Blob([csvdata], { type: "text/csv" });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (event) {
      store
        .dispatch("mailStore/GetStatedAction", {
          email: data.email,
          name: `${data.first_name} ${data.last_name}`,
          // file: event.target.result,
        })
        .then((value) => {
          if (value) {
            v$.value.$reset();
            data.first_name = "";
            data.last_name = "";
            data.email = "";
            data.phone = "";
            data.cover_type = "";
            data.budget = "";
            data.company_name = "";
            data.company_size = "";
            data.designation = "";
          }
        });
    };
  }
};
</script>