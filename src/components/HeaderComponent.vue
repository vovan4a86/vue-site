<template>
  <header>
  <nav class="navbar-expand-lg navbar-dark bg-dark px-5">
    <div class="container d-flex justify-content-between align-items-center ">
      <h2>Simple Header</h2>
      <div class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Features" class="nav-link">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Album" class="nav-link">Album</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent.vue"
}
</script>

<style>

</style>