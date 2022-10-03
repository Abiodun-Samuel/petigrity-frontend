<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-lg">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img
          src="../../assets/images/logo/logo-header.png"
          alt="petigrity"
          class="img-fluid"
          width="130"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-lg-3 my-lg-1">
            <a @click="GoToView" class="nav-link" href="javascript.void(0)"
              >Services</a
            >
          </li>
          <li class="nav-item mx-lg-3 my-lg-1">
            <router-link class="nav-link" to="#contact">Contact</router-link>
          </li>
        </ul>
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <button class="btn btn-primary rounded-pill">Get Started</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="css">
</style>