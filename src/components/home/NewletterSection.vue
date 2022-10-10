<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-7">
        <div class="newsletter rounded-pill shadow-lg p-lg-5 p-2 text-center">
          <h3 class="fw-bolder text-light">Subscribe to our newsletter</h3>
          <div class="form-row">
            <div class="newsletter__input">
              <input
                type="email"
                placeholder="Enter your email address"
                class="form-control"
              />
              <button class="btn btn-primary rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css">
.newsletter {
  margin-top: 4.5rem;
  position: relative;
  /* background: url("../../assets/images/bg/newsletter-bg.jpg"),
  rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay; */
  background: url("../../assets/images/bg/footer-bg.svg") no-repeat;
  margin-bottom: -4rem;
  z-index: 2;
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
